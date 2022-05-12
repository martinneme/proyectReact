import {useEffect, useState } from "react";
import { Button, Badge } from "react-bootstrap";

export default function CartComponent() {
    const [countItemCart,setcountItemCart] = useState(0)

    useEffect(()=>{
        setcountItemCart(8)
    },[])
    
  return (
    <Button className="cartClass" variant="light">
      <Badge pill bg="info">
        <img src="./img/cart.svg" alt="cart" />
        {countItemCart}
      </Badge>
    </Button>
  );
}
