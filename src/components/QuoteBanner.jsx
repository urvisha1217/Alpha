import React from "react";

const QuoteBanner = () => {
  return (
    <div className="relative w-full h-32 md:h-60 overflow-hidden  ">
      <img
        src="/images/banner.png" // replace with actual image path
        alt="FAQ Background"
        className="absolute inset-0 w-full h-full object-cover "
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
        <p className="text-sm md:text-3xl mt-1 md:mt-3">
          "Opportunities come infrequently. When it rains gold, put out the
          bucket, not the thimble."
        </p>
      </div>
    </div>
  );
};

export default QuoteBanner;
