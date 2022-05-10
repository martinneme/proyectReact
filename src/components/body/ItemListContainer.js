

import ItemList from "./ItemList"
import React, { useEffect, useState } from 'react'
import { newTask } from "../../data/products";
import SpinnerLoading from "../Spinner/Spinner";

export default function ItemListContainer() {
const [listProducts,setListProducts] = useState([])
const [loading,setLoading]=useState(false)

useEffect(()=>{
  setLoading(true)
  newTask
  .then((res)=>setListProducts(res))
  .catch((error)=>console.error(error))
  .finally(()=>setLoading(false))
},[])
 
  return (
    <>
    <div className="BoxProd"> 
      <label className="taskTitle">Products</label>
      {loading ? <SpinnerLoading /> : <ItemList listProducts={listProducts}/> }
      </div>
      </>
  );
}
