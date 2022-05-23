const Author = require("../models/author.model"); // import the model so that the controller knows how to talk to the database to query the database.

module.exports.sayHello = (req, res) => {
    res.json({msg: "Please let this work"})
}

module.exports.findAllAuthors = (req, res) => {
    Author.find() // will find ALL
        .then(allAuthors => {
            res.json({count: allAuthors.length, results: allAuthors})
        })
        .catch(err => {
            res.json({msg: "Something went wrong: ", error: err})
        })
}

module.exports.createAuthor = (req, res) => {
    //req.body represents form information
    Author.create(req.body)
        .then(newlyCreatedAuthor =>{
            res.json({results: newlyCreatedAuthor})
        })
        .catch(err => {
            res.json({msg: "Something went wrong: ", error: err})
        })
}

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then(foundAuthor => {
            res.json({results: foundAuthor})
        })
        .catch(err => {
            res.json({msg: "Something went wrong: ", error: err})
        })
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate (
        {_id: req.params.id}, //specify which Author to update
        req.body, //specify the form information to update the Author with
        {new: true, runValidators: true}
    )
        .then(updatedAuthor => {
            res.json({results: updatedAuthor})
        })
        .catch(err => {
            res.json({msg: "Something went wrong: ", error: err})
        })
}

module.exports.deleteAuthor = (req, res) => {
    Author.findOneAndDelete ({_id: req.params.id})
        .then(deletedAuthor => {
            res.json({results: deletedAuthor})
        })
        .catch(err => {
            res.json({msg: "Something went wrong: ", error: err})
        })
}

module.exports.findRandomAuthor = (req, res) => {
    Author.find()
        .then(allAuthors => {
            // get a random index number from index 0 up to but not including the allAuthors.length
            let randomIdx = Math.floor(Math.random() * allAuthors.length)


            res.json({count: allAuthors.length, results: allAuthors[randomIdx]})
        })
        .catch(err => {
            res.json({msg: "Something went wrong: ", error: err})
        })
}