
import React, { useState, useEffect } from "react";
import { useGods } from "@/context/GodsContext";
import { motion, AnimatePresence } from "framer-motion";
import Welcome from "@/components/Welcome";
import UserForm from "@/components/UserForm";
import QuestionFlow from "@/components/QuestionFlow";
import LoadingScreen from "@/components/LoadingScreen";
import LetterFromHeaven from "@/components/LetterFromHeaven";
import HomeFAQ from "@/components/HomeFAQ";
import FAQ from "@/components/FAQ";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import Footer from "./Footer";

const MainContent: React.FC = () => {
  const { stage } = useGods();
  const [showFAQ, setShowFAQ] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  // Check if URL hash is #faq or #disclaimer and show corresponding component
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#faq') {
        setShowFAQ(true);
        setShowDisclaimer(false);
      } else if (window.location.hash === '#disclaimer') {
        setShowFAQ(false);
        setShowDisclaimer(true);
      } else {
        setShowFAQ(false);
        setShowDisclaimer(false);
      }
    };

    // Check on initial load
    handleHashChange();

    // Add listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
  // Add a divine glow element
  const DivineLightEffect = () => (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-resurrection-primary/5 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-resurrection-accent/5 rounded-full blur-[80px] animate-pulse-slow animation-delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-resurrection-secondary/5 rounded-full blur-[90px] animate-pulse-slow animation-delay-2000"></div>
    </div>
  );
  
  return (
    <div className="min-h-screen flex flex-col relative">
      <DivineLightEffect />
      
      <main className="flex-1 container mx-auto px-4 py-6 md:py-10 relative z-10">
        {showFAQ ? (
          <FAQ onClose={() => {
            window.history.pushState(null, '', window.location.pathname);
            setShowFAQ(false);
          }} />
        ) : showDisclaimer ? (
          <LegalDisclaimer onClose={() => {
            window.history.pushState(null, '', window.location.pathname);
            setShowDisclaimer(false);
          }} />
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={stage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full flex items-center justify-center py-4 md:py-8"
            >
              {stage === "welcome" && <Welcome />}
              {stage === "userInfo" && <UserForm />}
              {stage === "questionFlow" && <QuestionFlow />}
              {stage === "loading" && <LoadingScreen />}
              {stage === "letter" && <LetterFromHeaven />}
            </motion.div>
          </AnimatePresence>
        )}
      </main>
      
      {/* Always show HomeFAQ except when showing full FAQ or disclaimer */}
      {!showFAQ && !showDisclaimer && <HomeFAQ />}
      
      {/* Always show Footer */}
      <Footer />
    </div>
  );
};

export default MainContent;
