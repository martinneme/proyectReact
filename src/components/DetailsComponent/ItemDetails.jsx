import { Card, Button, ListGroupItem, ListGroup } from "react-bootstrap";
import ItemCountCart from "../ItemCount/ItemCountCart";
import { useNavigate } from "react-router-dom";


export default function ItemDetails({productDetail}) {
  const {title,description,descriptionExtend,price,urlImg,stock} = productDetail
  const nav = useNavigate()


  return (

<> 
      <Card  className="CardProdDetail">
     <Card.Body className="CardProdDetailBody"> 
        <Card.Img
          className="prodDetailsImgStyle"
          src={urlImg}
          alt="Card cap"
        />
        <ListGroup variant="flush bodyDetailCard">
        <Card.Title>{title}</Card.Title>
          <ListGroupItem>{description}</ListGroupItem>
          <ListGroupItem>{descriptionExtend}</ListGroupItem>
          <ListGroupItem>{price}</ListGroupItem>
          <ListGroupItem> <ItemCountCart  stock={stock} initial={1} /></ListGroupItem>
        </ListGroup>
        <Button variant="primary addToCart">Agregar al carrito</Button>
     
        </Card.Body>
        <Card.Footer className="detailsFooter">
          <Button variant="primary btnVolver"  onClick={()=> nav(`/`)}>Volver</Button>
        </Card.Footer>
      </Card>
    
</>
  );
}
