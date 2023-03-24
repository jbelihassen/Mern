// IMPORT CONTROLLER ==========>

const Auther = require ("../controllers/authers.controller")

// !!!!! AlWAYS TEST ALL THE ROUTES 
// !! W/ VALIDATION 
// !!! BEFORE YOU EVER TOUCH THE CLIENT (REACT)


// !!!!  ROUTE  !!!! 

module.exports = (app) =>{

    app.get("/api/authers", Auther.findAll);  // ======> ROUTE GET ALL NOTES
    
    app.post("/api/new", Auther.addAther); //=======> route Create  New Notes
    
    app.get("/api/authers/:id", Auther.findOne); // route Get one Note by id 
    
    app.put("/api/edit/:id", Auther.updateAuther); // =====>  route updated Note by id
    
    app.delete("/api/authers/:id/delete", Auther.deleteAuther); // =====> route delete Note by id 
    
    }