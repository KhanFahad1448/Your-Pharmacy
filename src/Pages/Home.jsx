import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/bgImage.jpg";
import fullbody from "../assets/fullbody.jpg";
import vitamins from "../assets/vitamins.jpg";
import diabetes from "../assets/diabetes.jpg";
import fever from "../assets/fever.jpg";
import hairNskin from "../assets/hairNskin.jpg";
import thyroid from "../assets/thyroid.jpg";

const Home = () => {
  const headerHeight = 120;

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section
          className="flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12"
          style={{ height: `calc(100vh - ${headerHeight}px)` }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Welcome to <span className="text-blue-400">Your Pharmacy</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-xl sm:max-w-2xl text-gray-100">
            Your one-stop online pharmacy — Fast delivery, genuine products, and
            amazing deals every day.
          </p>
          <Link
            to="/products"
            className="bg-white text-blue-600 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg text-xs sm:text-sm md:text-lg font-semibold hover:bg-gray-100 transition shadow-md"
          >
            Shop Now
          </Link>
        </section>

        {/* Features Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-white drop-shadow-md">
            Why Choose <span className="text-blue-400">Your Pharmacy?</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12 text-center">
            <div className="bg-white/20 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2 md:mb-3 text-blue-300">
                Same Day Delivery
              </h3>
              <p className="text-gray-100 text-xs sm:text-sm md:text-base">
                Order before <span className="font-medium text-white">6 PM</span> and get your medicines delivered the same day.
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2 md:mb-3 text-blue-300">
                Genuine Products
              </h3>
              <p className="text-gray-100 text-xs sm:text-sm md:text-base">
                All medicines are 100% authentic and sourced from trusted suppliers.
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2 md:mb-3 text-blue-300">
                Easy Returns
              </h3>
              <p className="text-gray-100 text-xs sm:text-sm md:text-base">
                Hassle-free returns and excellent customer support for all orders.
              </p>
            </div>
          </div>
        </section>

        {/* Lab Tests Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 sm:mb-4 md:mb-6 text-white drop-shadow-md">
            Lab Tests by <span className="text-blue-400">Health Concern</span>
          </h2>
          <p className="text-center text-gray-200 mb-8 sm:mb-10 text-xs sm:text-sm md:text-base">
            Powered by <span className="font-semibold text-red-400">Thyrocare</span>
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 md:gap-8 text-center">
            {[fullbody, vitamins, diabetes, fever, hairNskin, thyroid].map((img, idx) => {
              const titles = ["Full Body Checkups", "Vitamins", "Diabetes", "Fever & Infection", "Hair & Skin Care", "Thyroid"];
              return (
                <div key={idx} className="bg-white/20 backdrop-blur-md p-4 sm:p-6 md:p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
                  <img
                    src={img}
                    alt={titles[idx]}
                    className="mx-auto mb-2 sm:mb-3 md:mb-3 h-16 sm:h-20 md:h-20 object-contain rounded-lg"
                  />
                  <h3 className="text-white font-semibold text-xs sm:text-sm md:text-base">
                    {titles[idx]}
                  </h3>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
