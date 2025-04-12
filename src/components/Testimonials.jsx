import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "I’ve never felt more graceful in ethnic wear! The vibrant colors and superior quality make this kurti a must-have. Highly recommended!",
    name: "Priya S.1",
    date: "August 10, 2023",
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
  const [scrollPosition, setScrollPosition] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3); // Default 3 cards per view
  const carouselRef = useRef(null);

  useEffect(() => {
    const updateCardWidth = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.offsetWidth;
        // Show 3 cards for all screen sizes
        const newCardsPerView = 3; // Always show 3 testimonials
        setCardsPerView(newCardsPerView);
        const newCardWidth = containerWidth / newCardsPerView;
        setCardWidth(newCardWidth);
        // Center the first card of the middle set
        setScrollPosition(-newCardWidth * testimonials.length - newCardWidth * Math.floor(newCardsPerView / 2));
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  const handlePrev = () => {
    setScrollPosition((prev) => prev + cardWidth);
  };

  const handleNext = () => {
    setScrollPosition((prev) => prev - cardWidth);
  };

  const handleTransitionEnd = () => {
    const totalWidth = cardWidth * testimonials.length;
    if (scrollPosition <= -totalWidth * 2) {
      setScrollPosition(-totalWidth);
    } else if (scrollPosition >= 0) {
      setScrollPosition(-totalWidth);
    }
  };

  // Calculate visible index for the center card
  const totalTestimonials = testimonials.length;
  const visibleIndex = cardWidth
    ? Math.floor(((Math.abs(scrollPosition) + cardWidth * Math.floor(cardsPerView / 2)) / cardWidth) % totalTestimonials)
    : 0;

  return (
    <div className="bg-[#f0f5fc] min-h-full flex flex-col items-center py-[8%]">
      <h2 className="md:text-4xl mb-10 text-2xl font-bold">
        What Our Customers Say
      </h2>

      <div className="w-full max-w-8xl px-6 overflow-hidden">
        <div ref={carouselRef} className="relative w-full overflow-hidden">
          <motion.div
            className="flex"
            style={{
              width: `${cardWidth * totalTestimonials * 3}px`,
            }}
            animate={{ x: scrollPosition }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onAnimationComplete={handleTransitionEnd}
          >
            {[...testimonials, ...testimonials, ...testimonials].map(
              (testimonial, index) => {
                const adjustedIndex = index % totalTestimonials;
                const isCenter = adjustedIndex === visibleIndex;

                return (
                  <motion.div
                    key={`${testimonial.name}-${index}`}
                    className="flex-shrink-0 px-1"
                    style={{
                      width: cardWidth,
                    }}
                    animate={{
                      scale: isCenter ? 1.0 : 0.85, // More pronounced scale for center
                      zIndex: isCenter ? 10 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className={`bg-white rounded-xl shadow-md p-5 lg:p-10 border border-gray-300 w-full h-full flex flex-col justify-between `}
                    >
                      <p className="text-sm lg:text-base text-gray-700 leading-relaxed">
                        {testimonial.text}
                      </p>
                      <div className="flex items-center mt-6 border-t border-gray-300 pt-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full mr-4"
                        />
                        <div>
                          <p className="text-md lg:text-lg font-semibold">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {testimonial.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              }
            )}
          </motion.div>
        </div>
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
