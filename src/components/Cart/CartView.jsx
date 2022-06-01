import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../context/CartContext";
import { Card } from "react-bootstrap";
import CartEmpty from "./CartEmpty";
import CartProduct from "./Cartroduct";
import { Button} from "react-bootstrap";

export default function CartView() {
  const { cart, removeItemCart,suma } = useContext(cartContext);
  const [emptyCart, setEmptyCart] = useState(true);
  const [totalPrice, settotalPrice] = useState(0);

  useEffect(()=>{
   cart.length ? setEmptyCart(false) : setEmptyCart(true)
   settotalPrice(suma())
   // eslint-disable-next-line 
},[cart])



  return (
    <>
   
      <h1>Carrito</h1>
      { emptyCart ?(< CartEmpty />)  :(cart.map((item) => {
          
          return <CartProduct item={item} key={item.id} removeItemCart={removeItemCart}/>})
      ) 
     
      }
      <Card style={{ display: emptyCart && "none" }}>
      <h3>Total a pagar: ${totalPrice}</h3>
      <Button variant="success">
          Checkout
      </Button>
      </Card>

    </>
  );
}
