// src/HealthBlogs/HealthBlogs.jsx
import React from "react";
import healthBlogs from "./healthBlogs";
import bgImage from "../assets/healthblogBackground.jpg";
import carousel1 from "../assets/carousel1.jpg";
import carousel2 from "../assets/carousel2.jpg";
import carousel3 from "../assets/carousel3.jpg";

const HealthBlogs = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-12 px-6 md:px-16 relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Page Content */}
      <div className="relative z-10">
        {/* ✅ Smaller Carousel */}
        <div
          id="carouselExampleDark"
          className="carousel slide carousel-dark mb-10 relative max-w-xl mx-auto rounded-2xl overflow-hidden shadow-lg"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {[carousel1, carousel2, carousel3].map((img, idx) => (
              <div
                key={idx}
                className={`carousel-item ${idx === 0 ? "active" : ""}`}
                data-bs-interval={4000}
              >
                <img
                  src={img}
                  alt={`Slide ${idx + 1}`}
                  className="w-full max-h-[350px] md:max-h-[450px] object-cover"
                />
              </div>
            ))}
          </div>

          {/* Prev & Next Buttons */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* Page Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12 tracking-tight">
          Health Blogs & Wellness Tips
        </h1>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {healthBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white/20 backdrop-blur-lg rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/30 group"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                  {blog.title}
                </h2>
                <p className="text-gray-900 mb-4 leading-relaxed flex-1">
                  {blog.description}
                </p>
                <p className="text-gray-900 font-medium mb-2">
                  <span className="text-green-600 font-semibold">Doctor’s Advice:</span>{" "}
                  {blog.advice}
                </p>
                <p className="text-gray-900 font-medium">
                  <span className="text-blue-600 font-semibold">Health Tip:</span>{" "}
                  {blog.tip}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthBlogs;
