import { createContext } from "react";
import  { useState } from "react";


export const cartContext = createContext()
 const Provider = cartContext.Provider

export default function CartProvider({children}) {
    const [cart,setCart] = useState([])


    const addToCart = (quantity) => {
        console.log(`Se agrego ${quantity} cantidad de producto/s al carrito`)
        setCart(quantity)
      };


  return (
<Provider value={{addToCart,cart}}>

      {children}
</Provider>

  );
}
