import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import SkillsSection from "@/components/SkillsSection";
import WhyBodhify from "@/components/WhyBodhify";
import FeaturedCourses from "@/components/FeaturedCourses";
import CommunitySection from "@/components/CommunitySection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <SkillsSection />
      <WhyBodhify />

      <FeaturedCourses />
      <CommunitySection />
      {/* <FAQSection />      Error to fix*/}
      <ContactSection />
    </>
  );
};

export default HomePage;
