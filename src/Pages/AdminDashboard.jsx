// src/Pages/AdminDashboard.jsx
import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { db } from "../firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { useAuth } from "../Context/AuthContext";
import { FaBoxOpen, FaShippingFast, FaTruck, FaCheckCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";

const statusOptions = ["Received", "Shipped", "Delivered"];
const ITEMS_PER_PAGE = 5;

const AdminDashboard = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedRows, setExpandedRows] = useState({});

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "orders"));
        const ordersData = querySnapshot.docs
          .map((doc) => ({ id: doc.id, ...doc.data() }))
          .sort((a, b) => {
            const dateA = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(a.createdAt);
            const dateB = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(b.createdAt);
            return dateB - dateA;
          });
        setOrders(ordersData);
      } catch (error) {
        console.error("Error fetching orders:", error);
        toast.error("Failed to fetch orders");
      }
    };

    fetchOrders();
  }, []);

  if (user?.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold text-red-500">
          Access Denied. You are not an admin.
        </h1>
      </div>
    );
  }

  const updateOrderStatus = async (orderId) => {
    const order = orders.find((o) => o.id === orderId);
    if (!order) return;

    const currentIndex = statusOptions.indexOf(order.status);
    const nextStatus =
      currentIndex < statusOptions.length - 1
        ? statusOptions[currentIndex + 1]
        : statusOptions[currentIndex];

    try {
      await updateDoc(doc(db, "orders", orderId), { status: nextStatus });
      setOrders((prev) =>
        prev.map((o) => (o.id === orderId ? { ...o, status: nextStatus } : o))
      );
      toast.success(`Order #${orderId} status updated to ${nextStatus}`);
    } catch (error) {
      console.error("Failed to update status:", error);
      toast.error("Failed to update status");
    }
  };

  // Summary stats
  const totalOrders = orders.length;
  const receivedOrders = orders.filter((o) => o.status === "Received").length;
  const shippedOrders = orders.filter((o) => o.status === "Shipped").length;
  const deliveredOrders = orders.filter((o) => o.status === "Delivered").length;

  // Fix search: filter by order ID, user name, or email (case insensitive)
  const filteredOrders = orders.filter((o) => {
    const query = searchQuery.toLowerCase();
    return (
      o.id.toLowerCase().includes(query) ||
      (o.userName && o.userName.toLowerCase().includes(query)) ||
      (o.userEmail && o.userEmail.toLowerCase().includes(query))
    );
  });

  // Pagination
  const totalPages = Math.ceil(filteredOrders.length / ITEMS_PER_PAGE);
  const displayedOrders = filteredOrders.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const summaryCards = [
    { title: "Total Orders", value: totalOrders, icon: <FaBoxOpen size={28} />, bg: "bg-gradient-to-r from-indigo-500 to-purple-500", textColor: "text-white" },
    { title: "Received", value: receivedOrders, icon: <FaShippingFast size={28} />, bg: "bg-gradient-to-r from-yellow-400 to-yellow-500", textColor: "text-gray-900" },
    { title: "Shipped", value: shippedOrders, icon: <FaTruck size={28} />, bg: "bg-gradient-to-r from-blue-400 to-blue-500", textColor: "text-white" },
    { title: "Delivered", value: deliveredOrders, icon: <FaCheckCircle size={28} />, bg: "bg-gradient-to-r from-green-400 to-green-500", textColor: "text-white" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-20">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
        Admin Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {summaryCards.map((card, idx) => (
          <div
            key={idx}
            className={`flex items-center p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 ${card.bg}`}
          >
            <div className="mr-4">{card.icon}</div>
            <div>
              <h3 className={`text-sm font-medium ${card.textColor} mb-1`}>{card.title}</h3>
              <p className={`text-2xl font-bold ${card.textColor}`}>{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by Order ID, User Name, or Email"
          className="w-full md:w-1/3 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1); // Reset to first page on new search
          }}
        />
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl shadow-md border border-gray-100">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left text-gray-600">Order ID</th>
              <th className="py-3 px-4 text-left text-gray-600">User</th>
              <th className="py-3 px-4 text-left text-gray-600">Date</th>
              <th className="py-3 px-4 text-left text-gray-600">Status</th>
              <th className="py-3 px-4 text-left text-gray-600">Total</th>
              <th className="py-3 px-4 text-center text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedOrders.map((order) => {
              let StatusIcon;
              let statusBg;
              switch (order.status) {
                case "Received":
                  StatusIcon = FaShippingFast;
                  statusBg = "bg-yellow-100 text-yellow-700";
                  break;
                case "Shipped":
                  StatusIcon = FaTruck;
                  statusBg = "bg-blue-100 text-blue-700";
                  break;
                case "Delivered":
                  StatusIcon = FaCheckCircle;
                  statusBg = "bg-green-100 text-green-700";
                  break;
                default:
                  StatusIcon = FaBoxOpen;
                  statusBg = "bg-gray-100 text-gray-700";
              }

              const isExpanded = expandedRows[order.id];

              return (
                <React.Fragment key={order.id}>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
                    <td className="py-3 px-4 font-medium text-gray-800">{order.id}</td>
                    <td className="py-3 px-4">{order.userName || order.userEmail || order.userId}</td>
                    <td className="py-3 px-4">{order.createdAt?.toDate ? order.createdAt.toDate().toLocaleString() : order.createdAt}</td>
                    <td className="py-3 px-4 flex items-center space-x-2">
                      <StatusIcon className={statusBg} />
                      <span className={`px-2 py-1 rounded-full text-sm font-medium ${statusBg}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-semibold text-gray-900">₹{order.totalAmount}</td>
                    <td className="py-3 px-4 text-center space-x-2">
                      {order.status !== "Delivered" && (
                        <button
                          onClick={() => updateOrderStatus(order.id)}
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition font-medium flex items-center justify-center space-x-1 mx-auto"
                        >
                          <FaBoxOpen /> <span>Update</span>
                        </button>
                      )}
                      <button
                        onClick={() =>
                          setExpandedRows((prev) => ({
                            ...prev,
                            [order.id]: !prev[order.id],
                          }))
                        }
                        className="text-gray-500 hover:text-gray-700 transition ml-2"
                      >
                        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                      </button>
                    </td>
                  </tr>

                  {/* Expanded row for items */}
                  {isExpanded && (
                    <tr>
                      <td colSpan={6} className="bg-gray-50 p-4">
                        <div className="overflow-x-auto">
                          <table className="w-full text-left">
                            <thead>
                              <tr>
                                <th className="py-2 px-3 text-gray-600">Product</th>
                                <th className="py-2 px-3 text-gray-600">Quantity</th>
                                <th className="py-2 px-3 text-gray-600">Price</th>
                                <th className="py-2 px-3 text-gray-600">Subtotal</th>
                              </tr>
                            </thead>
                            <tbody>
                              {order.items.map((item, idx) => (
                                <tr key={idx} className="border-b border-gray-200 last:border-b-0">
                                  <td className="py-2 px-3">{item.name}</td>
                                  <td className="py-2 px-3">{item.quantity}</td>
                                  <td className="py-2 px-3">₹{item.price}</td>
                                  <td className="py-2 px-3 font-semibold">₹{item.price * item.quantity}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 space-x-3">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="px-3 py-2 rounded-lg bg-indigo-100 text-indigo-700 font-medium">
          {currentPage} / {totalPages || 1}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
          disabled={currentPage === totalPages || totalPages === 0}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
