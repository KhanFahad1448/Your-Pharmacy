// src/LabTests/LabTest.jsx
import React, { useState, useContext } from "react";
import labTestData from "./labTestData";
import { LabTestsContext } from "../Context/LabTestsContext"; 

const LabTest = () => {
  const { bookTest } = useContext(LabTestsContext); 
  const [categoryFilter, setCategoryFilter] = useState("All");

  const filteredTests =
    categoryFilter === "All"
      ? labTestData
      : labTestData.filter((test) => test.category === categoryFilter);

  const categories = ["All", ...new Set(labTestData.map((test) => test.category))];

  const handleBookTest = (test) => {
    bookTest(test);
    console.log(`${test.name} booked!`);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Lab Tests</h1>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className={`px-4 py-2 rounded-full font-medium ${
              categoryFilter === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            } hover:bg-blue-500 hover:text-white transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTests.map((test) => (
          <div key={test.id} className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2">{test.name}</h2>
            <p className="text-gray-600 mb-3">{test.description}</p>
            <p className="text-gray-800 font-bold">
              ₹{test.price - (test.price * test.discount) / 100}{" "}
              <span className="line-through text-gray-400 text-sm">₹{test.price}</span>
            </p>
            <p className="text-sm text-green-600 mt-1">{test.discount}% off</p>
            <button
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={() => handleBookTest(test)}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LabTest;
