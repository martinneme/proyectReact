import { createContext } from "react";
import  { useState } from "react";


export const cartContext = createContext()
 const Provider = cartContext.Provider

export default function CartProvider({children}) {
    const [cart,setCart] = useState(0)


    const addToCart = (quantity) => {
        console.log(`Se agrego ${quantity} cantidad de producto/s al carrito`)
        console.log(cart+quantity)
        setCart(cart+quantity)
      };


  return (
<Provider value={{addToCart,cart}}>

      {children}
</Provider>

  );
}
