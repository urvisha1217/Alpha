import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", form);
  };

  return (
    <div className="p-6 bg-white container mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="md:w-[40%] flex justify-center">
          <img
            src="/images/contactImg.png"
            alt="Contact Illustration"
            className="w-full max-w-sm"
          />
        </div>
        <form className="w-full md:w-2/3 space-y-5" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            className="w-full p-3 bg-gray-100 rounded-md"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email *"
            className="w-full p-3 bg-gray-100 rounded-md"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone *"
            className="w-full p-3 bg-gray-100 rounded-md"
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="w-full p-3 bg-gray-100 rounded-md h-32"
            onChange={handleChange}
          ></textarea>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-black text-white px-10 py-3 rounded-md"
            >
              Send Message
            </button>
          </div>
        </form>
        <div className="flex flex-row md:flex-col gap-4 px-4">
          <button className="bg-[#1699B1] text-white md:p-4 p-3 rounded-full">
            <HiOutlineUserGroup className="text-2xl" />
          </button>
          <button className="bg-[#16A569] text-white md:p-4 p-3 rounded-full">
            <BsWhatsapp className="text-2xl" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        <div className="flex flex-col border p-7 border-gray-200 rounded-md">
          <span className="font-bold text-lg">Mobile Number</span>
          <div className="flex flex-row mt-3 items-center">
            <div className="bg-black text-white p-2 rounded-full">
              <FaPhoneAlt className="text-sm" />
            </div>
            <p className="text-md ml-3">+91 97246 05988</p>
          </div>
        </div>
        <div className="flex flex-col border p-7 border-gray-200 rounded-md">
          <span className="font-bold text-lg">Email</span>
          <div className="flex flex-row mt-3 items-center">
            <div className="bg-black text-white p-2 rounded-full">
              <FaEnvelope className="text-sm" />
            </div>
            <p className="text-md ml-3">support@alfacapital.com</p>
          </div>
        </div>
        <div className="flex flex-col border p-7 border-gray-200 rounded-md">
          <span className="font-bold text-lg">Address</span>
          <div className="flex flex-row mt-3 items-center">
            <div className="bg-black text-white p-2 rounded-full">
              <FaMapMarkerAlt className="text-sm" />
            </div>
            <p className="text-md ml-3">404/ Skylark Shopping Surat</p>
          </div>
        </div>
      </div>
    </div>
  );
}
