// src/Pages/BookedTests.jsx
import React, { useContext } from "react";
import { LabTestsContext } from "../Context/LabTestsContext";

const BookedTests = () => {
  const { bookedTests, removeTest } = useContext(LabTestsContext);

  if (bookedTests.length === 0) {
    return (
      <div className="p-6 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Your Booked Tests</h1>
        <p className="text-gray-600">You haven’t booked any tests yet.</p>
      </div>
    );
  }

  const totalPrice = bookedTests.reduce(
    (acc, test) => acc + (test.price - (test.price * test.discount) / 100),
    0
  );

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Your Booked Tests</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookedTests.map((test) => (
          <div key={test.id} className="bg-white shadow-lg rounded-lg p-5 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2">{test.name}</h2>
            {test.description && <p className="text-gray-600 mb-2">{test.description}</p>}
            <p className="text-gray-800 font-bold">
              ₹{test.price - (test.price * test.discount) / 100}{" "}
              <span className="line-through text-gray-400 text-sm">₹{test.price}</span>
            </p>
            <p className="text-sm text-green-600 mt-1">{test.discount}% off</p>
            <button
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
              onClick={() => removeTest(test.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right text-lg font-semibold">
        Total: ₹{totalPrice}
      </div>
    </div>
  );
};

export default BookedTests;
