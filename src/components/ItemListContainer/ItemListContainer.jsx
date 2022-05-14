import ItemList from "../ItemList/ItemList";
import React, { useEffect, useState } from "react";
import SpinnerLoading from "../Spinner/Spinner";
import { useParams } from "react-router-dom";


export default function ItemListContainer() {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const {id} = useParams();

  useEffect(() => {
    setLoading(true);
    const products = [];


    fetch("https://apimocha.com/watchproducts/watch")
      .then((response) => response.json())
      .then((res) => {
        res.forEach((e) => {
          products.push(e)
        })
      })
      .catch((error) => console.error(error))
      .finally(() =>{
        setLoading(false)
      
        if(!id){
          setListProducts(products)
        }else{
          const productsFilters = products.filter((product => product.category === id))
          setListProducts(productsFilters)
        }});

    // eslint-disable-next-line
  },[id]);

  return (
    <>
      <div className="BoxProd">
        <label className="taskTitle">Products</label>
        {loading ? (
          <SpinnerLoading />
        ) : (
          <ItemList listProducts={listProducts} />
        )}
      </div>
    
    </>
  );
}
