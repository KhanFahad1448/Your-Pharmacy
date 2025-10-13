import React, { useState, useContext } from "react";
import labTestData from "./labTestData";
import { LabTestsContext } from "../Context/LabTestsContext";
import bgImage from "../assets/LabTestBackground.jpg";
import { CheckCircle, Stethoscope } from "lucide-react";
import { toast } from "react-hot-toast";

const LabTest = () => {
  const { bookTest } = useContext(LabTestsContext);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [bookedTests, setBookedTests] = useState({});

  // ✅ Ensure all tests are "available" by default
  const testsWithAvailability = labTestData.map((test) => ({
    ...test,
    availability: test.availability !== false, // true by default
  }));

  const filteredTests =
    categoryFilter === "All"
      ? testsWithAvailability
      : testsWithAvailability.filter((test) => test.category === categoryFilter);

  const categories = ["All", ...new Set(testsWithAvailability.map((test) => test.category))];

  const handleBookTest = (test) => {
    bookTest(test);
    toast.success(`${test.name} booked successfully 🧪`);
    setBookedTests((prev) => ({ ...prev, [test.id]: true }));

    setTimeout(() => {
      setBookedTests((prev) => ({ ...prev, [test.id]: false }));
    }, 1500);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-16 px-6 md:px-20 relative"
      style={{ backgroundImage: `url(${bgImage})`, backgroundAttachment: "fixed" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Page Content */}
      <div className="relative z-10 text-center text-white">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight">
          Lab Tests
        </h1>

        {/* ✅ Category Filter (No Scrollbar, Centered Like Healthcare.jsx) */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-4 py-2 rounded-full border border-white/60 transition-all duration-300 ${
                categoryFilter === cat
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg scale-105"
                  : "bg-white/20 text-white hover:bg-white/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ✅ Test Cards (Equal Height + Aligned Buttons) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredTests.map((test) => (
            <div
              key={test.id}
              className="bg-white/20 p-5 sm:p-6 rounded-3xl shadow-md backdrop-blur-sm flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-xl h-full min-h-[320px]"
            >
              <div>
                <h2 className="text-lg sm:text-xl font-semibold mb-2">{test.name}</h2>
                <p className="text-sm mb-3 text-white/90 min-h-[48px] line-clamp-3">
                  {test.description}
                </p>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold">
                    ₹{test.price - (test.price * (test.discount || 0)) / 100}
                  </span>
                  {test.discount > 0 && (
                    <span className="text-sm text-red-400">{test.discount}% Off</span>
                  )}
                </div>

                <div className="flex items-center mb-3">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      test.availability
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {test.availability ? "Available" : "Unavailable"}
                  </span>
                  <span className="ml-auto text-sm text-yellow-400">
                    ⭐ {test.rating || "4.5"}
                  </span>
                </div>
              </div>

              {/* Book Button — Always Aligned at Bottom */}
              <button
                onClick={() => handleBookTest(test)}
                disabled={bookedTests[test.id]}
                className={`w-full mt-auto py-2 rounded-xl font-semibold flex justify-center items-center gap-2 transition-all duration-300 ${
                  bookedTests[test.id]
                    ? "bg-green-600 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                {bookedTests[test.id] ? (
                  <>
                    <CheckCircle className="w-5 h-5" /> Booked
                  </>
                ) : (
                  <>
                    <Stethoscope className="w-5 h-5" /> Book Now
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LabTest;
