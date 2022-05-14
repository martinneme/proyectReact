import { Card, Button, ListGroupItem, ListGroup } from "react-bootstrap";
import ItemCountCart from "../ItemCount/ItemCountCart";
export default function ItemDetails({productDetail}) {
  const {title,description,descriptionExtend,price} = productDetail
  
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
          <ListGroupItem>{description}</ListGroupItem>
          <ListGroupItem>{descriptionExtend}</ListGroupItem>
          <ListGroupItem>{price}</ListGroupItem>
          <ListGroupItem> <ItemCountCart  stock={5} initial={1} /></ListGroupItem>
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
