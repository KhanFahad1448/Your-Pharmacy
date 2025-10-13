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

  const navLinks = [
    { path: "/home", label: "Home" },
    { path: "/medicine", label: "Medicine" },
    { path: "/healthcare", label: "Healthcare", hasDropdown: true },
    { path: "/lab-tests", label: "Lab Tests", hasDropdown: true },
    { path: "/blogs", label: "Health Blogs" },
  ];

  return (
    <header className="bg-white shadow-sm w-full relative">
      {/* Top Navbar */}
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

          {/* Cart with badge */}
          <Link to="/cart" className="relative flex items-center hover:text-blue-600">
            <ShoppingCart className="w-4 h-4 mr-1" /> 
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu with Transition */}
      <div
        className={`md:hidden bg-white border-b overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="px-6 space-y-3">
          <Link to="/login" className="block hover:text-blue-600 py-2">Hello, Log in</Link>
          <Link to="/offers" className="block hover:text-blue-600 py-2">Offers</Link>
          <Link to="/booked-tests" className="block hover:text-blue-600 py-2">
            Booked Tests ({bookedTests.length})
          </Link>
          <Link to="/cart" className="block hover:text-blue-600 py-2 relative">
            <ShoppingCart className="w-4 h-4 inline mr-1" />
            Cart
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-3 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block hover:text-blue-600 py-2 flex items-center"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
              {link.hasDropdown && <ChevronDown className="w-4 h-4 ml-1" />}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Navigation (Desktop) */}
      <nav className="hidden md:flex justify-center space-x-8 text-gray-700 text-base py-3 bg-white border-t">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="hover:text-blue-600 flex items-center"
          >
            {link.label}
            {link.hasDropdown && <ChevronDown className="w-4 h-4 ml-1" />}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
