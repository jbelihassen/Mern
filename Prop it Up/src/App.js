
import './App.css';
import PersonCard from './components/MyNewComponent';

function App() {
  return (
    <div className="App">
    <PersonCard firstName={"doe"}  lastName={"Jane"} age = {"45"}  HairColor = {"Black"}  ></PersonCard>
    <PersonCard firstName={"Smith"}  lastName={"John"} age = {"88"}  HairColor = {"Brown"}  ></PersonCard>
    <PersonCard firstName={"Filmorre"}  lastName={"Millard"} age = {"50"}  HairColor = {"Brown"}  ></PersonCard>
    <PersonCard firstName={"Smith"}  lastName={"Maria"} age = {"62"}  HairColor = {"Brown"}  ></PersonCard>
    
    </div>
  );
}

export default App;
