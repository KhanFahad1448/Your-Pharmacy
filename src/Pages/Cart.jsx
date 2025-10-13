import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";

const Cart = () => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalAmount,
  } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-20">
      <h1 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-2">
        <ShoppingBag className="text-blue-600" /> Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600 mt-20">
          🛒 Your cart is empty. Add some medicines or products!
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-3xl p-6 md:p-10 max-w-4xl mx-auto">
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-center sm:items-start justify-between border-b pb-4 gap-4"
              >
                {/* Product Info */}
                <div className="flex items-center gap-4 flex-1">
                  <img
                    src={item.images}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="text-gray-500 text-sm">₹{item.price}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3 justify-center">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="font-medium min-w-[24px] text-center">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                {/* Price and Remove */}
                <div className="flex items-center gap-4 justify-center mt-3 sm:mt-0">
                  <p className="font-semibold text-blue-600">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 bg-red-100 rounded-full hover:bg-red-200"
                  >
                    <Trash2 size={16} className="text-red-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total Amount */}
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center">
            <h2 className="text-xl font-semibold">
              Total: ₹{totalAmount.toFixed(2)}
            </h2>
            <button className="mt-4 sm:mt-0 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-all">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
