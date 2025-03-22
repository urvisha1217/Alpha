import HeroSection from "../components/HeroSection";
import IPOPerformance from "../components/IPOPerformance";
import Testimonials from "../components/Testimonials";
import Expertise from "../components/Expertise";
import QuoteBanner from "../components/QuoteBanner";

function HomePage() {
  return (
    <>
      <HeroSection/> 
      <IPOPerformance/> 
      <Testimonials />
      <Expertise />
      <QuoteBanner /> 
    </>
  );
}

export default HomePage;
