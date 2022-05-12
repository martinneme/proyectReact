import { Card, Button, ListGroupItem, ListGroup } from "react-bootstrap";

export default function ItemDetails({title,slogan,shipping,size,price}) {
  
  //Los parametros de entrada deberian 
  //reemplazarse por el objeto producto una vez invocado dentro de item.jsx
  
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
        <Card.Title>{title}</Card.Title>
          <ListGroupItem>{slogan}</ListGroupItem>
          <ListGroupItem>{shipping}</ListGroupItem>
          <ListGroupItem>{size}
          </ListGroupItem>
          <ListGroupItem>{price}</ListGroupItem>
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
