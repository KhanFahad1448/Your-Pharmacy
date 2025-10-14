// src/Pages/Checkout.jsx
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { db, auth } from "../firebase";
import { collection, addDoc, updateDoc, doc, serverTimestamp } from "firebase/firestore";
import { ShoppingBag, CreditCard, Truck, CheckCircle } from "lucide-react";

const Checkout = () => {
  const { cartItems, totalAmount, clearCart } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleOrder = async () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    if (!customer.name || !customer.phone || !customer.address) {
      alert("Please fill all required details before placing order!");
      return;
    }

    setLoading(true);

    try {
      const user = auth.currentUser;
      const safeUser = {
        uid: user?.uid || "guest",
        email: user?.email || customer.email || "guest@example.com",
        name: user?.displayName || user?.firstName || customer.name || "Guest",
      };

      const orderRef = await addDoc(collection(db, "orders"), {
        userId: safeUser.uid,
        userName: safeUser.name,
        userEmail: safeUser.email,
        phone: customer.phone,
        address: customer.address,
        items: cartItems.map((item) => ({
          id: item.id || "unknown",
          name: item.name || "Unnamed Item",
          price: item.price || 0,
          quantity: item.quantity || 1,
        })),
        totalAmount: totalAmount || 0,
        paymentMethod,
        status: paymentMethod === "cod" ? "Pending (COD)" : "Processing (Online)",
        createdAt: serverTimestamp(),
      });

      if (paymentMethod === "razorpay") {
        const options = {
          key: "rzp_test_RTRCYoNs14NpBK",
          amount: totalAmount * 100,
          currency: "INR",
          name: "Your Pharmacy",
          description: "Order Payment",
          image: "/logo.png",
          handler: async function (response) {
            await updateDoc(doc(db, "orders", orderRef.id), {
              paymentId: response.razorpay_payment_id || "unknown",
              status: "Paid (Online)",
            });
            clearCart();
            setSuccess(true);
            setTimeout(() => navigate("/orders"), 2500);
          },
          prefill: { name: safeUser.name, email: safeUser.email, contact: customer.phone },
          theme: { color: "#2563eb" },
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        await updateDoc(doc(db, "orders", orderRef.id), { status: "Pending (COD)" });
        clearCart();
        setSuccess(true);
        setTimeout(() => navigate("/orders"), 2500);
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="bg-white shadow-2xl rounded-2xl p-10 text-center max-w-md w-full">
          <CheckCircle className="text-green-600 w-16 h-16 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2 text-gray-900">
            Success! Your order has been placed 🎉
          </h2>
          <p className="text-gray-600 mb-6">
            We’ll send you an update when your order is ready for delivery.
          </p>
          <button
            onClick={() => navigate("/orders")}
            className="mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-xl font-semibold transition"
          >
            View My Orders
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 flex justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-4xl">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-900 flex items-center justify-center gap-2">
          <ShoppingBag className="text-blue-600 w-8 h-8" /> Checkout
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Customer Details */}
          <div>
            <h3 className="font-semibold text-xl mb-4 text-gray-800 flex items-center gap-2">
              <CreditCard className="w-6 h-6 text-blue-500" /> Customer Information
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={customer.name}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={customer.phone}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={customer.email}
                onChange={handleChange}
                className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <textarea
                name="address"
                placeholder="Full Address"
                value={customer.address}
                onChange={handleChange}
                rows="3"
                className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <h3 className="font-semibold text-xl mb-4 text-gray-800 flex items-center gap-2">
              <Truck className="w-6 h-6 text-green-500" /> Order Summary
            </h3>
            <div className="border rounded-2xl p-5 space-y-3 bg-gray-50 max-h-[360px] overflow-y-auto">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-gray-700 text-sm py-2 border-b last:border-b-0">
                  <p>{item.name} × {item.quantity}</p>
                  <p>₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
              <div className="border-t pt-3 flex justify-between font-semibold text-gray-900 text-lg">
                <span>Total:</span>
                <span>₹{totalAmount.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-gray-800 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-blue-500" /> Payment Method
              </h4>
              <label className="block mb-2 text-sm text-gray-600 flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-2"
                />
                Cash on Delivery
              </label>
              <label className="block text-sm text-gray-600 flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="razorpay"
                  checked={paymentMethod === "razorpay"}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="mr-2"
                />
                Pay with Razorpay
              </label>
            </div>

            <button
              onClick={handleOrder}
              disabled={loading}
              className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl transition disabled:opacity-60"
            >
              {loading ? "Placing your order..." : "Place Order"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
