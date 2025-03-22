import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";

const UnlistedShares = () => {
  // Sample Data for Cards
  const shares = new Array(10).fill({
    name: "Placeaa Private Limited",
    logo: "/images/product.png", // Replace with actual image path
  });

  return (
    <div className="flex flex-col w-full items-center bg-white h-fit font-['Josefin_Sans'] relative">
      {/* Section Title */}
      <h2 className="text-4xl font-bold lg:mb-10 md:mb-6">Unlisted Shares</h2>

      {/* Wrapper for Layout */}
      <div className="relative w-full max-w-7xl px-6 h-fit">
        {/* Background Pattern */}
        <div className="absolute top-14 -left-12 hidden md:flex">
          <img
            src="/images/design2.png" // Replace with actual pattern image
            alt="Pattern"
            className="w-60 h-75"
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 mt-6 h-fit pt-8 pb-35">
          {shares.map((share, index) => (
            <div
              key={index}
              className="bg-white shadow-lg border border-gray-200 rounded-lg p-6 text-center z-30 "
            >
              {/* Company Logo */}
              <img
                src={share.logo}
                alt="Company Logo"
                className="w-20 mx-auto mb-4"
              />
              {/* Company Name */}
              <h3 className="text-lg font-semibold mb-4">{share.name}</h3>
              {/* Buttons */}
              <button className="bg-[#1699B1] text-white px-6 py-2 rounded-full mb-2 w-full">
                Get Best Price
              </button>
              <button className="text-black underline">Learn More</button>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Icons (FIXED) */}
      <div className="absolute 2xl:right-[240px] 2xl:bottom-[500px] xl:right-[30px] xl:bottom-[500px]  right-6 bottom-9 flex lg:flex-col gap-4 z-50">
        {/* Chat Icon */}
        <button className="bg-[#1699B1] text-white md:p-4 p-3  rounded-full shadow-md">
          <HiOutlineUserGroup className="text-2xl" />
        </button>
        {/* WhatsApp Icon */}
        <button className="bg-[#16A569] text-white md:p-4 p-3 rounded-full shadow-md">
          <BsWhatsapp className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default UnlistedShares;
