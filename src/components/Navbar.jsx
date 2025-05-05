import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current route

  return (
    <nav className="shadow-md w-full">
      <div className="container mx-auto h-24 px-2 lg:px-4 flex items-center justify-between">
        {/* Logo */}
        {/* <div className="flex items-center">
          <img src="/images/Logo.png" className="" />
        </div> */}

        <div className="flex items-center">
          <Link to="/">
            <img src="/images/Logo.png" alt="Logo" className="cursor-pointer" />
          </Link>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-black text-lg font-bold">
          {[
            { path: "/", label: "Home" },
            { path: "/AboutUs", label: "About Us" },
            { path: "/UnlistedShares", label: "Unlisted Shares" },
            { path: "/ContactUs", label: "Contact Us" },
            { path: "/Faqs", label: "FAQs" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${
                location.pathname === item.path
                  ? "text-green-500"
                  : "hover:text-green-500"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md font-bold">
          <div className="flex flex-col items-center space-y-4 py-4">
            {[
              { path: "/", label: "Home" },
              { path: "/AboutUs", label: "About us" },
              { path: "/UnlistedShares", label: "Unlisted Shares" },
              { path: "/ContactUs", label: "Contact us" },
              { path: "/Faqs", label: "FAQs" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? "text-green-500"
                    : "hover:text-green-500"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
