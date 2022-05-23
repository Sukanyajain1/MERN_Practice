const Joke = require("../models/joke.model");


module.exports.findAllJokes = (req, res) => {
    Joke.find() // will find ALL
        .then(allJokes => {
            res.json({count: allJokes.length, results: allJokes})
        })
        .catch(err => {
            res.json({msg: "Something went wrong: ", error: err})
        })
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke =>{
            res.json({results: newlyCreatedJoke})
        })
        .catch(err => {
            res.json({msg: "Something went wrong: ", error: err})
        })
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(foundJoke => {
            res.json({results: foundJoke})
        })
        .catch(err => {
            res.json({msg: "Something went wrong: ", error: err})
        })
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate (
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedJoke => {
            res.json({results: updatedJoke})
        })
        .catch(err => {
            res.json({msg: "Something went wrong: ", error: err})
        })
}

module.exports.deleteJoke = (req, res) => {
    Joke.findOneAndDelete ({_id: req.params.id})
        .then(deletedJoke => {
            res.json({results: deletedJoke})
        })
        .catch(err => {
            res.json({msg: "Something went wrong: ", error: err})
        })
}

module.exports.findRandomJoke = (req, res) => {
    Joke.find()
        .then(allJokes => {
            let randomIdx = Math.floor(Math.random() * allJokes.length)
            res.json({count: allJokes.length, results: allJokes[randomIdx]})
        })
        .catch(err => {
            res.json({msg: "Something went wrong: ", error: err})
        })
}