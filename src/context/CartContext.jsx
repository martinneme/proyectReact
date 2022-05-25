import { createContext } from "react";
import { useState } from "react";


export const cartContext = createContext();
const Provider = cartContext.Provider;

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {

    if (isInCart(item.category)) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.category === item.category) {
          cartItem.quantity+=quantity;
        }
        return cartItem;
      });
      setCart(newCart);
    } else {
      console.log("entro al else del addtoCArt")
      setCart([...cart, { ...item, quantity: quantity }]);
    }
  };

  const clearCart = () => setCart([])


  const removeItemCart = (category) => {
    console.log(cart)
    if (isInCart(category)) {
      const newCart = cart.filter((itemCart) => itemCart.category !== category)
      setCart(newCart);
    } else {
      console.log("no existe este objeto en el carrito")
    }
    console.log(cart)
  }

  const isInCart = (category) => {
  return cart.find((item) =>  item.category === category);
  };

  return <Provider value={{ addToCart,removeItemCart,clearCart, cart }}>{children}</Provider>;
}
