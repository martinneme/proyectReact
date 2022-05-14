import { Nav, Navbar, Container } from "react-bootstrap";
import CartComponent from "../Cart/CartComponent";

export default function NavBar() {
  return (
    <header className="App-header">
    <Navbar className="nav" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Kuki App</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#features">Nosotros</Nav.Link>
          <Nav.Link href="#pricing">Contacto</Nav.Link>
        </Nav>
      </Container>
      <CartComponent />
    </Navbar>
    </header>
  );
}
