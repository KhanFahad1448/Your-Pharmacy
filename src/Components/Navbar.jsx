import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { LabTestsContext } from "../Context/LabTestsContext"; 
import { ShoppingCart, User, Settings, ChevronDown, Zap, Menu, X, Stethoscope } from "lucide-react";
import logo from "../assets/logo.png";
import { useAuth } from "../Context/AuthContext";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const { bookedTests } = useContext(LabTestsContext);
  const { user, logOut } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const isAdmin = user?.role === "admin";

  const navLinks = [
    { path: "/home", label: "Home" },
    { path: "/medicine", label: "Medicine" },
    { path: "/healthcare", label: "Healthcare", hasDropdown: true },
    { path: "/lab-tests", label: "Lab Tests", hasDropdown: true },
    { path: "/blogs", label: "Health Blogs" },
    { path: "/products", label: "Products", hasDropdown: true },
  ];

  return (
    <header className="bg-white shadow-sm w-full relative">
      {/* Top Navbar */}
      <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 border-b">
        {/* Logo + Location */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Your Pharmacy Logo" className="h-10 sm:h-12 w-auto" />
          <div className="hidden md:flex items-center text-[14px] sm:text-[15px] text-gray-700 border-l pl-3">
            <Zap className="text-yellow-500 w-4 h-4 mr-1" />
            <span>
              Express delivery to{" "}
              <button className="font-semibold text-gray-900 hover:underline inline-flex items-center">
                Ranchi <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </span>
          </div>
        </div>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center flex-wrap space-x-4 lg:space-x-6 text-gray-700 text-[15px]">
          {user ? (
            <>
              <span className="flex items-center whitespace-nowrap">
                <User className="w-4 h-4 mr-1" /> Hello, {user.firstName}
              </span>
              <button onClick={logOut} className="text-blue-600 hover:underline">
                Log Out
              </button>
            </>
          ) : (
            <Link to="/login" className="flex items-center hover:text-blue-600 whitespace-nowrap">
              <User className="w-4 h-4 mr-1" /> Hello, Log in
            </Link>
          )}

          <Link to="/offers" className="flex items-center hover:text-blue-600 whitespace-nowrap">
            <Settings className="w-4 h-4 mr-1" /> Offers
          </Link>

          <Link to="/booked-tests" className="relative flex items-center hover:text-blue-600 whitespace-nowrap">
            <Stethoscope className="w-4 h-4 mr-1" /> Booked Tests
            {bookedTests.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {bookedTests.length}
              </span>
            )}
          </Link>

          <Link to="/cart" className="relative flex items-center hover:text-blue-600 whitespace-nowrap">
            <ShoppingCart className="w-4 h-4 mr-1" /> 
            Cart
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-b overflow-y-auto transition-all duration-300 ${
          menuOpen ? "max-h-[450px] py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="px-6 space-y-3 text-[15px] text-gray-700">
          {user ? (
            <>
              <span className="block py-2 font-semibold">Hello, {user.firstName}</span>
              <button
                onClick={logOut}
                className="block py-2 text-blue-600 hover:underline w-full text-left"
              >
                Log Out
              </button>
            </>
          ) : (
            <Link to="/login" className="block py-2 hover:text-blue-600">
              Hello, Log in
            </Link>
          )}

          <Link to="/offers" className="block py-2 hover:text-blue-600">Offers</Link>

          <Link to="/booked-tests" className="block py-2 hover:text-blue-600 relative">
            <Stethoscope className="w-4 h-4 inline mr-1" />
            Booked Tests ({bookedTests.length})
          </Link>

          <Link to="/cart" className="block py-2 hover:text-blue-600 relative">
            <ShoppingCart className="w-4 h-4 inline mr-1" />
            Cart
            {cartItems.length > 0 && (
              <span className="absolute top-1 right-4 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="block py-2 hover:text-blue-600 flex items-center"
            >
              {link.label}
              {link.hasDropdown && <ChevronDown className="w-4 h-4 ml-1" />}
            </Link>
          ))}

          {isAdmin && (
            <>
              <Link to="/admin" className="block py-2 hover:text-blue-600">Admin Dashboard</Link>
              <Link to="/admin/orders" className="block py-2 hover:text-blue-600">Orders</Link>
            </>
          )}
        </div>
      </div>

      {/* Desktop Bottom Nav */}
      <nav className="hidden md:flex flex-wrap justify-center gap-6 text-gray-700 text-base py-3 bg-white border-t">
        {navLinks.map((link) => (
          <Link key={link.path} to={link.path} className="hover:text-blue-600 flex items-center">
            {link.label}
            {link.hasDropdown && <ChevronDown className="w-4 h-4 ml-1" />}
          </Link>
        ))}

        {isAdmin && (
          <div className="flex space-x-6">
            <Link to="/admin" className="flex items-center hover:text-blue-600">Admin Dashboard</Link>
            <Link to="/admin/orders" className="flex items-center hover:text-blue-600">Orders</Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
