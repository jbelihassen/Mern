
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Main from './components/Main';
import Create from './components/Create';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
          <h1>Favorite authers</h1>


     <Routes>
     <Route path='/'  element={<Main/>} /> 
     <Route path='/new'  element={<Create/>}/>  
     <Route path='/edit/:id'  element={<Update/>}/>

    </Routes>   
    </div>
  );
}

export default App;
