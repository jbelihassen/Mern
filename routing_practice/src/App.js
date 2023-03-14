
import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Other from './components/Other';
// import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      {/* <h1>React Routing</h1> */}
      {/* <a href="/">Home</a> */}
      {/* <br />
      <Link to={"/home"} > React Home </Link> */}
      <Routes>
        <Route path="/home" element={<Home/>} />
        {/* <Route path="/hello" element={<Hello/>} /> */}
        <Route path="/:number" element={<Other/>} />
        
        <Route path="/:hello/:color/:bgcolor"  element=  {<Other/>}    />
        
      </Routes>
    </div>
  );
}

export default App;
