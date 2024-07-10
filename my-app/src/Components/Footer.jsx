import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-400 py-6 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2">
            <a
              href="/"
              className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact Us
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1 text-center md:text-left">
            <p className="text-white text-sm">
              &copy; 2024 Tailwind Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
