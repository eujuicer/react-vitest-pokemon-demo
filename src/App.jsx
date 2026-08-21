import './App.css'
import Welcome from './components/Welcome/Welcome';
import Counter from './components/Counter/Counter';
import Today from './components/Today/Today';
import Pokemon from './components/Pokemon/Pokemon';
import PokemonRequester from './components/PokemonRequester/PokemonRequester';

function App() {

  return (
    <>
      <Welcome firstname='Della' lastname='Duck' />
      <Today /> 
      <Counter />
      <PokemonRequester id={25} />
    </>
  )
}

export default App;
