import { Card, Button } from "react-bootstrap";

export default function ItemDetails() {
    return (
        <>
    <Card className="CardProd">
        <Card.Body>
        <img className="prodImgStyle" src="./img/watch1.jpg" alt="Card cap"/>
          <Card.Title>Robust Style</Card.Title>
          <Card.Text>For Champions. We think that is great for you. </Card.Text>
          <Card.Text>Immediate delivery - Free shipping</Card.Text>
          <Card.Text>Size: Small - Medium </Card.Text>
          <Card.Text>$245</Card.Text>
          <Button variant="primary details">Volver</Button>
          <Button variant="primary details">Agregar al carrito</Button>
        </Card.Body>
      </Card>
        </>
    );
  }
  