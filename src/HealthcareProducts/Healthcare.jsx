// src/HealthCare/Healthcare.jsx
import React, { useState, useContext } from "react";
import healthcareProducts from "./healthcareData";
import bgImage from "../assets/HealthcareBackground.jpg";
import { CartContext } from "../Context/CartContext";
import { ShoppingCart, CheckCircle } from "lucide-react";

const Healthcare = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [addedItems, setAddedItems] = useState({});
  const { addToCart } = useContext(CartContext);

  const categories = ["All", ...new Set(healthcareProducts.map((p) => p.category))];

  const filteredProducts =
    categoryFilter === "All"
      ? healthcareProducts
      : healthcareProducts.filter((p) => p.category === categoryFilter);

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price - (product.price * (product.discount || 0)) / 100,
      images: product.image,
      category: "Healthcare",
      discount: product.discount || 0,
      stock: product.stock,
    });

    setAddedItems((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [product.id]: false }));
    }, 3000);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-10 px-4 sm:px-6 md:px-12 lg:px-20 relative"
      style={{ backgroundImage: `url(${bgImage})`, backgroundAttachment: "fixed" }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 text-center text-white">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-6 sm:mb-8 tracking-tight">
          Healthcare Products
        </h1>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full border border-white/60 transition-all duration-300 whitespace-nowrap text-sm sm:text-base ${
                categoryFilter === cat
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg scale-105"
                  : "bg-white/20 text-white hover:bg-white/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white/20 p-3 sm:p-4 md:p-5 rounded-3xl shadow-md backdrop-blur-sm flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-36 sm:h-40 md:h-44 object-cover rounded-lg mb-2 sm:mb-3"
              />
              <h2 className="text-lg sm:text-xl md:text-xl font-semibold mb-1">{product.name}</h2>
              <p className="text-sm sm:text-base mb-1">{product.category}</p>

              <div className="flex items-center justify-between mb-1 sm:mb-2">
                <span className="text-base sm:text-lg font-bold">
                  ₹{product.price - (product.price * (product.discount || 0)) / 100}
                </span>
                {product.discount > 0 && (
                  <span className="text-xs sm:text-sm text-red-400">{product.discount}% Off</span>
                )}
              </div>

              <div className="flex items-center mb-1 sm:mb-2">
                <span
                  className={`px-2 py-0.5 text-xs sm:text-sm rounded-full ${
                    product.stock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  {product.stock ? "In Stock" : "Out of Stock"}
                </span>
                <span className="ml-auto text-xs sm:text-sm text-yellow-400">
                  ⭐ {product.rating || 4.5}
                </span>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(product)}
                disabled={!product.stock}
                className={`mt-auto w-full py-2 sm:py-2.5 rounded-xl font-semibold flex justify-center items-center gap-2 text-sm sm:text-base transition-all duration-300 ${
                  !product.stock
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : addedItems[product.id]
                    ? "bg-green-600 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                {addedItems[product.id] ? (
                  <>
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" /> Added
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" /> Add to Cart
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Informational Content */}
        <div className="py-8 sm:py-10 leading-snug text-left max-w-4xl mx-auto text-white font-sans text-sm sm:text-base md:text-base">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4">
            Shop Safely And Worry-Free On Your Pharmacy
          </h1>
          <p className="mb-4 sm:mb-6 leading-relaxed">
            Your Pharmacy is a renowned name in the online shopping of Over The Counter or healthcare products
            and other daily essentials. Ordering online on Your Pharmacy is convenient, fast and hassle-free;
            you can avoid the annoyance of queuing up at your local pharmacy and also avail of huge discounts
            of up to 80% OFF. Purchasing the healthcare requirements such as medical devices and nutritional
            supplements that you need will no longer burn a hole in your pocket. At Your Pharmacy, you are sure
            to find everything that you need because we have products across all healthcare categories.
          </p>

          <div className="space-y-4 sm:space-y-5">
            <div>
              <h2 className="font-semibold text-base sm:text-lg">Baby and mom care</h2>
              <p className="mb-2 text-sm sm:text-base">
                PharmEasy also has an impressive range of baby and mom care products including Diapers, Baby bath products,
                Infant formula food, Mother’s health drinks, Diaper rash creams, Baby wipes.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base sm:text-lg">Our top brands</h2>
              <p className="mb-2 text-sm sm:text-base">
                Get products from the most famous and trusted brands including Accu-chek, Dettol, Horlicks, Baidyanath, Sebamed.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base sm:text-lg">You are safe with Your Pharmacy</h2>
              <p className="mb-2 text-sm sm:text-base">
                Given the times, we are taking all precautions to ensure that we keep everyone safe — our customers and the people we work with.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-base sm:text-lg">We ensure</h2>
              <ul className="list-disc pl-5 space-y-1 text-sm sm:text-base">
                <li>Regular sanitization of our premises and warehouses</li>
                <li>Temperature checks of our employees and delivery partners</li>
                <li>No-contact door-step delivery</li>
                <li>Sanitized packaging</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-base sm:text-lg">Your safety is our priority</h2>
              <p className="text-sm sm:text-base">
                Stay safe at home and shop at your convenience from Your Pharmacy. All you have to do is place your order and we will try to deliver it at the earliest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Healthcare;
