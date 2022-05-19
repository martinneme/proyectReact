
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailsContainer from "./components/DetailsComponent/ItemDetailsContainer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="App">
<BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path = '/' element = {<ItemListContainer/>}/>
    <Route path = '/category/:id' element = {<ItemListContainer/>} />
    <Route path = '/product/:id'  element = {<ItemDetailsContainer/>} />
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
