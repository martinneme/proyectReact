import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../context/CartContext";
import { Card } from "react-bootstrap";
import CartEmpty from "./CartEmpty";
import CartProduct from "./Cartroduct";
import { Button} from "react-bootstrap";
import Checkout from "../Checkout/Checkout";

export default function CartView() {
  const { cart, removeItemCart,suma } = useContext(cartContext);
  const [emptyCart, setEmptyCart] = useState(true);
  const [modal, setModal] = useState(false);
  const [totalPrice, settotalPrice] = useState(0);


  useEffect(()=>{
   cart.length ? setEmptyCart(false) : setEmptyCart(true)
   settotalPrice(suma())
   // eslint-disable-next-line 
},[cart])

const handleClose = () => {
    setModal(false)
  }

  return (
    <>
   
      <h1>Carrito</h1>
      { emptyCart ?(< CartEmpty />)  :(cart.map((item) => {
          
          return <CartProduct item={item} key={item.id} removeItemCart={removeItemCart}/>})
      ) 
     
      }
      <Card style={{ display: emptyCart && "none" }}>
      <h3>Total a pagar: ${totalPrice}</h3>
      <Button variant="success" onClick={()=>setModal(true)}>
          Terminar mi compra
      </Button>
      {modal && <Checkout handleClose={handleClose} total={totalPrice}/>}
      </Card>

    </>
  );
}
