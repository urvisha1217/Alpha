import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "I’ve never felt more graceful in ethnic wear! The vibrant colors and superior quality make this kurti a must-have. Highly recommended!",
    name: "Priya S.1",
    date: "August 10, 2023",
    location: "",
    image: "/images/person.png",
  },
  {
    text: "I’ve never felt more graceful in ethnic wear! The vibrant colors and superior quality make this kurti a must-have. Highly recommended!",
    name: "Dharmesh (Surat, Gujarat)2",
    date: "January 10, 2025",
    image: "/images/person.png",
  },
  {
    text: "I’ve never felt more graceful in ethnic wear! The vibrant colors and superior quality make this kurti a must-have. Highly recommended!",
    name: "Priya S.3",
    date: "August 10, 2023",
    image: "/images/person.png",
  },
  {
    text: "I’ve never felt more graceful in ethnic wear! The vibrant colors and superior quality make this kurti a must-have. Highly recommended!",
    name: "Priya S.4",
    date: "August 10, 2023",
    location: "",
    image: "/images/person.png",
  },
  {
    text: "I’ve never felt more graceful in ethnic wear! The vibrant colors and superior quality make this kurti a must-have. Highly recommended!",
    name: "Dharmesh (Surat, Gujarat)5",
    date: "January 10, 2025",
    image: "/images/person.png",
  },
  {
    text: "I’ve never felt more graceful in ethnic wear! The vibrant colors and superior quality make this kurti a must-have. Highly recommended!",
    name: "Priya S.6",
    date: "August 10, 2023",
    image: "/images/person.png",
  },
];

const Testimonials = () => {
  const [centerIndex, setCenterIndex] = useState(1);

  const handlePrev = () => {
    setCenterIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCenterIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const visibleIndices = [
    (centerIndex - 1 + testimonials.length) % testimonials.length,
    centerIndex,
    (centerIndex + 1) % testimonials.length,
  ];

  const visibleTestimonials = visibleIndices.map(
    (index) => testimonials[index]
  );

  const variants = {
    center: {
      scale: 1.1,
      opacity: 1,
      x: 0,
      zIndex: 10,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    side: {
      scale: 0.9,
      opacity: 0.75,
      x: (index) => (index === 0 ? "-20%" : "20%"),
      zIndex: 5,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      x: (direction) => (direction === "left" ? "100%" : "-100%"),
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="bg-[#f0f5fc] min-h-full flex flex-col items-center py-[8%]">
      <h2 className="md:text-4xl mb-10 text-2xl">What Our Customers Say</h2>

      <div className="flex gap-10 items-center flex-col lg:flex-row md:w-full md:justify-center p-6 relative">
        <AnimatePresence initial={false} custom={centerIndex}>
          {visibleTestimonials.map((testimonial, index) => (
            <motion.div
              key={visibleIndices[index]}
              custom={index}
              variants={variants}
              initial="side"
              animate={index === 1 ? "center" : "side"}
              exit="exit"
              className="bg-white rounded-xl shadow-md p-10 md:max-w-lg border border-gray-200 w-full md:w-auto absolute lg:static"
              style={{
                left: index === 0 ? "10%" : index === 2 ? "70%" : "40%",
              }}
            >
              <p className="text-base text-gray-700 leading-relaxed">
                {testimonial.text}
              </p>
              <div className="flex items-center mt-6 border-t border-gray-300">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full mr-4 mt-4"
                />
                <div>
                  <p className="mt-4 text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="flex gap-4 mt-10">
        <motion.button
          onClick={handlePrev}
          whileTap={{ scale: 0.9 }}
          className="bg-white p-3 rounded-full shadow-md hover:bg-gray-200"
        >
          <FaChevronLeft />
        </motion.button>
        <motion.button
          onClick={handleNext}
          whileTap={{ scale: 0.9 }}
          className="bg-white p-3 rounded-full shadow-md hover:bg-gray-200"
        >
          <FaChevronRight />
        </motion.button>
      </div>
    </div>
  );
};

export default Testimonials;
