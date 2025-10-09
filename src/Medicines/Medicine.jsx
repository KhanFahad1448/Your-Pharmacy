// src/Medicine.jsx
import React, { useState } from "react";
import medicines from "../Medicines/medicineData";

const Medicine = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");

  // Get unique categories
  const categories = ["All", ...new Set(medicines.map((m) => m.category))];

  // Filter medicines
  const filteredMedicines =
    categoryFilter === "All"
      ? medicines
      : medicines.filter((m) => m.category === categoryFilter);

  // Helper function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Available Medicines 💊
      </h1>

      {/* Compact Category Filter Buttons */}
      <div className="flex gap-2 mb-6 overflow-x-auto justify-center scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className={`text-sm px-3 py-1 rounded-full border transition-colors duration-200 whitespace-nowrap ${
              categoryFilter === cat
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Medicines Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMedicines.map((item) => (
          <div
            key={item.id}
            className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col text-left"
          >
            {item.images && (
              <img
                src={item.images}
                alt={item.name}
                className="w-full aspect-[4/3] object-cover rounded-xl mb-4"
              />
            )}
            <h2 className="font-semibold text-lg text-gray-900 mb-1">{item.name}</h2>
            <p className="text-gray-500 text-sm mb-1">Category: {item.category}</p>

            {/* Price + Discount */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-bold text-gray-800">
                ₹{item.price - (item.price * (item.discount || 0)) / 100}
              </span>
              {item.discount > 0 && (
                <span className="text-sm text-red-500">{item.discount}% Off</span>
              )}
            </div>

            {/* Stock & Rating */}
            <div className="flex items-center mb-3">
              <span
                className={`px-2 py-1 text-xs rounded-full ${
                  item.stock !== false
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {item.stock !== false ? "In Stock" : "Out of Stock"}
              </span>
              <span className="ml-auto text-sm text-yellow-500">
                ⭐ {item.rating || 4.5}
              </span>
            </div>

            {/* Expiry */}
            <p className="text-gray-600 text-sm mb-3">Expiry: {formatDate(item.expiryDate)}</p>

            {/* Add to Cart Button */}
            <button
              disabled={item.stock === false}
              className={`w-full mt-auto py-2 rounded-lg font-semibold text-white transition-colors duration-200 ${
                item.stock !== false
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-16 bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          Frequently Asked Questions ❓
        </h2>

        <div className="space-y-4">
          {[
            {
              q: "✅ When will Your Pharmacy deliver my medicines?",
              a: "Once you purchase your medicines online with us, you will get it after 7PM, as the time to order is from 6AM-6PM. After that, in between 7PM-11PM, we will notify you when your order will be delivered *T&C: The delivery time may vary depending on the delivery location."
            },
            {
              q: "✅ Do I get discounts if I am ordering through Your Pharmacy?",
              a: "Yes, you can get a 10–20% discount on the total of your medicines ordered."
            },
            {
              q: "✅ If a medicine that I want to order is not visible on the menu, how can I get that?",
              a: "On the application, you will see a menu where you can chat or call us. Just tell us the medicine you want to order, and we will deliver it the same day itself."
            },
            {
              q: "✅ When will I receive my order?",
              a: "As mentioned, the order will be delivered to you between 7PM–11PM."
            },
            {
              q: "✅ What is the shelf life of medicines being provided?",
              a: "We ensure that the shelf life of medicines supplied by our partner retailers is a minimum of 3 months from the date of delivery. For each medicine and healthcare product, the expiry date is clearly mentioned."
            }
          ].map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="font-semibold text-lg text-gray-900">{faq.q}</h3>
              <p className="text-gray-700 mt-2 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Feedback Section */}
      <div className="mt-16 bg-gray-50 py-12">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center flex items-center justify-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2922/2922561.png"
            alt="Customer icon"
            className="w-10 h-10"
          />
          See What Our Customers Have to Say About Us
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {[
            { name: "Amit", location: "Housing Colony", feedback: "I recently tried the YourPharma app for ordering my medicines and to my surprise, the delivery was very quick! The medicine was well-packed and handled properly." },
            { name: "Akshay", location: "Morabadi", feedback: "I have purchased medicines from nearby chemists before, but this app offered fast delivery and great discounts. Really convenient!" },
            { name: "Aliya", location: "Bariatu", feedback: "My mother’s daily medicine wasn’t available in nearby shops, but I found it easily here and got it delivered the same day!" },
            { name: "Salman", location: "Kanke", feedback: "I’ve been using this app for my family’s medicine needs for months now. The order process is simple, and discounts are great!" }
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 max-w-xs transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <h3 className="font-semibold text-lg text-gray-900">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
              <p className="text-sm text-gray-700 mt-2 leading-relaxed">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Medicine;
