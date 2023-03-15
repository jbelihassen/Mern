import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'

const Planets = (props) => {

  const { planetId } = useParams();

  console.log(planetId)

  const [planet, setPlanet] = useState({})

  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/${planetId}`)
      .then(response => {
        // console.log(response.data);
        setPlanet(response.data)

      })
      .catch(err => {
        console.log("erreur")
      })
  }, [planetId])


  console.log(planet)


  return (
    <div>
      <h1>Planet</h1>

      {
         planet  ?       <>
        
          <h2>Name:{planet.name}</h2>
          <p>Climate:{planet.climate}</p>
          <p>Terrain:{planet.terrain}</p>
          <p>Surface Water:{planet.surface_water}</p>
          <p>Skin Color:{planet.population}</p>
             </> : <> Loading.........</>
      }

    </div>
  )
}

export default Planets