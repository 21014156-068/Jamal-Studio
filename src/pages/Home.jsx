import HeroSection from "../componets/HeroSection";
import ServicesSection from "../componets/ServiceSection";
import CaseStudySection from "../componets/Case";
import TrustSection from "../componets/Trust";
import TestimonialsSection from "../componets/Testmonial";
import FAQSection from "../componets/Faqs";
import ProcessSection from "../componets/process";
import PerformanceLab from "../componets/Performance";
import ProjectCTA from "../componets/ProjectCTA";

const Home = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <HeroSection />
      <ServicesSection />
      <CaseStudySection />
      <PerformanceLab />
      <TrustSection />

      <TestimonialsSection />
      <FAQSection />
      <ProcessSection />

      <ProjectCTA />
    </div>
  );
};

export default Home;
