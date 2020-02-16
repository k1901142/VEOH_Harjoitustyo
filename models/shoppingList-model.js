<<<<<<< HEAD
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

const shoppingList_model = mongoose.model('shoppingList', shoppingList_schema);

=======
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

const shoppingList_model = mongoose.model('shoppingList', shoppingList_schema);

>>>>>>> Ostoslista-tasolle asti toteutettu
module.exports = shoppingList_model;