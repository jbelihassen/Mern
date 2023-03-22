//  ==========   FULL GRUD ==========   


// Import model

const product = require ("../models/products.model")

// READ ALL = GET ALL 

module.exports.findAllProducts = (request,response) =>{
    product.find()
    .then((allDaProducts)=>{
        response.json(allDaProducts)  // [] !!!!! 

    })
    .catch(()=>{response.json({message:"Somthing went wrong"})})
}





// CREATE NEW PRODUCT


module.exports.addNewProduct = (request,response) =>{
    product.create(request.body) 
    .then((newCreateProduct)=>{
        response.json(newCreateProduct)  // On peut ajouter (_id) 

    })
    .catch(()=>{response.json({message:"Somthing went wrong"})})
}




// READ ONE = GET A SINGLE Product By _id

module.exports.findOneProduct = (request,response) =>{
    product.findOne({_id: request.params.id})
    
    .then((oneProduct)=>{
        response.json(oneProduct)  

    })
    .catch(()=>{response.json({message:"Somthing went wrong"})})
}


// Update 


module.exports.updateProduct = (request,response) =>{
    product.findOneAndUpdate({_id: request.params.id}, request.body,{new:true, runValidators:true})
    
    .then((updatedProduct)=>{
        response.json(updatedProduct)  

    })
    .catch(()=>{response.json({message:"Somthing went wrong"})})
}


// DELETE 

module.exports.deleteProduct = (request,response) =>{
    product.deleteOne({_id: request.params.id})
    
    .then((result)=>{
        response.json({result:result})  

    })
    .catch(()=>{response.json({message:"Somthing went wrong", error: err})})
}
