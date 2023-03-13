import logo from './logo.svg';
import './App.css';
import BoxForm from './components/BoxForm';
import {useState} from 'react';
import Display from './components/Display';

 

function App() {


  const[colors,setcolors]=useState([])

   
  
  return (
    <fieldset>
      <legend>App.js</legend>
      {/* {JSON.stringify(color)} */}
    <div className="App">
     <BoxForm  colors = {colors}   setcolors={setcolors}    />

     <Display colors = {colors}        />
     {/* {JSON.stringify(props.color)} */}

    </div>
    </fieldset>
  );
}

export default App;

