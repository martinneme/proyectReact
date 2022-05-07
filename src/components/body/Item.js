import { Card, Button } from "react-bootstrap";
import ItemCountCart from "../ItemCountCart";

export default function Item({ item }) {
  return (
    <>
      <Card className="CardProd">
        <Card.Body>
        <img class="prodImgStyle" src={item.urlImg} alt="Card cap"/>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>{item.price}</Card.Text>
          <ItemCountCart  stock={5} initial={1} />
          <Button variant="primary">Agregar al carrito</Button>
        </Card.Body>
      </Card>
    </>
  );
}