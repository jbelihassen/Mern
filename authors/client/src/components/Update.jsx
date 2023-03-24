import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import {useParams} from "react-router-dom";


const Update = (props) => {


    const [name, setName] = useState("");

    const { id } = useParams();

    useEffect(() => {
        axios.get("http://localhost:8000/api/authers/" + id)
            .then((response) => {
                // Always see what the server is coming back with 
                //  console.log(response.data)
                setName(response.data.name)
               
    
            })
            .catch(err => console.log(err))
    }, [])
    // !! For errors 

    const [errors, setErrors] = useState([])


    const nav = useNavigate()

    // !! Handle the form inputs
    const updateName = (e) => {
        e.preventDefault()
        const newAuther = { name }

        //  console.log(newNote)
        // take the object and send it to the server => DB
        axios.put("http://localhost:8000/api/edit/"+ id , newAuther)

            .then((response) => {
                console.log(response.data)
                console.log(" ✔✔ client success")
                nav ("/")
            })
            .catch(err => {
                console.log((" ✂✂ client error"))
                console.log(err.response.data.errors)
                const errorResponse = err.response.data.errors;    //!!!  Get the errors from err.response.data
                const errorArr = []        //!!!  Define a temp error array  to push message in  
                for (const key of Object.keys(errorResponse)) {    //!!  loop throught all errors and get the message 
                    console.log("=======", key)
                    errorArr.push(errorResponse[key].message)
                }
                //!!! set Errors 
                setErrors(errorArr)
            })

    }



    return (


        <div className="container col-4" >
            {/* {JSON.stringify(errors)} */}

            <div>
                {errors.map((err, idx) => <p style={{ color: "red" }} key={idx} >{err}</p>)}
            </div>
            <Link to={"/"} > Home </Link>
            <h6 style={{ color: "blue" }} > We have quotes by: </h6>
            <form onSubmit={(e) => {updateName(e)}} >
                <div className="form-group  " >
                    <label > Name:  </label>
                    <input className="form-control" type="text" onChange={(e) => setName(e.target.value)} value={name} />
                </div>
                <div>
                    <button className="btn btn-danger" > <Link to={"/"} > Cancel </Link> </button>       <button className="btn btn-success" > Submit </button>
                </div>
            </form>

        </div>
    )
}

export default Update