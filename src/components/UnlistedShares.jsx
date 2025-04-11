import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";

const UnlistedShares = () => {
  // Sample Data for Cards with Different Company Names, Logos, and URLs
  const shares = [
    {
      name: "Tata Capital Ltd",
      logo: "/images/tata-capital.png",
      url: "https://www.tatacapital.com",
    },
    {
      name: "National Stock Exchange",
      logo: "/images/nse.png",
      url: "https://www.nseindia.com",
    },
    {
      name: "Zomato",
      logo: "/images/zomato.png",
      url: "https://www.zomato.com",
    },
    {
      name: "Chennai Super Kings",
      logo: "/images/csk.png",
      url: "https://www.chennaisuperkings.com",
    },
    {
      name: "Boat Lifestyle",
      logo: "/images/boat.png",
      url: "https://www.boat-lifestyle.com",
    },
    {
      name: "Swiggy Delivery",
      logo: "/images/swiggy.png",
      url: "https://www.swiggy.com",
    },
    {
      name: "PharmEasy",
      logo: "/images/pharmeasy.png",
      url: "https://pharmeasy.in",
    },
    {
      name: "Vikram Solar",
      logo: "/images/vikram-solar.png",
      url: "https://www.vikramsolar.com",
    },
    {
      name: "Reliance Retail",
      logo: "/images/reliance-retail.png",
      url: "https://www.relianceretail.com",
    },
    {
      name: "Byju's Learning",
      logo: "/images/byjus.png",
      url: "https://byjus.com",
    },
  ];

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
              className="bg-white shadow-lg border border-gray-200 rounded-lg p-6 text-center z-30"
            >
              {/* Company Logo */}
              <img
                src={share.logo}
                alt={`${share.name} Logo`}
                className="w-20 mx-auto mb-4"
              />
              {/* Company Name */}
              <h3 className="text-lg font-semibold mb-4">{share.name}</h3>
              {/* Buttons */}
              <button
                className="bg-[#1699B1] text-white px-6 py-2 rounded-full mb-2 w-full"
                onClick={() =>
                  window.open("https://wa.me/1234567890", "_blank")
                } // Replace with real number when needed
              >
                Get Best Price
              </button>

              <a
                href={share.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black underline"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Icons (FIXED) */}
      <div className="fixed bottom-6 right-6 md:top-[30rem] md:right-10 flex flex-col space-y-3 z-30">
        <button
          className="md:p-4 p-2 bg-[#1699B1] text-white rounded-full flex items-center justify-center shadow-lg"
          onClick={() =>
            window.open(
              "https://chat.whatsapp.com/HU0ANXzpvF4HiDWuDpeebX",
              "_blank"
            )
          }
        >
          <HiOutlineUserGroup className="md:text-2xl text-xl" />
        </button>
        <button
          className="md:p-4 p-2 bg-[#16A569] text-white rounded-full flex items-center justify-center shadow-lg"
          onClick={() => window.open("https://wa.me/1234567890", "_blank")} // replace with real number when needed
        >
          <BsWhatsapp className="md:text-2xl text-xl" />
        </button>
      </div>
    </div>
  );
};

export default UnlistedShares;
