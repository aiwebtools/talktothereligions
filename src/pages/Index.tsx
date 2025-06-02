
import React, { useEffect, useState } from "react";
import { GodsProvider } from "@/context/GodsContext";
import Header from "@/components/Header";
import MainContent from "@/components/layout/MainContent";
import Particles from "@/components/Particles";
import { motion, AnimatePresence } from "framer-motion";
import { InfoIcon, BookOpen } from "lucide-react";
import AgreementPopup from "@/components/AgreementPopup";

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
        {/* Cosmic overlay patterns */}
        <div className="absolute inset-0 bg-divine-gradient opacity-60"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMSkiIHN0cm9rZT0icmdiYSgyNDUsIDE1OCwgMTEsIDAuMikiPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iNTAiLz48Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjEwMCIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        {/* Aurora effect */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-resurrection-primary/20 to-divine-accent/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-divine-accent/15 to-resurrection-secondary/15 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-resurrection-primary/10 via-divine-accent/10 to-resurrection-secondary/10 rounded-full blur-3xl animate-spin-slow"></div>
        </div>
        
        <Particles />
        <div className="min-h-screen flex flex-col relative z-10">
          <Header />
          
          {/* Educational Purpose Disclaimer - Only show after agreement */}
          <AnimatePresence>
            {hasAgreed && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mx-auto w-full max-w-6xl px-4 py-3 bg-gradient-to-r from-resurrection-primary/15 to-divine-accent/10 border border-gold-400/40 rounded-xl flex items-center justify-center mt-1 mb-1 backdrop-blur-xl shadow-xl"
                >
                  <BookOpen className="h-4 w-4 text-gold-400 mr-2 flex-shrink-0" />
                  <p className="text-xs text-center text-resurrection-foreground font-medium">
                    <span className="text-gold-400 font-semibold">Educational Tool:</span> This platform is designed for informational, educational, and research purposes only - 
                    to study and understand diverse religious traditions through interactive AI simulations.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mx-auto w-full max-w-6xl px-4 py-2 bg-gradient-to-r from-divine-purple/10 to-resurrection-secondary/10 border border-divine-ethereal/30 rounded-xl flex items-center justify-center mt-1 mb-1 backdrop-blur-xl shadow-lg"
                >
                  <InfoIcon className="h-4 w-4 text-divine-ethereal mr-2" />
                  <p className="text-xs text-center text-resurrection-foreground/90">
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
