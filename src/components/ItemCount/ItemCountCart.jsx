import React, { useState } from "react";
import Button from "react-bootstrap/Button";

export default function ItemCountCart({ stock, initial,ClickToAddToCart }) {
  const [itemCount, SetItemCount] = useState(initial);

  const delItem = () => {
    if (itemCount > 1) SetItemCount(itemCount - 1);
  };

  const addItem = () => {
    if (itemCount < stock) SetItemCount(itemCount + 1);
  };

  
  return (
    <>
      <div className="itemAddCard">
        <div className="itemPanelAdd">
          <Button className="details" onClick={delItem}>
            -
          </Button>
          <p className="itemCountValue">{itemCount}</p>
          <Button className="details" onClick={addItem}>
            +
          </Button>
        </div>
        <Button variant="primary addToCart" onClick={()=>ClickToAddToCart(itemCount)} >Agregar al carrito</Button>
      </div>
    </>
  );
}
