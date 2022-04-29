
import NavBar from "./components/NavBar";
import ItemListContainer from './components/body/ItemListContainer';



function App() {
  return (
    <div className="App">
    <header className="App-header">
      <NavBar />
      
      </header>
      <main className="main">
      <ItemListContainer Task1={["Terminar Entregable","Agregar cambios","Realizar Commit","Pushear a github"]} />
      </main>
    </div>
  );
}

export default App;
