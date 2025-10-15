import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        
        {/* Company */}
        <div>
          <h3 className="font-bold mb-4 text-lg sm:text-xl">Company</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Partner with Your Pharmacy</li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="font-bold mb-4 text-lg sm:text-xl">Our Services</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li className="hover:text-white cursor-pointer">Order Medicine</li>
            <li className="hover:text-white cursor-pointer">Healthcare Products</li>
            <li className="hover:text-white cursor-pointer">Lab Tests</li>
          </ul>
        </div>

        {/* Featured Categories */}
        <div>
          <h3 className="font-bold mb-4 text-lg sm:text-xl">Featured Categories</h3>
          <ul className="space-y-2 text-sm sm:text-base max-h-[200px] sm:max-h-none overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
            <li>Must Haves</li>
            <li>Skin Care</li>
            <li>Heart Care</li>
            <li>Vitamins & Supplements</li>
            <li>Homeopathy Care</li>
          </ul>
        </div>

        {/* Need Help */}
        <div>
          <h3 className="font-bold mb-4 text-lg sm:text-xl">Need Help</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li className="hover:text-white cursor-pointer">Browse All Medicines</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
          </ul>
        </div>

        {/* Policy & Social */}
        <div>
          <h3 className="font-bold mb-4 text-lg sm:text-xl">Policy Info</h3>
          <ul className="space-y-2 mb-6 text-sm sm:text-base">
            
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms and Conditions</li>
            
            
          </ul>

          <h3 className="font-bold mb-3 text-lg sm:text-xl">Follow Us On</h3>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="hover:text-white text-sm sm:text-base">Facebook</a>
            <a href="#" className="hover:text-white text-sm sm:text-base">Instagram</a>
            <a href="#" className="hover:text-white text-sm sm:text-base">Twitter</a>
            <a href="#" className="hover:text-white text-sm sm:text-base">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-400 text-xs sm:text-sm">
        &copy; {new Date().getFullYear()} Your Pharmacy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
