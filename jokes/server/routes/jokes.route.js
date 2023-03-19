
// Import controller

const jokeController = require ("../controllers/jokes.controller")

// console.log(jokeController);


// ROUTE 


module.exports = (app) =>{

app.get("/api/jokes", jokeController.findAllJokes);  // route Get all joke []

app.post("/api/jokes/new",jokeController.addNewJoke); // route Crete  new joke

app.get("/api/jokes/:id",jokeController.findOneJoke); /// route Get one joke

app.put("/api/jokes/:id",jokeController.updateJoke); // route updated joke by id

app.delete("/api/jokes/:id",jokeController.deleteJoke); // route delete joke by id 

}
  