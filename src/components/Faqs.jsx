import React, { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const faqs = [
  {
    question: "What Are unlisted/Pre IPO Shares?",
    answer:
      "Unlisted Shares are shares that are not traded/listed on stock exchanges...",
  },
  { question: "Is Buying Unlisted Shares Legal in India?", answer: "" },
  { question: "Are the Unlisted shares in demat form?", answer: "" },
  {
    question: "If the company is not listed, how can it be in demat form?",
    answer: "",
  },
  { question: "What are the benefits of buying Pre-IPO shares?", answer: "" },
  {
    question: "What are the risks of investing in Unlisted/Pre-IPO shares?",
    answer: "",
  },
  { question: "Can a retail investor buy unlisted shares?", answer: "" },
  { question: "What is the minimum amount required to invest?", answer: "" },
  { question: "How to buy unlisted shares?", answer: "" },
  { question: "How to sell unlisted shares?", answer: "" },
  { question: "What is the lock-in period for Pre-IPO shares?", answer: "" },
  {
    question:
      "Do I need to open any separate demat account for buying Unlisted/Pre-IPO shares?",
    answer: "",
  },
  {
    question:
      "How much time does it take to get shares credited in my demat account?",
    answer: "",
  },
  {
    question: "How to check my holdings of Unlisted/Pre-IPO shares?",
    answer: "",
  },
  {
    question: "How do I check latest rates of Unlisted/Pre-IPO Shares?",
    answer: "",
  },
  {
    question:
      "What is the time horizon for investment in Unlisted/Pre-IPO shares usually?",
    answer: "",
  },
  { question: "Are buying and selling of Pre-IPO shares taxable?", answer: "" },
  {
    question: "What are the documents required for buying Pre-IPO shares?",
    answer: "",
  },
  { question: "Can NRI investors buy Pre-IPO shares?", answer: "" },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative flex flex-col items-center bg-white py-10 sm:py-16 px-4 sm:px-6 ">
      {/* Background Image */}
      <div className="hidden md:flex">
        <img
          src="/images/design2.png" // Update with actual path
          alt="Background Design"
          className="absolute top-10 md:left-1/6 2xl:left-1/4 xl:left-1/8 transform -translate-x-1/2 w-[150px]  md:w-[350px] "
        />
      </div>

      {/* Wrapper */}
      <div className="max-w-7xl w-full relative z-10 mb-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#EBEBEB] rounded-lg shadow-md mb-3 sm:mb-4 overflow-hidden"
          >
            <button
              className="w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg font-semibold"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex text-left gap-3 md:text-xl text-xs">
                {/* <span className=" w-7 h-7 flex items-center justify-center bg-white border border-gray-400 rounded-full text-sm">
                  {index + 1}
                </span> */}
                {faq.question}
              </div>
              {openIndex === index ? (
                <IoIosArrowUp className=" text-3xl" />
              ) : (
                <IoIosArrowDown className="text-3xl" />
              )}
            </button>
            {openIndex === index && faq.answer && (
              <div className="px-8 py-5  bg-[#EBEBEB] rounded-b-lg">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Floating Icons */}
      <div className="absolute 2xl:right-[330px] 2xl:bottom-[900px] xl:right-[13px] xl:bottom-[500px]  right-6 bottom-2 flex xl:flex-col gap-4 z-50">
        <button className="bg-[#1699B1] text-white md:p-4 p-3  rounded-full shadow-md">
          <HiOutlineUserGroup className="text-2xl" />
        </button>
        <button className="bg-[#16A569] text-white md:p-4 p-3 rounded-full shadow-md">
          <BsWhatsapp className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Faqs;
