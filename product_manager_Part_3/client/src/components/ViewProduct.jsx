import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";



const ViewProduct = (props) => {

    const [products, setProducts] = useState([]);

    const {id} = useParams();

        useEffect(()=>{
             axios.get(`http://localhost:8000/api/products/${id}`)
         
            .then((response) => {setProducts(response.data)})
            .catch(err => console.log(err))
        },[])


    
  return (
    <div>  
    <h1>View Product </h1>
     <p> Title: {products.title}</p>
     <p> Price :{products.price}</p>
     <p>Description: {products.description}</p>
    </div>
  )
}

export default ViewProduct