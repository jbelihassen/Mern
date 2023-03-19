import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';



const Form = () => {


  // STATE 
  const [products, setProducts] = useState([]); 
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")        // Get all product
      .then((response) => {
        // Always see what the server is coming back with 
        //  console.log(response.data)
        setProducts(response.data)
      })
      .catch(err => console.log(err))
  }, [])

  // Handel Submit
  const submitInput=(e)=>{
   e.preventDefault()
   const newProduct ={
    title,
    price,
    description
   }
  //  console.log(newProduct)
  // take the object and send it to the server => DB
   axios.post("http://localhost:8000/api/products/new", newProduct)
   .then((response)=>{console.log("SUCCES FROM SERVER", response.data)})
   .catch(err=> console.log("ERROR FROM SERVER",err))

   setTitle('')
   setPrice('')
   setDescription('')



  }





  return (
    <div>
      {/* {JSON.stringify(products)} */}
      <form  onSubmit={(e) => { submitInput(e) }} >
        <div>
          <label > Title: </label>
          <input type="text"    onChange={(e) => setTitle(e.target.value)} value={title} />
        </div>
        <br />
        <div>
          <label > Price: </label>
          <input type="number" min="1"  onChange={(e) => setPrice(e.target.value)} value={price} />
        </div>
        <br />
        <div>
          <label > Description: </label>
          <input type="text"   onChange={(e) => setDescription(e.target.value)} value={description} />
        </div>
        <br />
        <div>
          <button style={{ backgroundColor: 'BurlyWood', fontSize: "18px" }} > Create </button>
        </div>

      </form>

    </div>

  )
}

export default Form