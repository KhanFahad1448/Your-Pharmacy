// src/Components/Navbar.jsx
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { LabTestsContext } from "../Context/LabTestsContext"; 
import { ShoppingCart, User, Settings, ChevronDown, Zap, Menu, X, Stethoscope } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const { bookedTests } = useContext(LabTestsContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm w-full relative">
      <div className="flex items-center justify-between px-6 py-4 border-b">
        {/* Logo + Delivery info */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Your Pharmacy Logo" className="h-12 w-auto" />
          <div className="hidden md:flex items-center text-[15px] text-gray-700 border-l pl-3">
            <Zap className="text-yellow-500 w-4 h-4 mr-1" />
            <span>
              Express delivery to{" "}
              <button className="font-semibold text-gray-900 hover:underline inline-flex items-center">
                Ranchi <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700 text-[15px]">
          <Link to="/login" className="flex items-center hover:text-blue-600">
            <User className="w-4 h-4 mr-1" /> Hello, Log in
          </Link>
          <Link to="/offers" className="flex items-center hover:text-blue-600">
            <Settings className="w-4 h-4 mr-1" /> Offers
          </Link>

          {/* Booked Tests */}
          <Link to="/booked-tests" className="relative flex items-center hover:text-blue-600">
            <Stethoscope className="w-4 h-4 mr-1" /> Booked Tests
            {bookedTests.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {bookedTests.length}
              </span>
            )}
          </Link>

          <Link to="/cart" className="flex items-center hover:text-blue-600">
            <ShoppingCart className="w-4 h-4 mr-1" /> Cart ({cartItems.length})
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-4 border-b space-y-3">
          <Link to="/login" className="block hover:text-blue-600">Hello, Log in</Link>
          <Link to="/offers" className="block hover:text-blue-600">Offers</Link>
          <Link to="/booked-tests" className="block hover:text-blue-600">
            Booked Tests ({bookedTests.length})
          </Link>
          <Link to="/cart" className="block hover:text-blue-600">Cart ({cartItems.length})</Link>
          <Link to="/home" className="block hover:text-blue-600">Home</Link>
          <Link to="/medicine" className="block hover:text-blue-600">Medicine</Link>
          <Link to="/healthcare" className="block hover:text-blue-600">Healthcare</Link>
          <Link to="/lab-tests" className="block hover:text-blue-600">Lab Tests</Link>
          <Link to="/blogs" className="block hover:text-blue-600">Health Blogs</Link>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav className="hidden md:flex justify-center space-x-8 text-gray-700 text-base py-3 bg-white border-t">
        <Link to="/home" className="hover:text-blue-600">Home</Link>
        <Link to="/medicine" className="hover:text-blue-600">Medicine</Link>
        <Link to="/healthcare" className="hover:text-blue-600 flex items-center">
          Healthcare <ChevronDown className="w-4 h-4 ml-1" />
        </Link>
        <Link to="/lab-tests" className="hover:text-blue-600 flex items-center">
          Lab Tests <ChevronDown className="w-4 h-4 ml-1" />
        </Link>
        <Link to="/blogs" className="hover:text-blue-600">Health Blogs</Link>
      </nav>
    </header>
  );
};

export default Navbar;
