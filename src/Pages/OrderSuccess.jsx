import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const OrderSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      <CheckCircle className="text-green-500 w-20 h-20 mb-4" />
      <h1 className="text-3xl font-bold mb-2">Order Placed Successfully!</h1>
      <p className="text-gray-600 text-center mb-6">
        Thank you for your purchase. Your order has been placed and will be processed soon.
      </p>
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderSuccess;
