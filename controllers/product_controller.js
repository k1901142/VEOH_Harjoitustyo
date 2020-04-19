<<<<<<< HEAD
<<<<<<< HEAD
/*const shoppingList_model = require('../models/shoppingList-model');
const shoppingList_view = require('../views/shoppingList-view');

const get_shoppingLists = (req, res, next) => {
    const user = req.user;
    user.populate('shoppingLists')
        .execPopulate()
        .then(() => {
            console.log('user:', user);
            let data = {
                user_name: user.name,
                shoppingLists: user.shoppingLists
            };
            let html = shoppingList_view.shoppingList_view(data);
            res.send(html);
        });
};

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

const get_shoppingList = (req, res, next) => {
    const shoppingList_id = req.params.id;
    shoppingList_model.findOne({
        _id: shoppingList_id
    }).then((shoppingList) => {
        let data = {
            text: shoppingList.text
        };
        let html = shoppingList_view.shoppingList_view(data);
        res.send(html);
    });
};

const post_shoppingList = (req, res, next) => {
    const user = req.user;
    let new_shoppingList = shoppingList_model({
        text: req.body.shoppingList
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
=======
/*const shoppingList_model = require('../models/shoppingList-model');
const shoppingList_view = require('../views/shoppingList-view');
=======
const product_model = require('../models/product-model');
const product_view = require('../views/product-view');
>>>>>>> Commit

const get_products = (req, res, next) => {
    //const user = req.user;
    //console.log('Kuka on käyttäjä?', user);
    //const shoppingList = Viikonloppu;
   // console.log('Tuleeko ostoslista?', shoppingList);
    //console.log('Ollaan get_productsissa!');
    //shoppingList.populate('nameShoppingList')
      //  .execPopulate()
        //.then(() => {
            const shoppingList = '5e4460a05ec1cc0a5c162cdd';
            let productData = {
                name: shoppingList.name,
                quantity: shoppingList.quantity,
                image_url: shoppingList.image_url
            };
            let html = product_view.product_view(productData);
            res.send(html);
       // });
};

/*const post_delete_shoppingList = (req, res, next) => {
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

const get_shoppingList = (req, res, next) => {
    const shoppingList_id = req.params.id;
    shoppingList_model.findOne({
        _id: shoppingList_id
    }).then((shoppingList) => {
        let data = {
            text: shoppingList.text
        };
        let html = shoppingList_view.shoppingList_view(data);
        res.send(html);
    });
};

//app.get('/products/:id', is_logged_handler, product_controller.get_products);
//app.post('/update-products'), is_logged_handler, product_controller.post_products;

const post_shoppingList = (req, res, next) => {
    const user = req.user;
    let new_shoppingList = shoppingList_model({
        text: req.body.shoppingList
    });
    new_shoppingList.save().then(() => {
        console.log('Shopping list saved');
        user.shoppingLists.push(new_shoppingList);
        user.save().then(() => {
            return res.redirect('/');
        });
    });
};*/

module.exports.get_products = get_products;
/*module.exports.get_shoppingList = get_shoppingList;
module.exports.post_shoppingList = post_shoppingList;
>>>>>>> Ostoslista-tasolle asti toteutettu
module.exports.post_delete_shoppingList = post_delete_shoppingList;*/