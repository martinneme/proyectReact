import ItemList from "../ItemComponents/ItemList";
import React, { useEffect, useState } from "react";
import SpinnerLoading from "../Spinner/Spinner";

export default function ItemListContainer() {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("https://apimocha.com/watchproducts/watch")
      .then((response) => response.json())
      .then((res) => setListProducts(res))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
      
    // eslint-disable-next-line
  }, []);

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
