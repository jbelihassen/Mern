
import './App.css';
import {useState}  from "react"

function App() {

const [pokemon, setPokemon] = useState([])


  const fetchPokemon = () => {

  fetch("https://pokeapi.co/api/v2/pokemon?limit=807")

      .then(response => {
        return response.json();
      }).then(response => {
        console.log(response);
        setPokemon(response.results)
      }).catch(err => {
        console.log(err);
      });
  }

  return (
    <div className="App">
      <h1>Pokemon API</h1>
      <button onClick={() => { fetchPokemon() }}> Fetch Pokemon</button>
      {/* <div>
        {JSON.stringify(pokemon)}
      </div> */}
      {pokemon.map((onePokemone,index) =>{

        return ( <div key={index}> {onePokemone.name}</div>   )

      } )}

    </div>
  );
}

export default App;
