const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product_schema = new Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    image_url: {
        type: String,
        required: true
    }

});
const product_model = new mongoose.model('product', product_schema);

module.exports = product_model;