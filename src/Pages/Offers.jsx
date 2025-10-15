import React from "react";

const Offers = () => {
  // 15 sample offers
  const offers = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `Special Offer ${i + 1}`,
    description: `Get amazing discounts on ${
      i % 4 === 0
        ? "Medicines"
        : i % 4 === 1
        ? "Healthcare"
        : i % 4 === 2
        ? "Lab Tests"
        : "All Products"
    }!`,
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
    <div className="min-h-screen py-12 sm:py-16 px-4 sm:px-6 md:px-20 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4">
          🔥 Current Offers
        </h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Check out all the ongoing offers across Medicines, Healthcare, and Lab Tests.
        </p>
      </div>

      {/* Offers Grid / Horizontal Scroll */}
      <div className="overflow-x-auto sm:overflow-x-visible -mx-4 px-4 sm:px-0">
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-max sm:w-auto">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`flex-shrink-0 sm:flex-shrink-auto w-72 sm:w-auto bg-gradient-to-r ${offer.color} p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-lg transform transition-transform hover:-translate-y-2 hover:shadow-2xl`}
            >
              <h2 className="text-xl sm:text-2xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-white">
                {offer.title}
              </h2>
              <p className="text-white/90 text-sm sm:text-base md:text-base">
                {offer.description}
              </p>
              <span className="mt-3 sm:mt-4 inline-block px-2 sm:px-3 py-1 sm:py-2 bg-white/20 text-white rounded-full text-xs sm:text-sm md:text-sm">
                {offer.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
