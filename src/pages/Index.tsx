
import React, { useEffect, useState } from "react";
import { GodsProvider } from "@/context/GodsContext";
import Header from "@/components/Header";
import MainContent from "@/components/layout/MainContent";
import { motion, AnimatePresence } from "framer-motion";
import { InfoIcon, BookOpen } from "lucide-react";
import AgreementPopup from "@/components/AgreementPopup";
import DivineAuroraField from "@/components/effects/DivineAuroraField";
import EnhancedParticles from "@/components/effects/EnhancedParticles";

const Index: React.FC = () => {
  const [hasAgreed, setHasAgreed] = useState(false);
  
  // Check if user has already agreed on component mount
  useEffect(() => {
    const savedAgreement = localStorage.getItem("divineTool_userAgreement");
    if (savedAgreement) {
      setHasAgreed(true);
    }
  }, []);

  // Update the page title to better reflect the tool's name
  useEffect(() => {
    document.title = "Talk to the Gods | Religious Studies Simulator";
  }, []);
  
  const handleAgree = () => {
    setHasAgreed(true);
  };

  return (
    <GodsProvider>
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-cosmic-950 via-divine-cosmic to-cosmic-900">
        {/* Enhanced cosmic background layers */}
        <DivineAuroraField />
        <EnhancedParticles />
        
        {/* Divine energy pulses */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-resurrection-primary/30 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-divine-accent/25 to-transparent rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-resurrection-primary/15 via-divine-accent/15 to-resurrection-secondary/15 rounded-full blur-3xl animate-spin-slow"></div>
          
          {/* Additional divine orbs */}
          <div className="absolute top-1/6 right-1/3 w-48 h-48 bg-gradient-radial from-divine-purple/40 to-transparent rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-1/3 left-1/6 w-64 h-64 bg-gradient-radial from-divine-celestial/35 to-transparent rounded-full blur-2xl animate-float animation-delay-1000"></div>
        </div>
        
        {/* Floating divine particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="divine-particle absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                color: ['#F59E0B', '#E935C1', '#A855F7', '#FFFFFF'][Math.floor(Math.random() * 4)],
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 6}s`,
              }}
            />
          ))}
        </div>
        
        <div className="min-h-screen flex flex-col relative z-10">
          <Header />
          
          {/* Educational Purpose Disclaimer - Enhanced version */}
          <AnimatePresence>
            {hasAgreed && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.3,
                    type: "spring",
                    stiffness: 100 
                  }}
                  className="mx-auto w-full max-w-6xl px-4 py-4 bg-gradient-to-r from-resurrection-primary/20 via-divine-accent/15 to-resurrection-secondary/20 border-2 border-gold-400/50 rounded-xl flex items-center justify-center mt-2 mb-2 backdrop-blur-2xl shadow-[0_0_40px_rgba(245,158,11,0.4)] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-divine-sweep"></div>
                  <BookOpen className="h-5 w-5 text-gold-400 mr-3 flex-shrink-0 animate-pulse-slow" />
                  <p className="text-sm text-center text-resurrection-foreground font-medium leading-relaxed">
                    <span className="text-gold-400 font-bold text-gradient-animate">✨ Educational Tool ✨</span> This platform is designed for informational, educational, and research purposes only - 
                    to study and understand diverse religious traditions through interactive AI simulations.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.5,
                    type: "spring",
                    stiffness: 100 
                  }}
                  className="mx-auto w-full max-w-6xl px-4 py-3 bg-gradient-to-r from-divine-purple/15 via-resurrection-secondary/10 to-divine-ethereal/15 border-2 border-divine-ethereal/40 rounded-xl flex items-center justify-center mt-1 mb-2 backdrop-blur-2xl shadow-[0_0_30px_rgba(168,85,247,0.3)] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-divine-sweep animation-delay-1000"></div>
                  <InfoIcon className="h-5 w-5 text-divine-ethereal mr-3 animate-pulse-slow" />
                  <p className="text-sm text-center text-resurrection-foreground/95 leading-relaxed">
                    All responses are AI-generated interpretations of religious concepts designed to aid in religious studies and understanding diverse traditions.
                  </p>
                </motion.div>
              </>
            )}
          </AnimatePresence>
          
          <MainContent />
        </div>
      </div>
      
      {/* Display the agreement popup */}
      <AgreementPopup onAgree={handleAgree} />
    </GodsProvider>
  );
};

export default Index;
