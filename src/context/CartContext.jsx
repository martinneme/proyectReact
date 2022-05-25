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
          cartItem.quantity += quantity;
        }
        return cartItem;
      });
      setCart(newCart);
    } else {
      console.log("entro al else del addtoCArt");
      setCart([...cart, { ...item, quantity: quantity }]);
    }
  };

  const clearCart = () => setCart([]);

  const removeItemCart = (id) => {
    if (isInCart(id)) {
      const newCart = cart.filter((itemCart) => itemCart.id !== id);
      setCart(newCart);
    } else {
      console.error("no existe este objeto en el carrito");
    }
  };

  const isInCart = (id) => {
    return cart.find((item) => item.id === id);
  };

  return (
    <Provider value={{ addToCart, removeItemCart, clearCart, cart }}>
      {children}
    </Provider>
  );
}
