const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shoppingList_schema = new Schema({
    nameShoppingList: {
        type: String,
        required: true
    },
    products: [{
        type: Object,
        req: true
    }]
});

/*let tuote = {
    name: 'testi',
    quantity: 3,
    image_url:'http://kuva'
}*/

const shoppingList_model = mongoose.model('shoppingList', shoppingList_schema);

module.exports = shoppingList_model;