

import ItemList from "./ItemList"
import React, { useState } from 'react'
import { products } from "../../data/products";

export default function ItemListContainer() {

  setTimeout(function(){
   console.log("Recuperando informacion");
   console.log(products);
}, 3000);
 
 
  return (
    <>
    <div className="BoxProd"> 
      <label className="taskTitle">Products</label>
      <div className="Products"></div>     
      <ItemList response={products}/>
      </div>
      </>
  );
}
