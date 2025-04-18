import React, { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const faqs = [
  {
    question: "What Are unlisted/Pre IPO Shares?",
    answer:
      "Unlisted Shares are shares that are not traded/listed on stock exchanges. However, they are traded over-the-counter in Unlisted Market which is also called Private Market. There are certain companies whose shares are available in unlisted market before their IPO. Investing in such companies is called Pre-IPO Investing.",
  },
  {
    question: "Is Buying Unlisted Shares Legal in India?",
    answer:
      "Yes. Buying unlisted shares is 100% Legal. The payment of the shares is generally made through bank account and shares are stored in demat account.",
  },

  {
    question: "Are the Unlisted shares in demat form?",
    answer:
      "Yes, all the Unlisted Shares in which we deal are in demat form, same as any listed shares. When an investor buys this unlisted shares, they are reflected in their demat account instantly.",
  },
  {
    question: "If the company is not listed, how can it be in demat form?",
    answer:
      "Any company, be it listed or unlisted can have its shares dematerialized with depositories (NSDL and/or CDSL). Listed shares are tradeable on stock exchange while Unlisted Shares are traded in over-the-counter/Private Market. Hence listed and unlisted shares, are both stored in demat account only.",
  },
  {
    question: "What are the benefits of buying Pre-IPO shares?",
    answer:
      " Early-stage investment, High growth potential,Diversification,Exclusive access ",
  },
  {
    question: "What are the risks of investing in Unlisted/Pre-IPO shares?",
    answer:
      "Illiquidity ,Regulatory ,IPO uncertainty ,Valuation , Lock-in period ",
  },
  {
    question: "Can a retail investor buy unlisted shares?",
    answer:
      "Yes, we at Unlisted Arena facilitate investment to retail as well as HNI Investors.",
  },
  {
    question: "What is the minimum amount required to invest?",
    answer:
      "Every unlisted shares have different minimum investment. However, we at Unlisted Arena strive to keep the minimum investment limit as low as possible. On an average minimum investment can be in range of INR 25000-50000.",
  },
  {
    question: "How to buy unlisted shares?",
    answer: (
      <>
        <span className="font-semibold">1️⃣ Connect with Us:</span> Inquire about
        the Unlisted/Pre-IPO shares you're interested in. <br />
        <span className="font-semibold">2️⃣ Get a Quote:</span> We provide
        current market rates (subject to availability). <br />
        <span className="font-semibold">3️⃣ Confirm & Payment:</span> Agree on
        price & quantity, and we share our bank details (bank transfer only).{" "}
        <br />
        <span className="font-semibold">4️⃣ Provide Demat Details:</span>{" "}
        Transfer funds & share your{" "}
        <span className="font-semibold">Demat account details</span> for
        processing. <br />
        <span className="font-semibold">5️⃣ Share Transfer:</span> Once funds are
        received, shares are transferred within{" "}
        <span className="font-semibold">1 working day</span> to your Demat
        account.
      </>
    ),
  },
  {
    question: "How to sell unlisted shares?",
    answer:
      "One can sell Unlisted/Pre-IPO shares anytime before its IPO to any buyer in unlisted market. We may buy such unlisted shares if we have a buying interest. The Pre-IPO shares gets locked for a period of six months from date of its IPO allotment.",
  },
  {
    question: "What is the lock-in period for Pre-IPO shares?",
    answer:
      "As per the SEBI rule, the unlisted shares of the companies listing on the mainboard have a lock-in period of 6 months starting from the IPO. Post six months, the shares will get free from lock automatically in your demat account and you will be free to sell those shares just like selling any other listed stocks on exchanges. The unlisted shares of the companies  listing on SME platform are locked for a period of 1 year.",
  },
  {
    question:
      "Do I need to open any separate demat account for buying Unlisted/Pre-IPO shares?",
    answer:
      "Absolutely No. You do not need to open separate demat account for buying Unlisted/Pre-IPO shares. Your existing demat account is sufficient to buy and hold such shares",
  },
  {
    question:
      "How much time does it take to get shares credited in my demat account?",
    answer:
      "We at Unlisted Arena are the fastest in terms of delivering the shares. The shares usually gets transferred on the same working day in most cases or the next working day.",
  },
  {
    question: "How to check my holdings of Unlisted/Pre-IPO shares?",
    answer:
      "Once the shares gets transferred to your demat account you can easily check it in your Depository Holdings- also called DP Holdings (in your demat account (in mobile/desktop login of your broker. One can also check the shares by installing CDSL/NSDL app on real time basis",
  },
  {
    question: "How do I check latest rates of Unlisted/Pre-IPO Shares?",
    answer:
      "Although, there is no official source to check rates of Unlisted/Pre-IPO shares (as there is no uniform rate in unlisted market) We at Unlisted Arena regularly update rates on our website and telegram channel",
  },
  {
    question:
      "What is the time horizon for investment in Unlisted/Pre-IPO shares usually?",
    answer:
      "Usually, Unlisted/Pre-IPO Investments are more feasible for long term.",
  },
  {
    question: "Are buying and selling of Pre-IPO shares taxable?",
    answer:
      "Short-term (≤24 months) – Taxed as per income slab., Long-term (>24 months) – 20% tax with indexation.,NRIs – TDS applies on gains.",
  },
  {
    question: "What are the documents required for buying Pre-IPO shares?",
    answer:
      "PAN Card,NRE/NRO Bank & Demat Account,Overseas Address Proof,KYC Documents (Passport, Visa, etc.)",
  },
  {
    question: "Can NRI investors buy Pre-IPO shares?",
    answer: "Yes, NRI investors can buy Pre-IPO shares in India",
  },
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
              <div className="px-5 py-1  bg-[#EBEBEB] rounded-b-lg md:text-lg text-xs">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Floating Icons */}
      <div className="fixed bottom-6 right-6 md:top-[30rem]  md:right-10 flex flex-col space-y-3 z-20">
        <button
          className="md:p-4 p-3 bg-[#1699B1] text-white rounded-full flex items-center justify-center shadow-lg"
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
          className="md:p-4 p-3 bg-[#16A569] text-white rounded-full flex items-center justify-center shadow-lg"
          onClick={() => window.open("https://chat.whatsapp.com/HU0ANXzpvF4HiDWuDpeebX", "_blank")} // replace with real number when needed
        >
          <BsWhatsapp className="md:text-2xl text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Faqs;
