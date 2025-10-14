// src/Pages/Products.jsx
import React, { useState, useContext } from "react";
import medicineData from "../Medicines/medicineData";
import { CartContext } from "../Context/CartContext";
import { CheckCircle, ShoppingCart } from "lucide-react";
import { toast } from "react-hot-toast";
import bgImage from "../assets/ProductsBackground.jpg";

const Products = () => {
  const { addToCart, cartItems } = useContext(CartContext);
  const [addedItems, setAddedItems] = useState({});

  const allProducts = [...medicineData]
    .map((product) => ({ ...product, availability: true }))
    .sort((a, b) => b.id - a.id);

  const handleShopNow = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price - ((product.discount || 0) * product.price) / 100,
      images: product.images,
      quantity: 1,
    });

    toast.success(`${product.name} added to cart!`);

    setAddedItems((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  return (
    <div
      className="min-h-screen py-16 px-6 md:px-20 relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-white drop-shadow-lg">
          Shop Medicines
        </h1>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {allProducts.map((product) => {
            const isInCart = cartItems.some((item) => item.id === product.id);
            const isAdded = addedItems[product.id];

            return (
              <div
                key={product.id}
                className="relative bg-white/20 backdrop-blur-md p-5 sm:p-6 rounded-3xl shadow-lg flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full min-h-[380px]"
              >
                {/* Product Image */}
                <img
                  src={product.images}
                  alt={product.name}
                  className="w-full h-36 sm:h-44 object-cover rounded-xl mb-4 transition-transform duration-300 hover:scale-105"
                />

                <div className="flex-1">
                  {/* Product Name */}
                  <h2 className="text-lg sm:text-xl font-semibold mb-2 text-white drop-shadow-md">
                    {product.name}
                  </h2>

                  {/* Description */}
                  <p className="text-sm mb-3 text-white/90 min-h-[48px] line-clamp-3 drop-shadow-sm">
                    {product.description}
                  </p>

                  {/* Price & Discount */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-white drop-shadow-md">
                      ₹{product.price - ((product.discount || 0) * product.price) / 100}
                    </span>
                    {product.discount > 0 && (
                      <span className="text-sm text-red-400 font-semibold">
                        {product.discount}% Off
                      </span>
                    )}
                  </div>

                  {/* Availability & Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-800 font-semibold">
                      Available
                    </span>
                    <span className="text-sm text-yellow-400 font-semibold">
                      ⭐ {product.rating || "4.5"}
                    </span>
                  </div>
                </div>

                {/* Shop Now Button */}
                <button
                  onClick={() => handleShopNow(product)}
                  disabled={isInCart || isAdded}
                  className={`w-full mt-auto py-3 rounded-xl font-semibold flex justify-center items-center gap-2 transition-all duration-300 text-white ${
                    isInCart || isAdded
                      ? "bg-green-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  }`}
                >
                  {isInCart || isAdded ? (
                    <>
                      <CheckCircle className="w-5 h-5" /> Added
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" /> Shop Now
                    </>
                  )}
                </button>

                {/* Out of Stock Badge */}
                {product.availability === false && (
                  <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold shadow-lg">
                    Out of Stock
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
