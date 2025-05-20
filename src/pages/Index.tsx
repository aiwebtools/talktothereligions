
import React, { useEffect, useState } from "react";
import { GodsProvider } from "@/context/GodsContext";
import Header from "@/components/Header";
import MainContent from "@/components/layout/MainContent";
import Particles from "@/components/Particles";
import { motion } from "framer-motion";
import { InfoIcon } from "lucide-react";
import AgreementPopup from "@/components/AgreementPopup";
import { useToast } from "@/hooks/use-toast";
import ElevenLabsWidget from "@/components/ElevenLabsWidget";

const Index: React.FC = () => {
  const [hasAgreed, setHasAgreed] = useState(false);
  const { toast } = useToast();
  
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
    toast({
      title: "Welcome to the Religious Studies Experience",
      description: "Thank you for acknowledging our research disclosure.",
      duration: 5000,
    });
  };

  return (
    <GodsProvider>
      <div className="bg-resurrection-background min-h-screen relative overflow-hidden bg-[radial-gradient(circle_at_center,_rgba(155,135,245,0.15)_0%,_rgba(15,23,42,1)_70%)]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMSkiIHN0cm9rZT0icmdiYSgxNTUsMTM1LDI0NSwwLjEpIj48Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjUwIi8+PGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSIxMDAiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <Particles />
        <div className="min-h-screen flex flex-col relative z-10">
          <Header />
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto w-full max-w-6xl px-4 py-2 bg-resurrection-primary/5 border border-resurrection-primary/20 rounded-lg flex items-center justify-center mt-1 mb-1"
          >
            <InfoIcon className="h-4 w-4 text-resurrection-accent mr-2" />
            <p className="text-xs text-center text-resurrection-foreground/80">
              This tool is provided for educational, research, and informational purposes only. 
              All responses are AI-generated interpretations of religious concepts designed to aid in religious studies and understanding diverse traditions.
            </p>
          </motion.div>
          <MainContent />
        </div>
      </div>
      
      {/* Display the agreement popup */}
      <AgreementPopup onAgree={handleAgree} />
      
      {/* Add the ElevenLabs Conversational AI Widget */}
      <ElevenLabsWidget />
    </GodsProvider>
  );
};

export default Index;
