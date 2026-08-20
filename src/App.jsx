import './App.css'
import Welcome from './components/Welcome/Welcome';
import Counter from './components/Counter/Counter';
import Today from './components/Today/Today';
import Pokemon from './components/Pokemon/Pokemon';

function App() {

  // ↓ Donnée pour créer le composant
  const pokemon = {
    name : "litten",
    types: ["fire", "Water"],
    stats: [
        { name : "hp", value : 45 },
        { name : "attack", value : 65 },
        { name : "defense", value : 40 },
        { name : "special-attack", value : 60 },
        { name : "special-defense", value : 40 },
        { name : "speed", value : 70 },
    ],
    sprites : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png"
  };

  return (
    <>
      <Welcome firstname='Della' lastname='Duck' />
      <Today /> 
      <Counter />
      <Pokemon data={pokemon} />
    </>
  )
}

export default App;
