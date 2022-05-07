
import React, { useState } from 'react'
import Button from "react-bootstrap/Button";

export default function ItemCountCart({stock,initial}) {

const [itemCount,SetItemCount] = useState(initial)

const delItem  = () => {
    if(itemCount > 1) SetItemCount(itemCount - 1) 
}

const addItem  = () => {
    if(itemCount < stock) SetItemCount(itemCount + 1) 
}

React.useEffect(()=>{
    if(itemCount !== initial){ 
    console.log(`Ha cambiado las cantidades a ${itemCount}`)
    if(itemCount === stock){
        console.log("Has alcanzado el limite de stock")
    }}
},[itemCount])


  return (
  <>
   <div className='itemAddCard' >
       <div className='itemPanelAdd'>
    <Button onClick={delItem}>-</Button>
    <p className='itemCountValue'>{itemCount}</p>
    <Button onClick={addItem}>+</Button>
       </div>
   </div>
    </>
  );
}
