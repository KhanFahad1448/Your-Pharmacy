// src/Medicine.jsx
import React, { useState, useContext } from "react";
import medicines from "../Medicines/medicineData";
import bgImage from "../assets/MedicineBackground.jpg";
import { CartContext } from "../Context/CartContext";
import { ShoppingCart, CheckCircle } from "lucide-react";

const Medicine = () => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [addedItems, setAddedItems] = useState({});
  const { addToCart } = useContext(CartContext);

  const categories = ["All", ...new Set(medicines.map((m) => m.category))];

  const filteredMedicines =
    categoryFilter === "All"
      ? medicines
      : medicines.filter((m) => m.category === categoryFilter);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const handleAddToCart = (medicine) => {
    addToCart({
      id: medicine.id,
      name: medicine.name,
      price: medicine.price,
      images: medicine.images,
      category: medicine.category,
      discount: medicine.discount || 0,
      stock: medicine.stock,
    });

    setAddedItems((prev) => ({ ...prev, [medicine.id]: true }));

    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [medicine.id]: false }));
    }, 1500);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-16 px-6 md:px-20 relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight">
          Available Medicines 💊
        </h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-4 py-2 rounded-full border border-white/60 transition-all duration-300 whitespace-nowrap ${
                categoryFilter === cat
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg scale-105"
                  : "bg-white/20 text-white hover:bg-white/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Medicines Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredMedicines.map((item) => (
            <div
              key={item.id}
              className="bg-white/20 p-4 sm:p-5 rounded-3xl shadow-md backdrop-blur-sm flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {item.images && (
                <img
                  src={item.images}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
              )}

              <h2 className="text-lg sm:text-xl font-semibold mb-1">{item.name}</h2>
              <p className="text-sm mb-1">Category: {item.category}</p>

              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-bold">
                  ₹{item.price - (item.price * (item.discount || 0)) / 100}
                </span>
                {item.discount > 0 && (
                  <span className="text-sm text-red-400">{item.discount}% Off</span>
                )}
              </div>

              <div className="flex items-center mb-2">
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    item.stock !== false
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {item.stock !== false ? "In Stock" : "Out of Stock"}
                </span>
                <span className="ml-auto text-sm text-yellow-400">
                  ⭐ {item.rating || 4.5}
                </span>
              </div>

              <p className="text-sm mb-3">Expiry: {formatDate(item.expiryDate)}</p>

              {/* Add to Cart Button */}
              <button
                onClick={() => handleAddToCart(item)}
                disabled={item.stock === false || addedItems[item.id]}
                className={`mt-auto w-full py-2 rounded-xl font-semibold flex justify-center items-center gap-2 transition-all duration-300 ${
                  item.stock === false
                    ? "bg-gray-400 cursor-not-allowed text-white"
                    : addedItems[item.id]
                    ? "bg-green-600 text-white"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }`}
              >
                {addedItems[item.id] ? (
                  <>
                    <CheckCircle className="w-5 h-5" /> Added
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" /> Add to Cart
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 p-6 md:p-8 rounded-3xl bg-white/20 backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Frequently Asked Questions ❓
          </h2>

          <div className="space-y-4 md:space-y-6 text-left">
            {[
              {
                q: "✅ When will Your Pharmacy deliver my medicines?",
                a: "Orders placed between 6AM–6PM are delivered the same day after 7PM. Delivery times may vary by location.",
              },
              {
                q: "✅ Do I get discounts if I am ordering through Your Pharmacy?",
                a: "Yes, you can get 10–20% discount on total medicines depending on offers.",
              },
              {
                q: "✅ If a medicine is not visible, how can I get it?",
                a: "Use the chat/call feature in the app to request any medicine. We ensure same-day delivery.",
              },
              {
                q: "✅ What is the shelf life of medicines provided?",
                a: "All medicines have a minimum shelf life of 3 months from delivery date.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border border-white/40 rounded-3xl p-4 md:p-5 transition-shadow duration-300 hover:shadow-lg"
              >
                <h3 className="font-semibold text-sm md:text-base lg:text-lg">{faq.q}</h3>
                <p className="text-sm md:text-base mt-2 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="mt-16 py-12">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2922/2922561.png"
              alt="Customer icon"
              className="w-10 h-10"
            />
            See What Our Customers Have to Say About Us
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              {
                name: "Amit",
                location: "Housing Colony",
                feedback:
                  "I recently tried the YourPharma app for ordering my medicines and to my surprise, the delivery was very quick! The medicine was well-packed and handled properly.",
              },
              {
                name: "Akshay",
                location: "Morabadi",
                feedback:
                  "I have purchased medicines from nearby chemists before, but this app offered fast delivery and great discounts. Really convenient!",
              },
              {
                name: "Aliya",
                location: "Bariatu",
                feedback:
                  "My mother’s daily medicine wasn’t available in nearby shops, but I found it easily here and got it delivered the same day!",
              },
              {
                name: "Salman",
                location: "Kanke",
                feedback:
                  "I’ve been using this app for my family’s medicine needs for months now. The order process is simple, and discounts are great!",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/20 rounded-3xl shadow-md p-6 max-w-xs backdrop-blur-sm transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                <p className="text-sm">{testimonial.location}</p>
                <p className="text-sm mt-2 leading-relaxed">{testimonial.feedback}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medicine;
