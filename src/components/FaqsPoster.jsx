import React from "react";

const FaqsPoster = () => {
  return (
    <div className="relative w-full h-32 md:h-60 overflow-hidden ">
      <img
        src="/images/faqs.png" // replace with actual image path
        alt="FAQ Background"
        className="absolute inset-0 w-full h-full object-cover "
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
        <h1 className="text-2xl md:text-5xl font-bold">FAQs</h1>
        <p className="text-sm md:text-3xl mt-1 md:mt-3">
          Resolving Your Queries, One Answer at a Time
        </p>
      </div>
    </div>
  );

};

export default FaqsPoster;
