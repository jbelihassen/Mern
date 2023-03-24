import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'


const Create = (props) => {


    const [name, setname] = useState("");


    // !! For errors 

    const [errors, setErrors] = useState([])


    const nav = useNavigate()

    // !! Handle the form inputs
    const createName = (e) => {
        e.preventDefault()
        const newNote = { name }

        //  console.log(newNote)
        // take the object and send it to the server => DB
        axios.post("http://localhost:8000/api/new", newNote)

            .then((response) => {
                console.log(response.data)
                console.log(" ✔✔ client success")
                nav("/")
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
            <form onSubmit={(e) => {createName(e)}} >
                <div className="form-group  " >
                    <label > Name:  </label>
                    <input className="form-control" type="text" onChange={(e) => setname(e.target.value)} value={name} />
                </div>
                <div>
                    <button className="btn btn-danger " > <Link to={"/"} > Cancel </Link> </button>       <button className="btn btn-success" > Submit </button>
                </div>
            </form>

        </div>
    )
}

export default Create