
import './App.css';
import PersonCard from './Components/PersonCard';
function App() {

  return (
    <div className="App">
      <PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Black"> </PersonCard>
      <PersonCard firstName="Smith" lastName="John" age={ 88 } hairColor="Brown"> </PersonCard>
      <PersonCard firstName="Filmore" lastName="Millard" age={ 50 } hairColor="Brown"> </PersonCard>
      <PersonCard firstName="Smith" lastName="Maria" age={ 62 } hairColor="Brown"> </PersonCard>
    </div>
  );
}

export default App;
