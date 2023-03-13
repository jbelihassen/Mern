import React,{useState} from 'react'

const BoxForm = (props) => {

    const [color,setColor]= useState("#ffffff")

    const submitInput=(e) =>{
        e.preventDefault()
        const newColor={color}
        props.setcolors([...props.colors, newColor])
        // setInput("")
        e.target.reset()

    // const newcolor={color}
    // // props.setColor([...props.color,input])
        
    // const copyColor=[...props.color]
    // copyColor.push(newcolor)
    // console.log(newcolor)
    // props.setColor(copyColor)
    // setColor("#ffffff")
     
    }
    



    return (
        
        <fieldset>
            <legend>BoxForm.jsx</legend>
            Current input : {color}
            
            <form onSubmit={(e) =>{submitInput(e)} }>
                <div>
                    <label > Color : </label>
                    <input type="color"  onChange={(e)=>{setColor(e.target.value)}}  value={color}   />
                     <button> Add + </button>

                </div>
                <br />
                

            </form>


        </fieldset>
    )
}

export default BoxForm

