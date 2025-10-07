import React from "react";
import medicines from "../Data/medicineData";

const Medicine = () => {
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
      {/* Medicine Section */}
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Available Medicines 💊
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {medicines.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition"
          >
            {item.images && (
              <img
                src={item.images}
                alt={item.name}
                className="w-full h-40 object-cover rounded-xl mb-3"
              />
            )}
            <h2 className="font-semibold text-lg">{item.name}</h2>
            <p className="text-gray-600">💰 ₹{item.price}</p>
            <p className="text-gray-500 text-sm">
              Expiry: {formatDate(item.expiryDate)}
            </p>

            {/* Add to Cart Button UI (no functionality yet) */}
            <button
              className={`w-full mt-3 py-2 rounded-lg text-white font-semibold bg-blue-600 hover:bg-blue-700`}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-16 bg-white shadow-md rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
          Frequently Asked Questions ❓
        </h2>

        <div className="space-y-4">
          {/* Question 1 */}
          <div className="border rounded-xl p-4">
            <h3 className="font-semibold text-lg text-gray-800">
              ✅ When will Your Pharma deliver my medicines?
            </h3>
            <p className="text-gray-600 mt-1">
              Once you purchase your medicines online with us, you will get it
              after 7PM, as the time to order is from 6AM-6PM. After that, in
              between 7PM-11PM, we will notify you when your order will be
              delivered{" "}
              <span className="text-sm text-gray-500">
                *T&C: The delivery time may vary depending on the delivery
                location.
              </span>
            </p>
          </div>

          {/* Question 2 */}
          <div className="border rounded-xl p-4">
            <h3 className="font-semibold text-lg text-gray-800">
              ✅ Do I get discounts if I am ordering through Your Pharmacy?
            </h3>
            <p className="text-gray-600 mt-1">
              Yes, you can get a 10–20% discount on the total of your medicines
              ordered.
            </p>
          </div>

          {/* Question 3 */}
          <div className="border rounded-xl p-4">
            <h3 className="font-semibold text-lg text-gray-800">
              ✅ If a medicine that I want to order is not visible on the menu,
              how can I get that?
            </h3>
            <p className="text-gray-600 mt-1">
              On the application, you will see a menu where you can chat or call
              us. Just tell us the medicine you want to order, and we will
              deliver it the same day itself.
            </p>
          </div>

          {/* Question 4 */}
          <div className="border rounded-xl p-4">
            <h3 className="font-semibold text-lg text-gray-800">
              ✅ When will I receive my order?
            </h3>
            <p className="text-gray-600 mt-1">
              As mentioned, the order will be delivered to you between 7PM–11PM.
            </p>
          </div>

          {/* Question 5 */}
          <div className="border rounded-xl p-4">
            <h3 className="font-semibold text-lg text-gray-800">
              ✅ What is the shelf life of medicines being provided?
            </h3>
            <p className="text-gray-600 mt-1">
              We ensure that the shelf life of medicines supplied by our partner
              retailers is a minimum of 3 months from the date of delivery. For
              each medicine and healthcare product, the expiry date is clearly
              mentioned.
            </p>
          </div>
        </div>
      </div>

      {/* Customer Feedback Section */}
      <div className="mt-16 bg-gray-50 py-12">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-10 flex items-center justify-center gap-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2922/2922561.png"
            alt="Customer icon"
            className="w-10 h-10"
          />
          See What Our Customers Have to Say About Us
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Testimonial Card 1 */}
          <div className="bg-white shadow-xl rounded-2xl p-6 max-w-xs transition-all duration-300 hover:shadow-2xl">
            <h3 className="font-semibold text-lg text-gray-800">Amit</h3>
            <p className="text-gray-500 text-sm">Kolkata</p>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              I recently tried the YourPharma app for ordering my medicines and
              to my surprise, the delivery was very quick! The medicine was
              well-packed and handled properly.
            </p>
          </div>

          {/* Testimonial Card 2 */}
          <div className="bg-white shadow-xl rounded-2xl p-6 max-w-xs transition-all duration-300 hover:shadow-2xl">
            <h3 className="font-semibold text-lg text-gray-800">Rajdeep</h3>
            <p className="text-gray-500 text-sm">Delhi</p>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              I have purchased medicines from nearby chemists before, but this
              app offered fast delivery and great discounts. Really convenient!
            </p>
          </div>

          {/* Testimonial Card 3 */}
          <div className="bg-white shadow-xl rounded-2xl p-6 max-w-xs transition-all duration-300 hover:shadow-2xl">
            <h3 className="font-semibold text-lg text-gray-800">Alina</h3>
            <p className="text-gray-500 text-sm">Bengaluru</p>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              My mother’s daily medicine wasn’t available in nearby shops, but I
              found it easily here and got it delivered the same day!
            </p>
          </div>

          {/* Testimonial Card 4 */}
          <div className="bg-white shadow-xl rounded-2xl p-6 max-w-xs transition-all duration-300 hover:shadow-2xl">
            <h3 className="font-semibold text-lg text-gray-800">Rajesh</h3>
            <p className="text-gray-500 text-sm">Mumbai</p>
            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              I’ve been using this app for my family’s medicine needs for months
              now. The order process is simple, and discounts are great!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Medicine;
