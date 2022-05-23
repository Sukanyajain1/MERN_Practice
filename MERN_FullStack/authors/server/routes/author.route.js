const AuthorController = require("../controllers/author.controller")


// routes here
module.exports = (app) => {
    app.get("/api/authors", AuthorController.findAllAuthors);
    app.post("/api/authors/new", AuthorController.createAuthor);
    app.get("/api/authors/random", AuthorController.findRandomAuthor);  //best practice to put all the string variable urls at the top and then put any param routes toward the bottom.
    app.get("/api/authors/show_one/:id", AuthorController.findOneAuthor);
    app.put("/api/authors/update/:id", AuthorController.updateAuthor);
    app.delete("/api/authors/delete/:id", AuthorController.deleteAuthor);
    
    


}
