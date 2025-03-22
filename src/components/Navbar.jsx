import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md w-full">
      <div className="container mx-auto h-24 px-2 lg:px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/images/Logo.png" className=""/>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-black text-lg font-bold ">
          <Link to="/" className="hover:text-green-500">Home</Link>
          <Link to="/AboutUs" className="hover:text-green-500">About us</Link>
          <Link to="/UnlistedShares" className="hover:text-green-500">Unlisted Shares</Link>
          <Link to="/ContactUs" className="hover:text-green-500">Contact us</Link>
          <Link to="/Faqs" className="hover:text-green-500">FAQs</Link>
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
            <Link to="/" className="hover:text-green-500" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/AboutUs" className="hover:text-green-500" onClick={() => setIsOpen(false)}>About us</Link>
            <Link to="/UnlistedShares" className="hover:text-green-500" onClick={() => setIsOpen(false)}>Unlisted Shares</Link>
            <Link to="/ContactUs" className="hover:text-green-500" onClick={() => setIsOpen(false)}>Contact us</Link>
            <Link to="/Faqs" className="hover:text-green-500" onClick={() => setIsOpen(false)}>FAQs</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
