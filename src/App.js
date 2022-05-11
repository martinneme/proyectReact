
import NavBar from "./components/NavBar";
import ItemListContainer from './components/body/ItemListContainer';
import ItemDetails from "./components/DetailsComponent/ItemDetails"


function App() {
  return (
    <div className="App">
    <header className="App-header">
      <NavBar />
      
      </header>
      <main className="main">
      <ItemListContainer />
      <ItemDetails />
      </main>
    </div>
  );
}

export default App;
