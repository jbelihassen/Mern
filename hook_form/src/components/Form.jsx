import React from 'react';
import { useState } from 'react';


const Form = (props) => {
    const[firstname,setFirstname] = useState("")
    const[lastname,setLastname] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[confirmpassword,setConfirmpassword] = useState("")


    return (
        <form >
            <div>
                <h1>Create Hook Form</h1>
            </div>
            <div>
                <label>First Name: </label>
                <input onChange={(e)=>{setFirstname(e.target.value)}} />
            </div>
            <br />
            <div>
                <label>Last Name: </label>
                <input onChange={(e)=>{setLastname(e.target.value)}} />
            </div>
            <br />
            <div>
                <label>Email: </label>
                <input onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
            <br />
            <div>
                <label>Password: </label>
                <input type="password"    onChange={(e)=>{setPassword(e.target.value)}} />
            </div>
            <br />
            <div>
                <label>Confirm Password: </label>
                <input type = "password" onChange={(e)=>{setConfirmpassword(e.target.value)}} />
            </div>
            <br />
            <hr />
            <p>Your Form Data</p>
            <div>
                <p>First Name:  {firstname}</p>
                <p>Last Name:  {lastname}</p>
                <p>Email:   {email} </p>
                <p>Password:  {password}</p>
                <p>Confirm Password:  {confirmpassword}</p>
            </div>
        </form>
    );
};

export default Form;
