import React from 'react'
import {useParams} from "react-router-dom";

const Other = (props) => {

const {number}=useParams();
const {color}=useParams();
const {bgcolor}=useParams();

console.log(useParams())



if (isNaN (number)){


    return (
        <div style={{  color:color, backgroundColor:bgcolor }} > <p> The Word is :{number} </p>    </div>
        )
 
    }

    return (
    <div>

        <p> the number is : {number}  </p>

    </div>
  )
}

export default Other