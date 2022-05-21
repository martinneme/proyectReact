import {useContext, useEffect, useState } from "react";
import { Button, Badge } from "react-bootstrap";
import { cartContext } from "../../context/CartContext";

export default function CartComponent() {
    const [countItemCart,setcountItemCart] = useState(0)
  const {cart} = useContext(cartContext)

    useEffect(()=>{
        setcountItemCart(cart)
    },[cart])
    
  return (
    <Button className="cartClass" variant="light">
      <Badge pill bg="info">
        <img src="../img/cart.svg" alt="cart" />
        {countItemCart}
      </Badge>
    </Button>
  );
}
