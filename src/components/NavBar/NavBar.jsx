import { Nav, Navbar, Container } from "react-bootstrap";
import CartComponent from "../Cart/CartComponent";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="App-header">
      <Navbar className="nav" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Kuki App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to="/">Inicio</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="category/1">Categoria 1</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="category/2">Categoria 2</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="category/3">Categoria 3</NavLink>
            </Nav.Link>
          </Nav>
        </Container>
        <CartComponent />
      </Navbar>
    </header>
  );
}
