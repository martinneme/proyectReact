
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetails from "./components/DetailsComponent/ItemDetails"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
<BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path = '/' element = {<ItemListContainer/>}/>
    <Route path = '/category/:id' element = {<ItemListContainer/>} />
    </Routes>
    </BrowserRouter>

    
     
      {/* <ItemListContainer />
      <ItemDetails title={"Robust Style"} 
      slogan={"For Champions. We think that is great for you."}
      shipping={"Immediate delivery - Free shipping"}
      size={"Size: Small - Medium - Hacemos envíos gratis a través de Mercado Envíos."}
      price={"$244"}
      /> */}

    </div>
  );
}

export default App;
