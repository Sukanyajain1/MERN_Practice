const Product = require("../models/product.model"); // import the model so that the controller knows how to talk to the database to query the database.

module.exports.sayHello = (req, res) => {
    res.json({msg: "Please let this work"})
}

module.exports.findAllProducts = (req, res) => {
    Product.find() // will find ALL
        .then(allProducts => {
            res.json({count: allProducts.length, results: allProducts})
        })
        .catch(err => {
            res.json({msg: "Something went wrong: ", error: err})
        })
}

module.exports.createProduct = (req, res) => {
    //req.body represents form information
    Product.create(req.body)
        .then(newlyCreatedProduct =>{
            res.json({results: newlyCreatedProduct})
        })
        .catch(err => {
            res.json({msg: "Something went wrong: ", error: err})
        })
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id: req.params.id})
        .then(foundProduct => {
            res.json({results: foundProduct})
        })
        .catch(err => {
            res.json({msg: "Something went wrong: ", error: err})
        })
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate (
        {_id: req.params.id}, //specify which Product to update
        req.body, //specify the form information to update the Product with
        {new: true, runValidators: true}
    )
        .then(updatedProduct => {
            res.json({results: updatedProduct})
        })
        .catch(err => {
            res.json({msg: "Something went wrong: ", error: err})
        })
}

module.exports.deleteProduct = (req, res) => {
    Product.findOneAndDelete ({_id: req.params.id})
        .then(deletedProduct => {
            res.json({results: deletedProduct})
        })
        .catch(err => {
            res.json({msg: "Something went wrong: ", error: err})
        })
}

module.exports.findRandomProduct = (req, res) => {
    Product.find()
        .then(allProducts => {
            // get a random index number from index 0 up to but not including the allProducts.length
            let randomIdx = Math.floor(Math.random() * allProducts.length)


            res.json({count: allProducts.length, results: allProducts[randomIdx]})
        })
        .catch(err => {
            res.json({msg: "Something went wrong: ", error: err})
        })
}