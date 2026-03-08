import HeroSection from "../componets/HeroSection";
import ServicesSection from "../componets/ServiceSection";
import CaseStudySection from "../componets/Case";
import TrustSection from "../componets/Trust";
import TestimonialsSection from "../componets/Testmonial";
import FAQSection from "../componets/Faqs";

const Home = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <HeroSection />
      <ServicesSection />
      <CaseStudySection />
      <TrustSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
};

export default Home;
