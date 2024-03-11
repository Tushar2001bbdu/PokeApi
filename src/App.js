import logo from './logo.svg';
import './App.css';
import Heading from './Components/Heading';
import ListOfPokemon from './Components/ListOfPokemon';
function App() {
  document.body.background="yellow"
  return (
    < div className="container h-100 w-100 bg-primary">
      <Heading />
  <ListOfPokemon />
    </div>

  );
}

export default App;
