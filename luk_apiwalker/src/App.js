
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import People from './components/People';
import Planets from './components/Planets';

function App() {
  return (
    <div className="App">
    
    <Form/>
     <Routes>


    
     <Route  path="/people/:peopleId"  element={<People/>} />
     <Route  path="/planet/:planetId"  element={<Planets/>} />
     </Routes>

     

    </div>
  );
}

export default App;
