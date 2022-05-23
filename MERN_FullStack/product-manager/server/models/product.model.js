const mongoose = require('mongoose');


// purpose of this file is to describe how our Products table (collection) should look like
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Name of product is required!"],
        minlength:[3, "Name of product must be at least 3 characters!"]
    },
    price:{
        type: Number,
        required: [true, "Price is required!"],
        min:[0, "Price can't be less than $0!"]
    },
    description:{
        type: String,
        // required: [true, "Description is required!"],
        // minlength:[2, "Description must be at least 2 characters!"]
    }
}, {timestamps: true})



const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;