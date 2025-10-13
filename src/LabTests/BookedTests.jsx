import React, { useContext } from "react";
import { LabTestsContext } from "../Context/LabTestsContext";
import { CartContext } from "../Context/CartContext";
import bgImage from "../assets/LabtestBackground.jpg";
import { Trash2, ShoppingCart } from "lucide-react";

const BookedTests = () => {
  const { bookedTests, removeTest } = useContext(LabTestsContext);
  const { addToCart, cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = bookedTests.reduce(
    (acc, test) => acc + (test.price - (test.price * test.discount) / 100),
    0
  );

  const handleAddToCart = (test) => {
    const isAlreadyInCart = cartItems.some((item) => item.id === test.id);
    if (!isAlreadyInCart) {
      addToCart({
        id: test.id,
        name: test.name,
        price: test.price - (test.price * (test.discount || 0)) / 100,
        images: test.images || "",
        quantity: 1,
      });
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-16 px-6 md:px-20 relative"
      style={{ backgroundImage: `url(${bgImage})`, backgroundAttachment: "fixed" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-10 tracking-tight">
          Your Booked Tests 🧪
        </h1>

        {bookedTests.length === 0 ? (
          <p className="text-lg md:text-xl text-gray-100 bg-white/10 py-3 px-6 rounded-full inline-block shadow-md">
            You haven’t booked any tests yet.
          </p>
        ) : (
          <>
            {/* Booked Tests Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {bookedTests.map((test) => {
                const isInCart = cartItems.some((item) => item.id === test.id);

                return (
                  <div
                    key={test.id}
                    className="bg-white/20 p-5 rounded-3xl shadow-md backdrop-blur-sm flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <h2 className="text-xl font-semibold mb-2 text-white">{test.name}</h2>

                    {test.description && (
                      <p className="text-sm text-gray-200 mb-3 leading-relaxed">{test.description}</p>
                    )}

                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-bold text-white">
                        ₹{test.price - (test.price * test.discount) / 100}
                      </span>
                      {test.discount > 0 && (
                        <span className="text-sm text-red-400">{test.discount}% Off</span>
                      )}
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-800">
                        Available
                      </span>
                      <span className="text-sm text-yellow-400">
                        ⭐ {test.rating || "4.5"}
                      </span>
                    </div>

                    {/* Buttons */}
                    <div className="mt-auto flex flex-col gap-2">
                      <button
                        onClick={() => {
                          removeTest(test.id);
                          // Remove from cart if present
                          const cartItem = cartItems.find((item) => item.id === test.id);
                          if (cartItem) removeFromCart(cartItem.id);
                        }}
                        className="w-full py-2 rounded-xl font-semibold flex justify-center items-center gap-2 bg-red-600 hover:bg-red-700 text-white transition-all duration-300"
                      >
                        <Trash2 className="w-5 h-5" /> Remove
                      </button>

                      <button
                        onClick={() => handleAddToCart(test)}
                        disabled={isInCart}
                        className={`w-full py-2 rounded-xl font-semibold flex justify-center items-center gap-2 transition-all duration-300 ${
                          isInCart
                            ? "bg-green-600 text-white cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700 text-white"
                        }`}
                      >
                        <ShoppingCart className="w-5 h-5" /> 
                        {isInCart ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Total Amount */}
            <div className="mt-12 text-right text-xl md:text-2xl font-semibold text-white bg-white/20 px-6 py-3 rounded-2xl inline-block backdrop-blur-sm shadow-lg">
              Total: ₹{totalPrice.toFixed(2)}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BookedTests;
