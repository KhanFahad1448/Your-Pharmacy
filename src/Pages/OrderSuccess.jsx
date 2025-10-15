import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const OrderSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-6 md:px-10 animate-fadeIn">
      {/* Success Icon */}
      <CheckCircle className="text-green-500 w-16 sm:w-20 h-16 sm:h-20 mb-4 sm:mb-6 animate-slideUp" />

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-center animate-slideUp delay-100">
        Order Placed Successfully!
      </h1>

      {/* Description */}
      <p className="text-gray-600 text-center text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-md animate-slideUp delay-200">
        Thank you for your purchase. Your order has been placed and will be processed soon.
      </p>

      {/* Continue Shopping Button */}
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg transition-all duration-300 animate-slideUp delay-300"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderSuccess;
