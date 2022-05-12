import { Card, Button, ListGroupItem, ListGroup } from "react-bootstrap";

export default function ItemDetails() {
  return (

<> 
      <Card  className="CardProdDetail">
     <Card.Body className="CardProdDetailBody"> 
        <Card.Img
          className="prodDetailsImgStyle"
          src="./img/watch1.jpg"
          alt="Card cap"
        />
        <ListGroup variant="flush bodyDetailCard">
        <Card.Title>Robust Style</Card.Title>
          <ListGroupItem>For Champions. We think that is great for you.</ListGroupItem>
          <ListGroupItem>Immediate delivery - Free shipping</ListGroupItem>
          <ListGroupItem>Size: Small - Medium -
          Hacemos envíos gratis a través de Mercado Envíos.Trabajamos con Mercado Pago por lo que aceptamos todos los medios de pago que aparezcan ahí.
          </ListGroupItem>
          <ListGroupItem>$244</ListGroupItem>
        </ListGroup>
        <Button variant="primary details">Agregar al carrito</Button>
        </Card.Body>
        <Card.Footer className="detailsFooter">
          <Button variant="primary btnVolver">Volver</Button>
        </Card.Footer>
      </Card>
    
</>
  );
}
