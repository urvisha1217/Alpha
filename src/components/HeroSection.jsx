import { useState, useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import Marquee from "react-fast-marquee";
import { motion, AnimatePresence } from "framer-motion";

const beforeColon = "Unlisted Shares, Pre-IPO & Startups :";
const afterColonTexts = ["One platform", "Multiple Brokers", "Best Deals"];

const logos = [
  "/images/vivo.png",
  "/images/dell.png",
  "/images/kia2.png",
  "/images/puma.png",
  "/images/amazon3.png",
  "/images/nutella2.png",
];

export default function HeroSection({ direction = "left", speed = 50 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % afterColonTexts.length);
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval);
  }, []);

  // Split beforeColon into words, preserving punctuation
  const beforeColonWords = beforeColon.split(" ");

  // Variants for typewriter effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Speed of typing (lower = faster)
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <div className="relative w-full h-[85vh] overflow-hidden">
        {/* Background Video as YouTube Embed */}
        {/* <iframe
        className="absolute inset-0 w-full h-full object-cover"
        src="https://www.youtube.com/embed/roz9sXFkTuE?autoplay=1&mute=1&loop=1&playlist=roz9sXFkTuE"
        frameBorder="0"
        allow="autoplay; fullscreen"
        title="Background Video"
      /> */}
        <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 z-10">
          <h1 className=" md:text-3xl lg:text-4xl font-bold flex flex-wrap justify-center items-center max-w-full">
            {/* Typewriter Animation for Before-Colon Text */}
            <motion.span
              className="mr-2 whitespace-nowrap flex"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {beforeColonWords.map((word, wordIndex) => (
                <span key={wordIndex} className="flex">
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={`${wordIndex}-${letterIndex}`}
                      variants={letterVariants}
                    >
                      {letter}
                    </motion.span>
                  ))}
                  {/* Add space after each word except the last one */}
                  {wordIndex < beforeColonWords.length - 1 && (
                    <motion.span variants={letterVariants}> </motion.span>
                  )}
                </span>
              ))}
            </motion.span>

            {/* Dynamic After-Colon Text - Smoothly Fades & Slides */}
            <div className="relative w-[240px] md:w-[250px] lg:w-[300px] h-[30px] sm:h-[40px] md:h-[50px] lg:h-[60px] overflow-hidden flex items-center justify-center sm:justify-start">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -30, opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute left-0 sm:left-auto text-[#1699B1] font-bold text-center sm:text-left w-full"
                >
                  {afterColonTexts[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </h1>
        </div>

        {/* Sticky Action Buttons */}
        <div className="fixed bottom-6 right-6 md:top-[30rem]  md:right-10 flex flex-col space-y-3 z-20">
          <button
            className="md:p-4 p-2 bg-[#1699B1] text-white rounded-full flex items-center justify-center shadow-lg"
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
            className="md:p-4 p-2 bg-[#16A569] text-white rounded-full flex items-center justify-center shadow-lg"
            onClick={() => window.open("https://wa.me/1234567890", "_blank")} // replace with real number when needed
          >
            <BsWhatsapp className="md:text-2xl text-xl" />
          </button>
        </div>
      </div>
      <div className="w-full bg-white py-6 lg:py-16">
        <div className="container mx-auto text-left px-2 lg:px-4">
          <h2 className="text-lg md:text-3xl font-bold text-black text-justify">
            Alpha Capital is India’s #1 multi-broker integrated platform for
            your Unlisted Shares, Startups & Pre-IPO Investment.
          </h2>
          <p className="mt-4 text-gray-700 text-sm md:text-lg text-justify">
            At Alpha Capital, we bridge the gap between investors and brokers,
            offering a streamlined platform for unlisted shares, pre-IPO shares,
            and startup investments. Our integrated platform ensures you benefit
            from competitive deals through partnerships with trusted brokers. So
            maximize your investment potential with access to the best deals.
          </p>
        </div>
      </div>

      <div className="overflow-hidden py-6 container mx-auto">
        <h2 className="text-center text-4xl font-bold mb-4">Trending Shares</h2>
        <div className="relative overflow-hidden py-8">
          {/* Transparent Fade Effect */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-10" />

          <Marquee
            play={true}
            direction={direction}
            speed={speed}
            gradient={false}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`company-${index}`}
                className="mx-12 flex flex-col items-center justify-center"
              >
                <div className="hover:grayscale-0 transition-all duration-200 pb-[2rem]">
                  <img
                    src={logo || "/placeholder.svg"}
                    alt={`Logo ${index}`}
                    className="h-15 w-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </Marquee>

          {/* Right fade effect */}
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-10" />
        </div>
      </div>
    </>
  );
}
