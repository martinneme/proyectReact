import { Card, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

export default function OrderConfirm() {
    const nav = useNavigate();
    const { id } = useParams();
   

  return (
    <>
    <Card> 
     <h3>Se genero su pedido!</h3>
     <h5>Nro: {id}</h5>
     <Button variant="primary btnVolver"  onClick={() => nav(`/`)}>Volver al Home</Button>
    </Card>
    </>
  );
}
