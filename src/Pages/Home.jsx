import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/bgImage.jpg";

const Home = () => {
  // Header height in px (adjust if your Navbar height changes)
  const headerHeight = 120;

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative w-full"
        style={{
          height: `calc(100vh - ${headerHeight}px)`,
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
            Welcome to <span className="text-blue-400">Your Pharmacy</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl">
            Your one-stop online pharmacy — Fast delivery, genuine products, and amazing deals every day.
          </p>
          <Link
            to="/products"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-md"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Why Choose <span className="text-blue-600">Your Pharmacy?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">Same Day Delivery</h3>
            <p className="text-gray-600 text-lg">
              Order before <span className="font-medium">6 PM</span> and get your medicines delivered the same day.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">Genuine Products</h3>
            <p className="text-gray-600 text-lg">
              All medicines are 100% authentic and sourced from trusted suppliers.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">Easy Returns</h3>
            <p className="text-gray-600 text-lg">
              Hassle-free returns and excellent customer support for all orders.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
