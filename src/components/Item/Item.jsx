import { Card, Button } from "react-bootstrap";
import ItemCountCart from "../ItemCount/ItemCountCart";

export default function Item({ item }) {
  return (
    <>
      <Card className="CardProd">
        <Card.Body>
        <img className="prodImgStyle" src={item.urlImg} alt="Card cap"/>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>{item.price}</Card.Text>
          <Button variant="primary details">Detalles</Button>
          <ItemCountCart  stock={item.stock} initial={1} />
          <Button variant="primary details">Agregar al carrito</Button>
        </Card.Body>
      </Card>
    </>
  );
}
