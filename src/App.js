import './App.css';
import ListaTareas from './components/ListaTareas';


function App() {
  return (
    <div className="App">
      <div className='tareas-lista-principal'>
        <h1>My tasks</h1>
        <ListaTareas/>
      </div>
    </div>
  );
}

export default App;
