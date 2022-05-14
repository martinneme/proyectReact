import { Nav, Navbar, Container } from "react-bootstrap";
import CartComponent from "../Cart/CartComponent";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="App-header">
      <Navbar className="nav" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Kuki Store</Navbar.Brand>
          <Nav className="me-auto">
   
              <NavLink to="/" className="btnNav">Inicio</NavLink>
         
          
              <NavLink to="/category/1" className="btnNav" >Categoria 1</NavLink>
  
      
              <NavLink to="/category/2" className="btnNav" >Categoria 2</NavLink>
  
       
              <NavLink to="/category/3" className="btnNav" >Categoria 3</NavLink>
      
          </Nav>
        </Container>
        <CartComponent />
      </Navbar>
    </header>
  );
}
