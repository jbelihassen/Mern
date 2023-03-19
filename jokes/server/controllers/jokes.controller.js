
//  ==========   FULL GRUD ==========   


// Import model

const joke = require ("../models/jokes.model")

// READ ALL = GET ALL 

module.exports.findAllJokes = (request,response) =>{
    joke.find()
    .then((allDaJokos)=>{
        response.json(allDaJokos)  // [] !!!!! 

    })
    .catch(()=>{response.json({message:"Somthing went wrong", error: err})})
}





// CREATE NEW JOKE


module.exports.addNewJoke = (request,response) =>{
    joke.create(request.body) 
    .then((newCreateJoKe)=>{
        response.json(newCreateJoKe)  // On peut ajouter (_id) 

    })
    .catch(()=>{response.json({message:"Somthing went wrong", error: err})})
}




// READ ONE = GET A SINGLE JOKE By _id

module.exports.findOneJoke = (request,response) =>{
    joke.findOne({_id: request.params.id})
    
    .then((oneJoke)=>{
        response.json(oneJoke)  

    })
    .catch(()=>{response.json({message:"Somthing went wrong", error: err})})
}


// Update 


module.exports.updateJoke = (request,response) =>{
    joke.findOneAndUpdate({_id: request.params.id}, request.body,{new:true, runValidators:true})
    
    .then((updatedJoke)=>{
        response.json(updatedJoke)  

    })
    .catch(()=>{response.json({message:"Somthing went wrong", error: err})})
}


// DELETE 

module.exports.deleteJoke = (request,response) =>{
    joke.deleteOne({_id: request.params.id})
    
    .then((result)=>{
        response.json({result:result})  

    })
    .catch(()=>{response.json({message:"Somthing went wrong", error: err})})
}
