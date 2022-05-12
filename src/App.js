
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetails from "./components/DetailsComponent/ItemDetails"


function App() {
  return (
    <div className="App">
    <header className="App-header">
      <NavBar />
      
      </header>
      <main className="main">
      <ItemListContainer />
      <ItemDetails title={"Robust Style"} 
      slogan={"For Champions. We think that is great for you."}
      shipping={"Immediate delivery - Free shipping"}
      size={"Size: Small - Medium - Hacemos envíos gratis a través de Mercado Envíos."}
      price={"$244"}
      />
      </main>
    </div>
  );
}

export default App;
