import React from "react";

const Offers = () => {
  // 15 sample offers
  const offers = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `Special Offer ${i + 1}`,
    description: `Get amazing discounts on ${i % 4 === 0 ? "Medicines" : i % 4 === 1 ? "Healthcare" : i % 4 === 2 ? "Lab Tests" : "All Products"}!`,
    category:
      i % 4 === 0
        ? "Medicines"
        : i % 4 === 1
        ? "Healthcare"
        : i % 4 === 2
        ? "Lab Tests"
        : "General",
    color:
      i % 4 === 0
        ? "from-blue-400 to-blue-600"
        : i % 4 === 1
        ? "from-green-400 to-green-600"
        : i % 4 === 2
        ? "from-purple-400 to-purple-600"
        : "from-yellow-400 to-yellow-500",
  }));

  return (
    <div className="min-h-screen py-16 px-6 md:px-20 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4">🔥 Current Offers</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Check out all the ongoing offers across Medicines, Healthcare, and Lab Tests.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className={`bg-gradient-to-r ${offer.color} p-8 rounded-3xl shadow-lg transform transition-transform hover:-translate-y-2 hover:shadow-2xl`}
          >
            <h2 className="text-2xl font-bold mb-3 text-white">{offer.title}</h2>
            <p className="text-white/90 text-base">{offer.description}</p>
            <span className="mt-4 inline-block px-3 py-1 bg-white/20 text-white rounded-full text-sm">
              {offer.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
