
import React from "react";
import { useGods } from "@/context/GodsContext";
import { motion } from "framer-motion";

// Import components
import WelcomeHeader from "./welcome/WelcomeHeader";
import HowItWorks from "./welcome/HowItWorks";
import CTAButtons from "./welcome/CTAButtons";
import FeatureList from "./welcome/FeatureList";
import DemoVideo from "./welcome/DemoVideo";
import WelcomeFooter from "./welcome/WelcomeFooter";
import ResearchTestimonials from "./welcome/ResearchTestimonials";
import DivineOrb from "./welcome/DivineOrb";
import SpiritualPaths from "./welcome/SpiritualPaths";
import DivineBenefits from "./welcome/DivineBenefits";
import UniversalLove from "./welcome/UniversalLove";

const Welcome: React.FC = () => {
  const { setStage } = useGods();

  const handleBegin = () => {
    window.open("https://chatgpt.com/g/g-6901478f2bf88191b49298a508bbd486-religious-studies-gpt", "_blank");
  };

  return (
    <div className="w-full max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-xl p-8 md:p-10 shadow-xl dark-glow"
      >
        <WelcomeHeader />
        <DivineOrb />
        <HowItWorks />
        <CTAButtons handleBegin={handleBegin} />
      </motion.div>
      
      <UniversalLove />
      <DivineBenefits />
      <SpiritualPaths />
      <ResearchTestimonials />
      <FeatureList />
      <DemoVideo />
      <WelcomeFooter />
    </div>
  );
};

export default Welcome;
