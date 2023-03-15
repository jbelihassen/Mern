import React from 'react'
import { useState } from 'react'
import{useNavigate} from  'react-router-dom'
 
const Form = (props) => {

   const [type,setType]=useState()

   const [id,setId]=useState()

   const navigate=useNavigate()

  const handelSubmit=(e)=>{
    e.preventDefault()
    navigate(`/${type}/${id}`)
  }

    return (
        <div>

            <form  onSubmit={(e)=>{handelSubmit(e)}} >
                
                <div>
                    <label > Search For : </label>
                    <select  onChange={(e)=>{ setType(e.target.value) }}  >
                        <option value="people"> People  </option>
                        <option value="planet"> Planets  </option>
                    </select>
                </div>
                <div>

                    <label>    <span>Id:</span> </label>
                    <input type="number" min="1"   onChange={(e)=>{ setId(e.target.value) }}  />
                </div>
                <div>
                    <button> Search </button>
                </div>

            </form>



        </div>





    )
}

export default Form