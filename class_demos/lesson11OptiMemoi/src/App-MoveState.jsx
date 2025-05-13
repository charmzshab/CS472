
import './App.css'
import Todos from './components/moveState/Todos'
import Counter from './components/moveState/Counter'

function App() {
  console.log('App rendered..............');
  return (
    <>
      <Todos />
      <Counter />
    </>
  );
}

export default App
