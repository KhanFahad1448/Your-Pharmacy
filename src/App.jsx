// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Login from "./Pages/Login";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminOrders from "./Pages/AdminOrders";
import Medicine from "./Medicines/Medicine";
import Offers from "./Pages/Offers";
import Healthcare from "./HealthcareProducts/Healthcare";
import LabTest from "./LabTests/LabTest";
import BookedTests from "./LabTests/BookedTests";
import Blogs from "./Health Blogs/HeathBlogs";
import "./App.css";

import { AuthProvider, useAuth } from "./Context/AuthContext";
import { CartProvider } from "./Context/CartContext";
import { LabTestsProvider } from "./Context/LabTestsContext";
import { Toaster } from "react-hot-toast";

// Import ScrollToTop component
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function AppRoutes() {
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />

      {/* Admin Routes */}
      <Route path="/admin" element={isAdmin ? <AdminDashboard /> : <Navigate to="/home" />} />
      <Route path="/admin/orders" element={isAdmin ? <AdminOrders /> : <Navigate to="/home" />} />

      {/* Other Pages */}
      <Route path="/medicine" element={<Medicine />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/healthcare" element={<Healthcare />} />
      <Route path="/lab-tests" element={<LabTest />} />
      <Route path="/booked-tests" element={<BookedTests />} />
      <Route path="/blogs" element={<Blogs />} />

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <LabTestsProvider>
          <Router>
            <Toaster position="top-right" reverseOrder={false} />
            <ScrollToTop /> {/* Add ScrollToTop here */}
            <div className="flex flex-col min-h-screen">
              <div className="fixed top-0 left-0 w-full z-50">
                <Navbar />
              </div>
              <main className="flex-grow mt-[120px] md:mt-[120px]">
                <AppRoutes />
              </main>
              <Footer />
            </div>
          </Router>
        </LabTestsProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
