const ProductController = require("../controllers/product.controller")


// routes here
module.exports = (app) => {
    app.get("/api/products", ProductController.findAllProducts);
    app.post("/api/products/new", ProductController.createProduct);
    app.get("/api/products/random", ProductController.findRandomProduct);  //best practice to put all the string variable urls at the top and then put any param routes toward the bottom.
    app.get("/api/products/show_one/:id", ProductController.findOneProduct);
    app.put("/api/products/update/:id", ProductController.updateProduct);
    app.delete("/api/products/delete/:id", ProductController.deleteProduct);
    
    


}
