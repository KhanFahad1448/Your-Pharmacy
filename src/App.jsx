
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import AdminDashboard from "./Pages/AdminDashboard";
import Medicine from "./Medicines/Medicine";
import Offers from "./Pages/Offers";
import Healthcare from "./HealthcareProducts/Healthcare";
import LabTest from "./LabTests/LabTest";
import BookedTests from "./LabTests/BookedTests";
import Plus from "./Pages/Plus";
import Blogs from "./Health Blogs/HeathBlogs";

//  Import Context Providers
import { CartProvider } from "./Context/CartContext";
import { LabTestsProvider } from "./Context/LabTestsContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <CartProvider>
      <LabTestsProvider>
        <Router>
          {/* Toast notifications container */}
          <Toaster position="top-right" reverseOrder={false} />

          <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <div className="fixed top-0 left-0 w-full z-50">
              <Navbar />
            </div>

            {/* Main content */}
            <main className="flex-grow mt-[120px] md:mt-[120px]">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/medicine" element={<Medicine />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/healthcare" element={<Healthcare />} />
                <Route path="/lab-tests" element={<LabTest />} />
                <Route path="/booked-tests" element={<BookedTests />} />
                <Route path="/plus" element={<Plus />} />
                <Route path="/blogs" element={<Blogs />} />
              </Routes>
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </Router>
      </LabTestsProvider>
    </CartProvider>
  );
}

export default App;
