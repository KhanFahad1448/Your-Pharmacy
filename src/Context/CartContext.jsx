import { createContext, useState, useMemo } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ➕ Add to Cart
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

  // ❌ Remove from Cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // ⬆️ Increase Quantity
  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // ⬇️ Decrease Quantity
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

  // 🧹 Clear Cart
  const clearCart = () => setCartItems([]);

  // 💰 Calculate Total
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
      {/* Responsive wrapper ensures all child components respect scaling */}
      <div
        className="
          text-[clamp(0.85rem,2.5vw,1rem)] 
          sm:text-[0.9rem] 
          md:text-[1rem] 
          lg:text-[1.05rem] 
          leading-relaxed
          w-full
          px-2 sm:px-4 md:px-6 
          transition-all duration-300
        "
      >
        {children}
      </div>
    </CartContext.Provider>
  );
};
