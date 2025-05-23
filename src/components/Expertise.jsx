import React from "react";
import { GoArrowSwitch } from "react-icons/go";

const Expertise = () => {
  return (
    <div className="py-14">
      <div className="text-center text-xl font-bold mb-6 bg-[#E6F4ED] py-6 rounded-full mx-auto w-[90%] md:w-[40%] lg:w-[20%]">
        Our Expertise
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 pt-6">
        {/* Expertise 1 */}
        <div className="flex flex-col items-center text-center w-[80%] md:w-[25%]">
          <img src="images/dollar.png" alt="img" className="h-24 w-24" />
          <p className="mt-4 text-xl">Lowest Rate or No deals</p>
        </div>

        {/* Arrow */}
        {/* Arrow */}
        <div className="hidden md:flex text-[60px] text-green-600">
          <GoArrowSwitch />
        </div>

        {/* Expertise 2 */}
        <div className="flex flex-col items-center text-center w-[80%] md:w-[25%]">
          <img src="images/delivery.png" alt="img" className="h-24 w-24" />
          <p className="mt-4 text-xl">
            Fastest Delivery
            <br />( Within Few Hours )
          </p>
        </div>

        {/* Arrow */}
        {/* Arrow */}
        <div className="hidden md:flex text-[60px] text-green-600">
          <GoArrowSwitch />
        </div>

        {/* Expertise 3 */}
        <div className="flex flex-col items-center text-center w-[80%] md:w-[25%]">
          <img src="images/cards.png" alt="img" className="h-24 w-24" />
          <p className="mt-4 text-xl">
            Secure Payment
            <br />
            (via NEFT/RTGS/IMPS/UPI)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
