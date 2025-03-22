import React from "react";
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#ECECEC] py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-6">
        {/* Left Section - Logo and Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/3 mb-6 md:mb-0">
          <div className="flex items-center gap-2 mb-2">
            <img src="/images/logo2.png" alt="Alpha Capital Logo" className="h-27" />
          </div>
          <p className="text-md text-black">
            Copyright © 2025. Alfa Capital. All rights reserved.
          </p>
        </div>

        {/* Center Section - Links */}
        <div className="text-center md:text-left w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="font-bold text-lg mb-3">Links</h3>
          <ul className="text-lg space-y-2">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/UnlistedShares">Unlisted Stocks List</Link></li>
            <li><Link to="/AboutUs">About</Link></li>
            <li><Link to="/ContactUs">Contact</Link></li>
          </ul>
        </div>

        {/* Right Section - Policy */}
        <div className="text-center md:text-left w-full md:w-1/4 ">
          <h3 className="font-bold text-lg mb-3">Policy</h3>
          <ul className="text-lg space-y-2">
            <li><Link to="/PrivacyPolicy">Privacy Policy</Link></li>
            <li><Link to="/TermsConditions">Terms & Conditions</Link></li>
            <li><Link to="/Disclaimer">Disclaimer</Link></li>
            <li><Link to="/Faqs">FAQs</Link></li>
          </ul>
        </div>

        {/* Back to Top Icon */}
        <div className="flex items-center justify-center md:justify-end w-full md:w-auto mt-8 md:mt-0">
          <div className="bg-green-500 p-4 rounded-full text-white cursor-pointer" onClick={scrollToTop}>
            <FaChevronUp className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
  