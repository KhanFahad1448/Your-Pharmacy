import React from "react";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <p className="mb-4">Manage products, view orders, and track inventory here.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
          <h2 className="font-semibold text-xl mb-2">Add Products</h2>
          <p>Add new medicines to your store inventory.</p>
        </div>
        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
          <h2 className="font-semibold text-xl mb-2">View Orders</h2>
          <p>See customer orders and manage delivery.</p>
        </div>
        <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
          <h2 className="font-semibold text-xl mb-2">Inventory</h2>
          <p>Track stock levels and update availability.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
