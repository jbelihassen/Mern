// Import controller

const productController = require ("../controllers/products.controller")

// console.log(jokeController);


// ROUTE 


module.exports = (app) =>{

app.get("/api/products", productController.findAllProducts);  // route Get all joke []

app.post("/api/products/new",productController.addNewProduct); // route Crete  new joke

app.get("/api/products/:id",productController.findOneProduct); // route Get one joke

app.put("/api/products/:id",productController.updateProduct); // route updated joke by id

app.delete("/api/products/:id",productController.deleteProduct); // route delete joke by id 

}
  