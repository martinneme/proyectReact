import {useContext, useEffect, useState } from "react";
import { Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../context/CartContext";

export default function CartComponent() {
    const [countItemCart,setcountItemCart] = useState(0)
  const {cart} = useContext(cartContext)
  const nav = useNavigate();


    useEffect(()=>{
        setcountItemCart(cart.length)
    },[cart])
    
  return (
    <Button className="cartClass" variant="light" onClick={()=>nav('/cart')}>
      <Badge pill bg="info">
        <img src="../img/cart.svg" alt="cart" />
        {countItemCart}
      </Badge>
    </Button>
  );
}
