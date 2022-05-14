
import { useState,useEffect } from "react";
import ItemDetails from "./ItemDetails";
import SpinnerLoading from "../Spinner/Spinner";
import { useParams } from "react-router-dom";

export default function ItemDetailsContainer() {
    const [ProductDetail, setProductDetail] = useState([]);
    const [loading, setLoading] = useState(false);
    const {id} = useParams();

  
    useEffect(() => {
      setLoading(true);
    

      fetch("https://apimocha.com/watchproducts/watch")
        .then((response) => response.json())
        .then((res) => setProductDetail(res.find((item)=>item.id === id )))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
  
      // eslint-disable-next-line
    },[]);
 
  
  return (

<> 
{loading ? (
          <SpinnerLoading />
        ) : (
            <ItemDetails  productDetail={ProductDetail}/> 
        )}

</>
  );
}