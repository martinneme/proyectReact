import { useContext } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/CartContext";

export default function Checkout({ handleClose ,total}) {
  const nav = useNavigate();
  const { cart } = useContext(cartContext);

  const order = {
    buyer: {
      name: "",
      lastName: "",
      Address: "",
      CreditCard: 0,
      secretCardNumber: 0,
    },
    date: new Date().toLocaleString(),
    Cart: [ ...cart ],
    total: total,
  };

  return (
    <>
      <Modal show="true">
        <Modal.Header>
          <Modal.Title>Confirmar orden</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="Name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus
                onChange={(e) => {
                  order.buyer.name = e.target.value;
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus
                onChange={(e) => {
                  order.buyer.lastName = e.target.value;
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Direccion</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus
                onChange={(e) => {
                  order.buyer.Address = e.target.value;
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="creditCard">
              <Form.Label>Tarjeta</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus
                onChange={(e) => {
                  order.buyer.CreditCard = parseInt(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="codSecCreditCard">
              <Form.Label>Codigo de seguridad</Form.Label>
              <Form.Control
                type="password"
                placeholder=""
                autoFocus
                onChange={(e) => {
                  order.buyer.secretCardNumber =parseInt(e.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Volver
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              console.log(order);
            }}
          >
            Comprar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
