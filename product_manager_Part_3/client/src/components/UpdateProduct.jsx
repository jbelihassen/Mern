import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import {useNavigate} from "react-router-dom"

const UpdateProduct = (props) => {

    const navigate = useNavigate()
    const { id } = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");
    

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then((response) => {
                // Always see what the server is coming back with 
                //  console.log(response.data)
                setTitle(response.data.title)
                setPrice(response.data.price)
                setDescription(response.data.description)

            })
            .catch(err => console.log(err))
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(response => console.log(response))
            
            .catch(err => console.error(err));
             navigate("/")
    }



    return (


        <div>
            <h1>Update Product</h1>

            <form onSubmit={(e) => { updateProduct(e) }} >
                <div>
                    <label > Title: </label>
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
                </div>
                <br />
                <div>
                    <label > Price: </label>
                    <input type="number" min="1" onChange={(e) => setPrice(e.target.value)} value={price} />
                </div>
                <br />
                <div>
                    <label > Description: </label>
                    <input type="text" onChange={(e) => setDescription(e.target.value)} value={description} />
                </div>
                <br />
                <div>
                    <button style={{ backgroundColor: 'BurlyWood', fontSize: "18px" }} > Update </button>
                </div>

            </form>





        </div>



    )
}

export default UpdateProduct