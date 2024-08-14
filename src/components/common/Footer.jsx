// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 font-serif ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Column 1 */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Press</a></li>
            </ul>
          </div>
          {/* Column 2 */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Support</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Help Center</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">FAQs</a></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="w-full md:w-1/3">
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; 2024 Bike Rentals All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
