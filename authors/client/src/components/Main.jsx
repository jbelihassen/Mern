import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'




const Main = () => {

    const navigate = useNavigate();
    const [authers, setAuthers] = useState([])


    // trigger when the component finished loading //
    useEffect(() => {
        axios.get("http://localhost:8000/api/authers")        // GET All Note  from server
            .then((response) => {
                // Always see what the server is coming back with 
                console.log(response.data)
                setAuthers(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    // !!! GO TO UPDATE ROUTE

      const goToUpdate=(autherMongoID)=>{
          console.log(autherMongoID)
          navigate("/edit/"+ autherMongoID )
      }

    // !!! GO TO DELETE ROUTE
    
      const goToDelete=(deleteID)=>{
        // console.log(deleteID)
        axios.delete("http://localhost:8000/api/authers/" + deleteID +"/delete")
        .then(response=>{
          console.log("DELETED SUCCESSFELY",response.data)
          // Remove From the Dom  after a successfely delete
          setAuthers(authers.filter((auther)=>auther._id !== deleteID))
        })
        .catch(err=>console.log(err))
    }


    return (
        <div   className="container col-6"    >
            <Link  to={"/new"} > Add an Author  </Link>
            <h6 style={{color: "blue"   }} > We have quotes by: </h6>
            
                <table className="table table-striped table-hover">
                    <thead>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </thead>
                    <tbody>
                        {authers.map((OneAuther) => {
                            return (
                                <tr key={OneAuther._id}   >

                                    <td> {OneAuther.name}</td>
                                    <td>
                                        <button className="btn btn-success"   onClick={()=>goToUpdate(OneAuther._id)}   >EDIT</button>
                                        <button className="btn btn-danger"   onClick={()=>goToDelete(OneAuther._id)}         >DELETE</button>
                                    </td>

                                </tr>
                            )
                        })}
                    </tbody>
                </table>

        </div>
    )
}

export default Main