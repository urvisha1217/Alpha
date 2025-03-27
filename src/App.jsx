import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import UnlistedSharesPage from "./pages/UnlistedSharesPage";
import FaqsPage from "./pages/FaqsPage";
import ContactUsPage from "./pages/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage";
import Footer from "./components/Footer";
import DisclaimerPolicy from "./components/DisclaimerPolicy";
import TermsConditions from "./components/TermsConditions";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/UnlistedShares" element={<UnlistedSharesPage />} />
        <Route path="/Faqs" element={<FaqsPage />} />
        <Route path="/ContactUs" element={<ContactUsPage />} />
        <Route path="/AboutUs" element={<AboutUsPage />} />
        {/* <Route path="/PrivacyPolicy" element={<DisclaimerPolicy />} />
        <Route path="/Disclaimer" element={<DisclaimerPolicy />} />
        <Route path="/TermsConditions" element={<TermsConditions />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
