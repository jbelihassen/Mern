import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'

const People = (props) => {

  const { peopleId } = useParams();

  console.log(peopleId)

  const [people, setPeople] = useState(null)

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/${peopleId}`)
      .then(response => {
        // console.log(response.data);
        setPeople(response.data)

      })
      .catch(err => {
        console.log("erreur")
      })
  }, [peopleId])


  console.log(people)


  return (
    <div>
      <h1>People</h1>

      {
         people  ?       <>
        
          <h2>Name:{people.name}</h2>
          <p>Height:{people.height}</p>
          <p>Mass:{people.mass}</p>
          <p>Hair Color:{people.hair_color}</p>
          <p>Skin Color:{people.skin_color}</p>
             </> : <>Loading.........</>
      }

    </div>
  )
}

export default People