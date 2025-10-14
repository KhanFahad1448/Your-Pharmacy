// src/Pages/Cart.jsx
import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, Trash2, Plus, Minus } from "lucide-react";

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalAmount,
  } = useContext(CartContext);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    if (!user) {
      alert("Please log in to proceed!");
      navigate("/login");
      return;
    }
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen px-6 md:px-20 py-10 bg-gray-50">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-10 flex items-center justify-center gap-2 text-gray-900">
        <ShoppingBag className="text-blue-600 w-8 h-8" /> Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="max-w-5xl mx-auto space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-5 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4"
            >
              {/* Product Info */}
              <div className="flex items-center gap-4 flex-1">
                {item.images && (
                  <img
                    src={item.images}
                    alt={item.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-xl"
                  />
                )}
                <div>
                  <h2 className="font-semibold text-lg sm:text-xl text-gray-900">
                    {item.name}
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    ₹{item.price} × {item.quantity} = ₹
                    {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3 justify-center mt-3 sm:mt-0">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                >
                  <Minus size={16} />
                </button>
                <span className="font-medium min-w-[28px] text-center text-gray-900">
                  {item.quantity}
                </span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition"
                >
                  <Plus size={16} />
                </button>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="p-2 bg-red-100 rounded-full hover:bg-red-200 transition mt-3 sm:mt-0"
              >
                <Trash2 size={16} className="text-red-600" />
              </button>
            </div>
          ))}

          {/* Total & Checkout */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h2 className="text-2xl font-bold text-gray-900">
              Total: ₹{totalAmount.toFixed(2)}
            </h2>
            <button
              onClick={handleProceedToCheckout}
              className="px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
