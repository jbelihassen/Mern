import React from 'react';
import { useState } from 'react';


const Form = (props) => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")

    const processForm = (e) => {
        e.preventDefault()
        const newUser = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
            confirmpassword: confirmpassword
        }
        console.log(newUser)
        setFirstname("")
        setLastname("")
        setEmail("")
        setPassword("")
        setConfirmpassword("")

    }



    //  **** Validation ****     

    const [firstnameError, setFirstnameError] = useState("")
    const [lastnameError, setLastnameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmpasswordError, setConfirmpasswordError] = useState("")


    const checkFirstname = (e) => {
        setFirstname(e.target.value)
        if (e.target.value.length < 2) {
            setFirstnameError(true)                        
                    //  setFirstnameError("First name must be at least 2 characters")
        }else
           setFirstnameError(false)
    }

    const checkLastname = (e) => {
        setLastname(e.target.value)
        if (e.target.value.length < 2) {
            setLastnameError(true)
        } else {
            setLastnameError(false)
        }
    }

    const checkEmail = (e) => {
        setEmail(e.target.value)
        if (e.target.value.length < 8) {
            setEmailError(true)
        } else {
            setEmailError(false)
        }
    }

    const checkPassword = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 8) {
            setPasswordError(true)
        } else {
            setPasswordError(false)
        }
    }

    const checkConfirmassword = (e) => {
        setConfirmpassword(e.target.value)
        if (confirmpassword !== password) {
            console.log(password)
            console.log(confirmpassword)
            setConfirmpasswordError("password must match")
        }
    }




    return (

        <form onSubmit={(e) => { processForm(e) }} >


            <div>
                <h1>Create Hook Form </h1>
            </div>
            <div>
                <label>First Name: </label>
                <input onChange={(e) => { checkFirstname(e) }} value={firstname} />
              
                {firstnameError ? <p style={{ color: "red" }} >First name must be at least 2 characters</p> : <p></p> }
            </div>
            <br />
            <div>
                <label>Last Name: </label>
                <input onChange={(e) => { checkLastname(e) }}         value={lastname}  />
                
                {lastnameError ? <p style={{ color: "red" }} >Lirst name must be at least 2 characters</p> : <p></p> }
            </div>
            <br />
            <div>
                <label>Email: </label>
                <input onChange={(e) => { checkEmail(e) }}    value={email}        />
                {/* <p style={{ color: "red" }} >{emailError}</p> */}
                {emailError ? <p style={{ color: "red" }} >Email must be at least 8 characters</p> : <p></p> }
            </div>
            <br />
            <div>
                <label>Password: </label>
                <input type="password" onChange={(e) => { checkPassword(e) }}   value={password}      />
                {/* <p style={{ color: "red" }} >{passwordError}</p> */}
                {passwordError ? <p style={{ color: "red" }} > Password must be at least 8 characters</p> : <p></p> }
            </div>
            <br />
             <div>
                 {confirmpasswordError ? <p style={{ color: "red" }} > password must match </p> : <p></p> } 
                {/* <p style={{ color: "red" }} >{confirmpasswordError}</p> */}
                <label> Confirm Password: </label>
                <input type="password" onChange={(e) => { checkConfirmassword(e) }}  value={confirmpassword}  />

            </div>
            <br />

            <button> Create User </button>
            <br />
            <hr />
            <p>Your Form Data</p>
            <div>
                <p>First Name: {firstname}</p>
                <p>Last Name: {lastname}</p>
                <p>Email: {email} </p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmpassword}</p>
            </div>
        </form>
    );
};

export default Form;