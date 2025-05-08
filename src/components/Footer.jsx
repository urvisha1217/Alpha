import React from "react";
import {
  FaChevronUp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#ECECEC] py-5 md:py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-6 md:px-4 md:gap-5 lg:gap-0 ">
        {/* Left Section - Logo and Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/3 mb-6 md:mb-0">
          <div className="flex items-center justify-center gap-2 mb-2">
            <img
              src="/images/ACLogo.png"
              alt="Alpha Capital Logo"
              className="h-20 lg:h-27"
            />
          </div>
          <p className="text-sm md:text-md text-black">
            Copyright © 2025. Alpha Capital. All rights reserved.
          </p>
        </div>

        {/* Center Section - Links */}
        <div className="text-center md:text-left w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="font-bold text-xl mb-3">Links</h3>
          <ul className="lg:text-lg text-md space-y-2">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/UnlistedShares">Unlisted Shares</Link>
            </li>
            <li>
              <Link to="/AboutUs">About Us</Link>
            </li>
            <li>
              <Link to="/ContactUs">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Right Section - Policy */}
        <div className="text-center md:text-left w-full md:w-1/4">
          <h3 className="font-bold text-xl mb-3">Policy</h3>
          <ul className="lg:text-lg text-md space-y-2">
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://drive.google.com/drive/folders/1EPKgSLfJsrJ9CtJRdYOLQs28WjQRGydo?usp=drive_link",
                    "_blank"
                  );
                }}
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://drive.google.com/drive/folders/1EPKgSLfJsrJ9CtJRdYOLQs28WjQRGydo?usp=drive_link",
                    "_blank"
                  );
                }}
                rel="noopener noreferrer"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://drive.google.com/drive/folders/1EPKgSLfJsrJ9CtJRdYOLQs28WjQRGydo?usp=drive_link",
                    "_blank"
                  );
                }}
                rel="noopener noreferrer"
              >
                Disclaimer
              </a>
            </li>
            <li>
              <Link to="/Faqs">FAQs</Link>
            </li>
          </ul>
        </div>
        {/* Follow Us */}
        <div className="text-center md:text-left w-full md:w-1/4 ">
          <h3 className="font-bold text-xl mb-3 md:mt-0 mt-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4 lg:text-xl text-md text-black">
            <a
              href="https://www.facebook.com/profile.php?id=61574397518484"
              target="_blank"
              rel="alpha capital"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/alphacapital.global"
              target="_blank"
              rel="alpha capital"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/pruthvi-vaghasiya-b00a48355"
              target="_blank"
              rel="alpha capital"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        {/* Back to Top Icon */}
        <div className="flex items-center justify-center md:justify-end w-full md:w-auto mt-8 md:mt-0">
          <div
            className="bg-green-500 p-3 lg:p-4 rounded-full text-white cursor-pointer"
            onClick={scrollToTop}
          >
            <FaChevronUp className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
