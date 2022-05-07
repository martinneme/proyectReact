
import NavBar from "./components/NavBar";
import ItemListContainer from './components/body/ItemListContainer';



function App() {
  return (
    <div className="App">
    <header className="App-header">
      <NavBar />
      
      </header>
      <main className="main">
      <ItemListContainer />
      </main>
    </div>
  );
}

export default App;
