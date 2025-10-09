// src/HealthcareProducts/Healthcare.jsx
import React, { useState } from "react";
import healthcareProducts from "./healthcareData";

const Healthcare = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");

  // Get unique categories dynamically
  const categories = ["All", ...new Set(healthcareProducts.map((p) => p.category))];

  // Filter products by category
  const filteredProducts =
    categoryFilter === "All"
      ? healthcareProducts
      : healthcareProducts.filter((p) => p.category === categoryFilter);

  return (
    <div className="p-6 bg-gray-50 min-h-screen text-center">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Healthcare Products</h1>

      {/* Category Buttons */}
      <div className="flex gap-4 mb-6 overflow-x-auto justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className={`px-4 py-2 rounded-full border transition-colors duration-200 ${
              categoryFilter === cat
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />

            <h2 className="text-lg font-semibold mb-1 text-gray-800">
              {product.name}
            </h2>

            <p className="text-sm text-gray-500 mb-1">{product.category}</p>

            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-bold text-gray-800">
                ₹{product.price - (product.price * product.discount) / 100}
              </span>
              {product.discount > 0 && (
                <span className="text-sm text-red-500">
                  {product.discount}% Off
                </span>
              )}
            </div>

            <div className="flex items-center mb-2">
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  product.stock
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {product.stock ? "In Stock" : "Out of Stock"}
              </span>
              <span className="ml-auto text-sm text-yellow-500">
                ⭐ {product.rating}
              </span>
            </div>

            {/* Add to Cart Button */}
            <button
              disabled={!product.stock}
              className={`w-full py-2 rounded-lg text-white font-semibold ${
                product.stock
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="py-6 leading-snug mb-4">
 
  <h1 className="text-gray-800 font-semibold text-2xl md:text-3xl leading-snug mb-4 font-sans">
    Shop Safely And Worry-Free On PharmEasy
  </h1>

  {/* Content */}
  <span className="font-sans text-gray-700 text-base md:text-lg leading-relaxed block">
    PharmEasy is a renowned name in the online shopping of Over The Counter or healthcare products 
    and other daily essentials. Ordering online on PharmEasy is convenient, fast and hassle-free; 
    you can avoid the annoyance of queuing up at your local pharmacy and also avail of huge discounts
    of up to 80% OFF. Purchasing the healthcare requirements such as medical devices and nutritional
    supplements that you need will no longer burn a hole in your pocket. At PharmEasy, you are sure
    to find everything that you need because we have products across all healthcare categories.
  </span>
  </div>
  
  <div className="w-full font-sans text-gray-800 leading-relaxed text-[20px] p-0 m-0">

  <h2 className="font-semibold text-[18px] font-sans">
    Baby and mom care
  </h2>
  <p className="mb-5">
    PharmEasy also has an impressive range of baby and mom care products including Diapers, Baby bath products,
    Infant formula food, Mother’s health drinks, Diaper rash creams, Baby wipes.
  </p>

  <h2 className="font-semibold text-[18px] mb-2">
    Our top brands
  </h2>
  <p className="mb-5">
    Get products from the most famous and trusted brands including Accu-chek, Dettol, Horlicks, Baidyanath, Sebamed.
  </p>

  <h2 className="font-semibold text-[18px] mb-2">
    You are safe with PharmEasy
  </h2>
  <p className="mb-5">
    Given the times, we are taking all precautions to ensure that we keep everyone safe — our customers and the people we work with.
  </p>

  <h2 className="font-semibold text-[18px] mb-2">
    We ensure
  </h2>
  <ul className="list-none text-[20px] space-y-2 mb-5 p-0 m-0">
    <li>Regular sanitization of our premises and warehouses</li>
    <li>Temperature checks of our employees and delivery partners</li>
    <li>No-contact door-step delivery</li>
    <li>Sanitized packaging</li>
  </ul>

  <h2 className="font-semibold text-[18px] mb-2">
    Your safety is our priority
  </h2>
  <p>
    Stay safe at home and shop at your convenience from PharmEasy. All you have to do is place your order and we will try to deliver it at the earliest.
  </p>

</div>

  


    </div>
  );
};

export default Healthcare;
