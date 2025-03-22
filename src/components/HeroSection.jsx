import { useState, useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import Marquee from "react-fast-marquee";

const slides = [
  { text: "Unlisted Shares, Pre-IPO & Startups : One platform" },
  { text: "Invest in High-Growth Startups & Private Companies" },
  { text: "Your Gateway to Exclusive Investment Opportunities" },
];

const logos = [
  "/images/vivo.png",
  "/images/dell.png",
  "/images/kia2.png",
  "/images/puma.png",
  "/images/amazon3.png",
  "/images/nutella2.png",
];

export default function HeroSection({ direction = "left", speed = 50 }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative w-full h-[60vh] overflow-hidden">
        {/* Background Video as YouTube Embed */}
        {/* <iframe
        className="absolute inset-0 w-full h-full object-cover"
        src="https://www.youtube.com/embed/roz9sXFkTuE?autoplay=1&mute=1&loop=1&playlist=roz9sXFkTuE"
        frameBorder="0"
        allow="autoplay; fullscreen"
        title="Background Video"
      /> */}

        {/* Overlaying Text */}
        <div className="absolute inset-0 flex items-center justify-center text-center p-6 z-10">
          <h1 className="text-xl md:text-3xl font-bold ">
            {slides[currentSlide].text}
          </h1>
        </div>

        {/* Action Buttons */}
        <div className="absolute bottom-6 right-6 flex flex-col space-y-3 z-10">
          <button className="md:p-4 p-3 bg-[#1699B1] text-white rounded-full flex items-center justify-center shadow-lg ">
            <HiOutlineUserGroup className="text-2xl" />
          </button>
          <button className="md:p-4 p-3 bg-[#16A569] text-white rounded-full flex items-center justify-center shadow-lg ">
            <BsWhatsapp className="text-2xl" />
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
                className="mx-12 flex flex-col items-center justify-center "
              >
                <div className="hover:grayscale-0 transition-all duration-200 pb-[7rem]">
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
