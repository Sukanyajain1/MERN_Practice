const JokeController = require("../controllers/joke.controller");

// routes here
module.exports = (app) => {
    // list of all jokes
    app.get("/api/jokes", JokeController.findAllJokes);
    // return random joke
    app.get("/api/jokes/random", JokeController.findRandomJoke);
    // create a new joke
    app.post("/api/jokes/new", JokeController.createJoke);
    // update a joke with matching id
    app.put("/api/jokes/update/:id", JokeController.updateJoke);
    // delete by id
    app.delete("/api/jokes/delete/:id", JokeController.deleteJoke);
    // find joke by id
    app.get("/api/jokes/:id", JokeController.findOneJoke);
}