import React, { useState } from "react";

const Healthcare = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");

  // Sample products defined inside the component
  const healthcareProducts = [
    {
      id: 1,
      name: "Vitamin C 500mg Tablet",
      category: "Supplements",
      price: 299,
      discount: 20,
      stock: true,
      rating: 4.5,
      image: "/Images/vitamin-c.jpg",
    },
    {
      id: 2,
      name: "Diabetic Care Glucometer",
      category: "Diabetic Care",
      price: 1200,
      discount: 15,
      stock: true,
      rating: 4.8,
      image: "/Images/glucometer.jpg",
    },
    {
      id: 3,
      name: "Moisturizing Cream",
      category: "Skin Care",
      price: 450,
      discount: 0,
      stock: false,
      rating: 4.2,
      image: "/Images/cream.jpg",
    },
    {
      id: 4,
      name: "Herbal Face Wash",
      category: "Skin Care",
      price: 250,
      discount: 10,
      stock: true,
      rating: 4.0,
      image: "/Images/facewash.jpg",
    },
  ];

  // Unique categories
  const categories = ["All", ...new Set(healthcareProducts.map((p) => p.category))];

  // Filter products by category
  const filteredProducts =
    categoryFilter === "All"
      ? healthcareProducts
      : healthcareProducts.filter((p) => p.category === categoryFilter);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Healthcare Products</h1>

      {/* Categories */}
      <div className="flex gap-4 mb-6 overflow-x-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className={`px-4 py-2 rounded-full border ${
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
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />

            <h2 className="text-lg font-semibold mb-1">{product.name}</h2>

            <p className="text-sm text-gray-500 mb-1">{product.category}</p>

            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-bold text-gray-800">
                ₹{product.price - (product.price * product.discount) / 100}
              </span>
              {product.discount > 0 && (
                <span className="text-sm text-red-500">{product.discount}% Off</span>
              )}
            </div>

            <div className="flex items-center mb-2">
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  product.stock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {product.stock ? "In Stock" : "Out of Stock"}
              </span>
              <span className="ml-auto text-sm text-yellow-500">
                ⭐ {product.rating}
              </span>
            </div>

            {/* Add to Cart Button Placeholder */}
            <button
              disabled={!product.stock}
              className={`w-full py-2 rounded-lg text-white font-semibold ${
                product.stock ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Healthcare;
