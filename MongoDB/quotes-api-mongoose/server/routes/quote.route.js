const QuoteController = require("../controllers/quote.controller")


// routes here
module.exports = (app) => {
    app.get("/api/hello", QuoteController.sayHello);
    app.get("/api/quotes", QuoteController.findAllQuotes);
    app.post("/api/quotes", QuoteController.createQuote);
    app.get("/api/quotes/random", QuoteController.findRandomQuote);  //best practice to put all the string variable urls at the top and then put any param routes toward the bottom.
    app.get("/api/quotes/:id", QuoteController.findOneQuote);
    app.put("/api/quotes/:id", QuoteController.updateQuote);
    app.delete("/api/quotes/:id", QuoteController.deleteQuote);
    
    


}