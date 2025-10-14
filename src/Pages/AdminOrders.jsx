// src/Pages/AdminOrders.jsx
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FaBoxOpen, FaCheckCircle, FaShippingFast } from "react-icons/fa";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        setOrders(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        toast.error("Failed to load orders");
      }
      setLoading(false);
    };
    fetchOrders();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <p className="text-gray-500 text-lg font-medium animate-pulse">
          Loading orders...
        </p>
      </div>
    );

  if (orders.length === 0)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <p className="text-gray-500 text-lg font-medium">No orders found.</p>
      </div>
    );

  // Summary calculations
  const ordersReceived = orders.length;
  const ordersDelivered = orders.filter((o) => o.status === "Delivered").length;
  const todayEarning = orders
    .filter((o) => {
      const today = new Date();
      const orderDate = o.createdAt?.toDate?.();
      return (
        orderDate &&
        orderDate.getDate() === today.getDate() &&
        orderDate.getMonth() === today.getMonth() &&
        orderDate.getFullYear() === today.getFullYear()
      );
    })
    .reduce((acc, curr) => acc + (curr.totalAmount || 0), 0);

  const monthlyEarning = orders
    .filter((o) => {
      const today = new Date();
      const orderDate = o.createdAt?.toDate?.();
      return (
        orderDate &&
        orderDate.getMonth() === today.getMonth() &&
        orderDate.getFullYear() === today.getFullYear()
      );
    })
    .reduce((acc, curr) => acc + (curr.totalAmount || 0), 0);

  // Chart setup
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  const chartData = {
    labels: months,
    datasets: [
      {
        label: "Orders Received",
        data: months.map((_, i) =>
          orders.filter((o) => o.createdAt?.toDate?.()?.getMonth() === i).length
        ),
        borderColor: "#4F46E5",
        backgroundColor: "rgba(79,70,229,0.2)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      {/* Centered Heading */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
        All Orders
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
        <div className="flex items-center p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
          <FaBoxOpen size={28} className="mr-4" />
          <div>
            <p className="text-sm font-medium mb-1">Orders Received</p>
            <h2 className="text-3xl font-bold">{ordersReceived}</h2>
          </div>
        </div>
        <div className="flex items-center p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 bg-green-50">
          <FaCheckCircle size={28} className="mr-4 text-green-600" />
          <div>
            <p className="text-sm font-medium mb-1">Orders Delivered</p>
            <h2 className="text-3xl font-bold text-gray-900">{ordersDelivered}</h2>
          </div>
        </div>
        <div className="flex items-center p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 bg-yellow-50">
          <FaShippingFast size={28} className="mr-4 text-yellow-600" />
          <div>
            <p className="text-sm font-medium mb-1">Today's Earnings</p>
            <h2 className="text-3xl font-bold text-gray-900">₹{todayEarning.toFixed(2)}</h2>
          </div>
        </div>
        <div className="flex items-center p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 bg-blue-50">
          <FaBoxOpen size={28} className="mr-4 text-blue-600" />
          <div>
            <p className="text-sm font-medium mb-1">Monthly Earnings</p>
            <h2 className="text-3xl font-bold text-gray-900">₹{monthlyEarning.toFixed(2)}</h2>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left: Orders Chart */}
        <div className="xl:col-span-2 bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Order History (Monthly)
          </h3>
          <Line data={chartData} />
        </div>

        {/* Right: Recent Deliveries */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Recent Deliveries
          </h3>
          <div className="overflow-y-auto max-h-[500px] space-y-3">
            {orders.map((order) => (
              <div
                key={order.id}
                className="p-4 rounded-xl bg-gray-50 border border-gray-200 hover:bg-gray-100 transition"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-medium text-gray-800">{order.userName || "Guest"}</p>
                    <p
                      className={`text-xs font-semibold mt-1 ${
                        order.status === "Delivered"
                          ? "text-green-600"
                          : order.status === "Cancelled"
                          ? "text-red-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {order.status || "Pending"}
                    </p>
                  </div>
                  <p className="font-semibold text-gray-900">
                    ₹{order.totalAmount?.toFixed(2) || "0.00"}
                  </p>
                </div>
                {/* Order Items */}
                <div className="mt-2">
                  {order.items?.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-sm border-b border-gray-200 py-1 last:border-b-0">
                      <span className="text-gray-700">{item.name}</span>
                      <span className="text-gray-500">Qty: {item.quantity}</span>
                      <span className="font-medium text-gray-900">₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
