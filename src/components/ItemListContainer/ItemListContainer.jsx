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

    fetch("https://apimocha.com/watchproducts/watch")
      .then((response) => response.json())
      .then((res) => {
        if(!id){
          setListProducts(res)
        }else{
          const productsFilters = res.filter((product => product.category === id))
          setListProducts(productsFilters)
        }})
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
      
    // eslint-disable-next-line
      },[id]);

  return (
    <>
      <div className="BoxProd">
        <label className="sectionTitle">Products</label>
        {loading ? (
          <SpinnerLoading />
        ) : (
          <ItemList listProducts={listProducts} />
        )}
      </div>
    
    </>
  );
}
