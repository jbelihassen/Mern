//  ==========   FULL GRUD ==========   


// Import model ===========>

const Auther = require ("../models/authers.model")

// !!!!  READ ALL = GET ALL  !!!!! 

module.exports.findAll = (request,response) =>{
    Auther.find()
    .then((allDaAuthers)=>{
        response.json(allDaAuthers)  // [] !!!!! 
    })
    .catch(err=>response.json(err))
}


// !!!!  CREATE NEW Auther  !!!!! 

module.exports.addAther = (request,response) =>{
    Auther.create(request.body) 
    .then((newAuther)=>{
        console.log("Ather created Succefully")
        response.json(newAuther)  // On peut ajouter (_id) 

    })
    .catch(err=> response.status(400).json(err))         
    // !!!!  zidna fiha satus (400) !!
}




// !!!!!  READ ONE === GET A SINGLE Product By _id  !!!!!!!

module.exports.findOne = (request,response) =>{
    Auther.findById(request.params.id)
    
    .then((oneAuther)=>{
        response.json(oneAuther)  

    })
    .catch(err=>response.json(err))
}


// !!!!!  UPDATE ONE !!!!!!!


module.exports.updateAuther = (request,response) =>{
    Auther.findByIdAndUpdate(request.params.id, request.body,{new:true, runValidators:true})
    
    .then((result)=>{
        response.json(result)  

    })
    .catch(err=>response.status(400).json(err))
}

// !!!!!  DELETE !!!!!!!

module.exports.deleteAuther = (request,response) =>{
    Auther.findByIdAndDelete(request.params.id)
    
    .then((result)=>{
        response.json({result:result})  

    })
    .catch(err=>response.json(err))
}
