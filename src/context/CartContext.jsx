import { createContext } from "react";
import { useState } from "react";

export const cartContext = createContext();
const Provider = cartContext.Provider;

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          cartItem.quantity++;
        }
        return cartItem;
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, quantity: quantity }]);
    }
  };

  const isInCart = (id) => {
    cart.map((item) => {
      if (item.id === id) {
        return true;
      }
      return false;
    });
  };

  return <Provider value={{ addToCart, cart }}>{children}</Provider>;
}
