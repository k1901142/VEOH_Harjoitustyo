const shoppingList_model = require('../models/shoppingList-model');
const shoppingList_view = require('../views/shoppingList-view');
const product_model =require('../models/product-model');

//haetaan käyttäjän ostoslistat
const get_shoppingLists = (req, res, next) => {
    const user = req.user;
    user.populate('shoppingLists')
        .execPopulate()
        .then(() => {
            console.log('User:', user);
            //tietyn käyttäjän ostoslistat
            let dataShoppingList = {
                user_name: user.name,
                shoppingLists: user.shoppingLists
            };
            let html = shoppingList_view.shoppingLists_view(dataShoppingList);
            res.send(html);
        });
};

//poistetaan ostoslista
const post_delete_shoppingList = (req, res, next) => {
    const user = req.user;
    const shoppingList_id_to_delete = req.body.shoppingList_id;

    //Remove shopping list from user.shoppingLists
    const updated_shoppingLists = user.shoppingLists.filter((shoppingList_id) => {
        return shoppingList_id != shoppingList_id_to_delete;
    });
    user.shoppingLists = updated_shoppingLists;

    //Remove shoppingList object from database
    user.save().then(() => {
        shoppingList_model.findByIdAndRemove(shoppingList_id_to_delete).then(() => {
            res.redirect('/');
        });
    });
};

//haetaan tietty ostoslista
const get_shoppingList = (req, res, next) => {
    const shoppingList_id = req.params.id;
    shoppingList_model.findOne({
        _id: shoppingList_id
    }).then((shoppingList) => {
        let dataShoppingList = {
            nameShoppingList: shoppingList.text,
            product: []
        };
        let html = shoppingList_view.shoppingList_view(dataShoppingList);
        res.send(html);
    });
};

const post_shoppingList = (req, res, next) => {
    const user = req.user;
    let new_shoppingList = shoppingList_model({
        nameShoppingList: req.body.shoppingList,
        products: []
    });
    new_shoppingList.save().then(() => {
        console.log('Shopping list saved');
        user.shoppingLists.push(new_shoppingList);
        user.save().then(() => {
            return res.redirect('/');
        });
    });
};

module.exports.get_shoppingLists = get_shoppingLists;
module.exports.get_shoppingList = get_shoppingList;
module.exports.post_shoppingList = post_shoppingList;
module.exports.post_delete_shoppingList = post_delete_shoppingList;