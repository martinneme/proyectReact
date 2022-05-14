import { Card, Button } from "react-bootstrap";
import ItemCountCart from "../ItemCount/ItemCountCart";
import { useNavigate } from "react-router-dom";


export default function Item({ item }) {




  const nav = useNavigate()

  return (
    <>
      <Card className="CardProd">
        <Card.Body>
        <img className="prodImgStyle" src={item.urlImg} alt="Card cap"/>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>{item.price}</Card.Text>
          <Button variant="primary details" onClick={()=> nav(`/product/${item.id}`)} >Detalles</Button>
          <ItemCountCart  stock={item.stock} initial={1} />
          <Button variant="primary details" >Agregar al carrito</Button>
        </Card.Body>
      </Card>
    </>
  );
}