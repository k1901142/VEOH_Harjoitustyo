const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shoppingList_schema = new Schema({
    name: {
        type: String,
        required: true
    },
    products: [{
        type: Object,
        req: true
    }]
});

const shoppingList_model = mongoose.model('shoppingList', shoppingList_schema);

module.exports = shoppingList_model;