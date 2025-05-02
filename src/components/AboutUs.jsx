import React from "react";
import { FaCheckCircle, FaLightbulb, FaBullseye } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { GiReceiveMoney, GiPieChart, GiChart } from "react-icons/gi";

const AboutUs = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <>
      {/* About Us Section */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center relative p-3 md:p-0  py-12">
        <img
          src="/images/design2.png"
          alt="Design"
          className="hidden md:absolute md:left-0 md:top-85 lg:left-3 lg:bottom-18 xl:bottom-10 md:block"
        />
        {/* Image Section */}
        <div className="w-full md:w-[80%] lg:w-[40%] xl:w-[35%] mb-4 md:mb-0 mt-10 z-30">
          <img
            src="/images/about.png"
            alt="Alpha Capital Building"
            className="w-full shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-[80%] lg:w-[50%] lg:pl-6 lg:px-10 py-4 md:pt-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-center md:text-left">
            About Us
          </h2>
          <p className="text-[#999] mb-4 text-justify text-lg xl:text-xl">
            Alpha Capital simplifies investments in Unlisted Shares, Pre-IPO and
            Startups Investment by bringing together top brokers on a single
            platform, ensuring you access the best prices and deals in the
            market. Our platform connects you with multiple leading brokers,
            offering unbeatable deals and seamless investment opportunities for
            maximum returns.
          </p>
          <p className="text-[#999] mb-4 text-justify text-lg xl:text-xl">
            By partnering with the industry’s top brokers, we provide a
            transparent, efficient, and cost-effective solution to meet your
            investment goals. Your success is our priority, so invest with
            confidence through our streamlined and reliable services.
          </p>
          <p className="text-[#999]  text-justify text-lg xl:text-xl">
            At Alpha Capital, we bridge the gap between investors and brokers,
            offering a streamlined platform for Unlisted Shares, Pre-IPO and
            Startups Investment. Our integrated platform ensures you benefit
            from competitive deals through partnerships with trusted brokers.
            Maximize your investment potential with access to the best deals.
          </p>
        </div>

        {/* Floating Icons */}
        <div className="fixed bottom-6 right-6 md:top-[30rem]  md:right-10 flex flex-col space-y-3 z-30">
          <button
            className="md:p-4 p-3 bg-[#1699B1] text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
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
            className="md:p-4 p-3 bg-[#16A569] text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer"
            onClick={() =>
              window.open("https://chat.whatsapp.com/+91 6356560080", "_blank")
            } // replace with real number when needed
          >
            <BsWhatsapp className="md:text-2xl text-xl" />
          </button>
        </div>

        {/* <div className="w-fit flex lg:flex-col gap-3 md:gap-4 md:pt-0 z-30">
          <button className="bg-[#1699B1] text-white md:p-4 p-3 rounded-full shadow-lg lg:mb-4">
            <HiOutlineUserGroup className="text-2xl" />
          </button>
          <button className="bg-[#16A569] text-white md:p-4 p-3 rounded-full shadow-lg">
            <BsWhatsapp className="text-2xl" />
          </button>
        </div> */}
      </div>
      {/* Pre-IPO Investing */}
      <div className="container mx-auto flex flex-col items-center justify-between bg-white p-3 md:py-12">
        <div className="mb-8 lg:mb-12">
          <div className="bg-green-100 px-8 py-4 rounded-full">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center">
              Why Consider Pre-IPO Investing?
            </h2>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between md:items-center gap-8 text-center">
          {/* Higher return */}
          <div className="flex flex-col items-center gap-2">
            <div className="p-4 bg-blue-100 rounded-full shadow-sm">
              <GiReceiveMoney size={48} className="text-blue-600" />
            </div>
            <div className="flex items-center gap-2">
              {/* <FaCheckCircle size={20} className="text-green-500" /> */}
              <span className="text-gray-800 md:text-xl">
                Potential for higher return
              </span>
            </div>
          </div>

          {/* Portfolio Diversification */}
          <div className="flex flex-col items-center gap-2">
            <div className="p-4 bg-purple-100 rounded-full shadow-sm">
              <GiPieChart size={48} className="text-purple-600" />
            </div>
            <div className="flex items-center gap-2">
              {/* <FaCheckCircle size={20} className="text-green-500" /> */}
              <span className="text-gray-800 md:text-xl">
                Portfolio Diversification
              </span>
            </div>
          </div>

          {/* Lower correlation */}
          <div className="flex flex-col items-center gap-2">
            <div className="p-4 bg-orange-100 rounded-full shadow-sm">
              <GiChart size={48} className="text-orange-500" />
            </div>
            <div className="flex items-center gap-2">
              {/* <FaCheckCircle size={20} className="text-green-500" /> */}
              <span className="text-gray-800 md:text-xl">
                Lower correlation with public market
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Vision-Mission Section */}
      <div className="bg-[#ECF4FD] relative flex flex-col md:flex-row items-center justify-center h-fit md:py-40 lg:py-40 xl:py-50">
        <img
          src="/images/Group.png"
          alt="Design"
          className="w-60 absolute right-0 xl:right-35 2xl:right-60 top-0 hidden md:block"
        />
        <img
          src="/images/Vector.png"
          alt="Design"
          className="w-60 absolute left-0 bottom-0 hidden md:block"
        />
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center relative p-3 lg:gap-12">
          {/* Vision Section */}
          <div className="flex-1 text-center md:text-left">
            <FaLightbulb
              size={48}
              className="text-purple-500 mb-4 mx-auto md:mx-0"
            />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-[#999] text-lg md:text-xl xl:text-2xl text-justify w-full md:w-[95%] lg:w-[95%] mx-auto md:mx-0">
              At Alpha Capital, we aim to make investing in Unlisted Shares,
              Pre-IPO opportunities, and startups seamless, transparent, and
              rewarding. Our vision is to be a trusted partner, connecting
              investors with high-potential opportunities while ensuring
              integrity and long-term growth. By simplifying access to
              alternative investments, we empower investors to diversify their
              portfolios with confidence.
            </p>
          </div>

          {/* Mission Section */}
          <div className="flex-1 text-center md:text-left">
            <FaBullseye
              size={48}
              className="text-purple-500 mb-4 mx-auto md:mx-0"
            />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-[#999] text-lg md:text-xl xl:text-2xl text-justify w-full md:w-[95%] lg:w-[95%] mx-auto md:mx-0">
              Our mission is to connect investors with trusted brokers across
              India for Pre-IPO, Unlisted Shares, and Startup deals. We simplify
              investments by eliminating the need for multiple logins and KYCs,
              offering a seamless one-stop solution. Our focus is to make
              alternative investments accessible, educate investors, and build
              long-term relationships based on integrity and reliability.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Alpha Capital */}
      <div className="flex flex-col items-center justify-center p-3 lg:p-8 bg-white h-fit md:py-30 lg:py-30 py-20">
        <div className="container mx-auto">
          <div className="mb-8 flex flex-col justify-center items-center">
            <div className="bg-green-100 px-8 py-6 rounded-full">
              <h2 className="text-xl md:text-2xl xl:text-3xl font-bold text-gray-900 text-center">
                Why Choose Alpha Capital?
              </h2>
            </div>
            <p className="text-[#999] mt-4 text-center text-xl xl:text-2xl">
              There are numerous reasons you should work with us, but these are
              the main reasons why you always get the best deals from us.
            </p>
          </div>

          {/* Process Section */}
          <div className="flex flex-col md:flex-row justify-center items-center lg:gap-4">
            <div className="flex flex-col items-center lg:w-1/3">
              <div className="bg-gray-100 p-8 rounded-full mb-4">
                <img
                  src="/images/Why1.png"
                  alt="design"
                  className="w-16 lg:w-18"
                />
              </div>
              <p className="text-lg lg:text-xl text-center w-[80%] md:w-auto  xl:w-[70%]">
                We collect the share prices data from all brokers across India
              </p>
            </div>

            <img
              src="/images/Arrow2.png"
              alt="Arrow"
              className="hidden lg:block"
            />

            <div className="flex flex-col items-center  lg:w-1/3">
              <div className="bg-gray-100 p-8 rounded-full mb-4">
                <img
                  src="/images/Why2.png"
                  alt="design"
                  className="w-16 lg:w-18"
                />
              </div>
              <p className="text-lg lg:text-xl text-center w-[80%] md:w-auto">
                Filtering out lowest rate
              </p>
            </div>

            <img
              src="/images/Arrow2.png"
              alt="Arrow"
              className="hidden lg:block"
            />

            <div className="flex flex-col items-center  lg:w-1/3">
              <div className="bg-gray-100 p-8 rounded-full mb-4">
                <img
                  src="/images/Why3.png"
                  alt="design"
                  className="w-16 lg:w-18 ml-3"
                />
              </div>
              <p className="text-lg lg:text-xl text-center w-[80%] md:w-auto xl:w-[70%]">
                Providing clients with the perfect broker & best available deals
                across India
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Buy Unlisted Shares */}
      <div className="flex flex-col items-center justify-center relative p-8 bg-[#ECF4FD] h-fit md:py-30 lg:py-40 xl:py-40">
        <img
          src="/images/Group.png"
          alt="Design"
          className="w-60 absolute right-0 xl:right-35 2xl:right-60 top-0 hidden md:block"
        />
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Simple Process for Buying Unlisted Shares
          </h2>
        </div>

        {/* Process Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-3">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className="bg-[#f97e0418] p-3 rounded-full mb-4">
              <img src="/images/connection1.png" size={40} />
            </div>
            <p className="text-gray-800 text-lg text-center">Connect With Us</p>
          </div>

          <img
            src="/images/Arrow2.png"
            alt="Arrow"
            className="hidden lg:block w-30 xl:w-35"
          />

          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className="bg-[#ed06ab13] p-3 rounded-full mb-4">
              <img src="/images/deal1.png" size={40} />
            </div>
            <p className="text-gray-800 text-lg text-center">
              Deal Confirmation
            </p>
          </div>

          <img
            src="/images/Arrow2.png"
            alt="Arrow"
            className="hidden lg:block w-30 xl:w-35"
          />

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className="bg-[#00cef21a] p-3 rounded-full shadow-lg mb-4">
              <img src="/images/share1.png" size={41} />
            </div>
            <p className="text-gray-800 text-lg text-center">Fund Transfer</p>
          </div>

          <img
            src="/images/Arrow2.png"
            alt="Arrow"
            className="hidden lg:block w-30 xl:w-35"
          />

          {/* Step 4 */}
          <div className="flex flex-col items-center">
            <div className="bg-[#7b61ff1a] p-3 rounded-full shadow-lg mb-4">
              <img src="/images/paper1.png" size={41} />
            </div>
            <p className="text-gray-800 text-lg text-center">Documentation</p>
          </div>

          <img
            src="/images/Arrow2.png"
            alt="Arrow"
            className="hidden lg:block w-30 xl:w-35"
          />

          {/* Step 5 */}
          <div className="flex flex-col items-center">
            <div className="bg-[#25b34b1e] p-3 rounded-full shadow-lg mb-4">
              <img src="/images/digital-product1.png" size={41} />
            </div>
            <p className="text-gray-800 text-lg text-center">
              Delivery of shares
            </p>
          </div>
        </div>
      </div>

      {/* ONE SECTION REMAINING */}
      <div className="bg-[#1597ac] text-white flex flex-col sm:flex-row justify-evenly items-center text-center sm:text-left py-10 px-8">
        <p className="text-lg sm:text-xl md:text-3xl font-semibold">
          Beat the Market – Invest in Unlisted Shares Before the Crowd!
        </p>
        <button
          className="mt-4 sm:mt-0 sm:ml-10 bg-white text-black  w-full sm:w-64 md:w-80 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl transition "
          onClick={() => navigate("/ContactUs")}
        >
          Get in touch
        </button>
      </div>
      {/* FAQ Section */}
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-evenly h-fit py-10 md:py-20 lg:py-30 xl:py-40 gap-8 md:gap-4 lg:gap-0">
          <div className="flex justify-center w-[40%] lg:w-[20%]">
            <img
              src="/images/PPCService.png"
              alt="FAQs Illustration"
              className="w-full"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              Need Clarity? We’ve answered it all for you! - explore our FAQs!
            </p>
            <button
              className="bg-[#1699B1] text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition"
              onClick={() => navigate("/Faqs")}
            >
              Click here for FAQs
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
