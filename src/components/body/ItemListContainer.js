import { Card, Button } from "react-bootstrap";
import ItemCountCart from "../ItemCountCart";

export default function ItemListContainer({ Task1 }) {
  const taskList = Task1.map((task) => {
    return (
      <>
        <Card className="CardProd">
          <Card.Body>
            <Card.Title>{task}</Card.Title>
            <Card.Text></Card.Text>
            <ItemCountCart  stock={5} initial={1} />
            <Button variant="primary">Agregar al carrito</Button>
          </Card.Body>
         
        </Card>
    
      </>
    );
  });

  return (
    <>
    <div className="BoxProd"> 
      <label className="taskTitle">Products</label>
      <div className="Products">{taskList}</div>
      </div>
    </>
  );
}
