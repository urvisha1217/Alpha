import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    text: "I’ve never felt more graceful in ethnic wear! The vibrant colors and superior quality make this kurti a must-have. Highly recommended!",
    name: "Priya S.",
    date: "August 10, 2023",
    location: "",
    image: "/images/person.png",
  },
  {
    text: "I was new to the unlisted market and also afraid of being fraud so I started with a small deal. I am surprised that they transferred the shares within 3 hours. They also guided me about investment procedures throughout this journey. From the first date of transaction to till date, it's almost more than 3 years, I am always getting the best rate from Alpha Capital.",
    name: "Dharmesh (Surat, Gujarat)",
    date: "January 10, 2025",
    image: "/images/person.png",
  },
  {
    text: "I’ve never felt more graceful in ethnic wear! The vibrant colors and superior quality make this kurti a must-have. Highly recommended!",
    name: "Priya S.",
    date: "August 10, 2023",
    image: "/images/person.png",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-[#f0f5fc] min-h-full flex flex-col items-center py-[8%]">
      <h2 className="md:text-4xl mb-10 text-2xl">What Our Customers Say</h2>

      <div className="flex gap-8 items-center flex-col lg:flex-row md:w-full md:justify-center p-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-8 md:max-w-md  border border-gray-200 w-full md:w-auto"
          >
            <p className="text-sm text-gray-700 leading-relaxed">
              {testimonial.text}
            </p>
            <div className="flex items-center mt-4  border-t border-gray-300">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 rounded-full mr-3 mt-3"
              />
              <div>
                <p className="mt-3">{testimonial.name}</p>
                <p className="text-xs text-gray-500 ">{testimonial.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows for Carousel */}
      <div className="flex gap-4 mt-10">
        <button className="bg-white p-3 rounded-full shadow-md hover:bg-gray-200">
          <FaChevronLeft />
        </button>
        <button className="bg-white p-3 rounded-full shadow-md hover:bg-gray-200">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
