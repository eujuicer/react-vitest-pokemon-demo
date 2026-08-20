import './App.css'
import Welcome from './components/Welcome/Welcome';
import Counter from './components/Counter/Counter';
import Today from './components/Today/Today';

function App() {

  return (
    <>
      <Welcome firstname='Della' lastname='Duck' />
      <Today />
      <Counter />
    </>
  )
}

export default App;
