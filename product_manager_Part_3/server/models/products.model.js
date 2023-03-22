const mongoose = require('mongoose');


// Create Instance of the Schema

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "Title must be mre than 2 characters"]
    },

    price: {
        type: Number,
        required: [true, "you need to provide a number"],
        // min :0,
        // max :1000
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [10, "Description must be mre than 10 characters"]

    }


}, { timestamps: true })


// Create Collection (table)

const products = mongoose.model('product', ProductSchema);


// Export the mongoose model

module.exports = products;