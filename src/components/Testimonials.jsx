import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "I was new to the unlisted market and also afraid of being fraud so I started with a small deal. I am surprised that they transferred the shares within 3 hours. They also guided me about investment procedures throughout this journey. From the first date of transaction to till date, it's almost more than 3 years, I am always getting the best rate from Alpha Capital.",
    name: "Dharmesh (Surat, Gujarat)",
    date: "August 10, 2023",
    image: "/images/person1.png",
  },
  {
    text: " I'm in this unlisted market even before Alpha Capital started. I was doing deal in my local brokers, but they're charging higher as well as lots of malpractice to sell the shares. I remember the day when I contacted Alpha capital CEO over the call for the first time. I started with a small deal, since that day, I have almost purchased more than 15 lakh worth of shares from Alpha capital. They are very genuine, supportive and the best thing I personally felt about them is, they don't do miss-selling for just sake of commission.",
    name: "Manishbhai (Rajkot)",
    date: "January 10, 2025",
    image: "/images/person1.png",
  },
  {
    text: "I was recommended to Alpha capital by my brother. I completed multiple deals with Alpha capital. They are doing excellent in terms of service,  the transactions are very smooth and shares also get credited within a few hours. If you are looking for the best rate and don't want to surf around the different brokers' websites, just contact them and I'm sure you will get the best deal on the internet.",
    name: "Jagdishbhai (Palanpur)",
    date: "November 10, 2023",
    image: "/images/person1.png",
  },
  {
    text: "All The deals I have done with them are either on WhatsApp or call. Within just 5 to 10 minutes of discussion with them you will get the best unlisted shares price available on the internet. Good thing which personal experienced is that their team keeps updating you over WhatsApp till you get shares credited in your demat. It's a good platform for you if you're looking for genuine, supportive & trustworthy unlisted & startup investment deals",
    name: " Prakash Sheth(Mumbai)",
    date: "August 10, 2023",
    image: "/images/person1.png",
  },
  {
    text: "I don't have more words to say but if you are looking for a trustworthy platform as well as best deals and fastest delivery, just go for Alpha capital you will never be disappointed, that's my guarantee",
    name: "Parth Patel (Australia)",
    date: "January 10, 2025",
    image: "/images/person1.png",
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
        const newCardsPerView = window.innerWidth < 768 ? 1 : 3; // Always show 3 testimonials
        setCardsPerView(newCardsPerView);
        const newCardWidth = containerWidth / newCardsPerView;
        setCardWidth(newCardWidth);
        // Center the first card of the middle set
        setScrollPosition(
          -newCardWidth * testimonials.length -
            newCardWidth * Math.floor(newCardsPerView / 2)
        );
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
    ? Math.floor(
        ((Math.abs(scrollPosition) + cardWidth * Math.floor(cardsPerView / 2)) /
          cardWidth) %
          totalTestimonials
      )
    : 0;

  return (
    <div className="bg-[#f0f5fc] min-h-full flex flex-col items-center py-[8%]">
      <h2 className="md:text-4xl mb-10 text-2xl font-bold">
        What Our Customers Says
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
                      className={`bg-white rounded-xl shadow-md p-5 lg:p-10 border border-gray-300 w-full h-full flex flex-col justify-center `}
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
