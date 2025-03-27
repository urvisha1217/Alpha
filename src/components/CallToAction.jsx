import React from "react";

const CallToAction = () => {
  return (
    <div className="bg-[#1597ac] text-white flex flex-col sm:flex-row justify-center items-center text-center sm:text-left py-6 sm:py-10 px-4 sm:px-8">
      <p className="text-lg sm:text-xl md:text-3xl font-semibold">
        Still Have Questions in Your Mind?
      </p>
      <button className="mt-4 sm:mt-0 sm:ml-10 bg-white text-[#1597ac] w-full  sm:w-64 md:w-80 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:shadow-2xl transition">
        Call Now
      </button>
    </div>
  );
};

export default CallToAction;
