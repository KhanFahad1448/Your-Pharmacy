import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Core Pages
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import AdminDashboard from "./Pages/AdminDashboard";

// Navbar-linked Pages
import Medicine from "./Pages/Medicine";
import Offers from "./Pages/Offers";
import Healthcare from "./Pages/Healthcare";
import LabTests from "./Pages/LabTests";
import Plus from "./Pages/Plus";
import Blogs from "./Pages/Blogs";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Fixed Navbar */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>

        {/* Main content */}
        <main className="flex-grow mt-[120px] md:mt-[120px]">
          <Routes>
            {/* Core Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminDashboard />} />

            {/* Navbar-linked Pages */}
            <Route path="/medicine" element={<Medicine />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/healthcare" element={<Healthcare />} />
            <Route path="/lab-tests" element={<LabTests />} />
            <Route path="/plus" element={<Plus />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
