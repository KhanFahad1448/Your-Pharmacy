import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Company */}
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Partner with Your Pharmacy</li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="font-bold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>Order Medicine</li>
            <li>Healthcare Products</li>
            <li>Lab Tests</li>
          </ul>
        </div>

        {/* Featured Categories */}
        <div>
          <h3 className="font-bold mb-4">Featured Categories</h3>
          <ul className="space-y-2">
            <li>Must Haves</li>
            <li>Skin Care</li>
            <li>Heart Care</li>
            <li>Vitamins & Supplements</li>
            <li>Homeopathy Care</li>
            <li>Ayurvedic Care</li>
            <li>Sports Nutrition</li>
            <li>Health Food and Drinks</li>
            <li>Diabetes Essentials</li>
            <li>Mobility & Elderly Care</li>
            <li>Mother and Baby Care</li>
            <li>Health Concerns</li>
            <li>Healthcare Devices</li>
            <li>Sexual Wellness</li>
            <li>Personal Care</li>
            <li>Explore More</li>
          </ul>
        </div>

        {/* Need Help */}
        <div>
          <h3 className="font-bold mb-4">Need Help</h3>
          <ul className="space-y-2">
            <li>Browse All Medicines</li>
            <li>Browse All Molecules</li>
            
            
            <li>FAQs</li>
          </ul>
        </div>

        {/* Policy & Social */}
        <div>
          <h3 className="font-bold mb-4">Policy Info</h3>
          <ul className="space-y-2 mb-4">
            <li>Editorial Policy</li>
            <li>Privacy Policy</li>
            
            <li>Terms and Conditions</li>
            <li>Customer Support Policy</li>
            <li>Return Policy</li>
            <li>Smartbuy Policy</li>
          </ul>
          <h3 className="font-bold mb-2">Follow Us On</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Your Pharmacy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
