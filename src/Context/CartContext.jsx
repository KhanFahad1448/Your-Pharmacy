import { createContext, useState, useMemo } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => setCartItems([]);

  const totalAmount = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
