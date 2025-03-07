
import React, { useEffect } from "react";
import { GodsProvider } from "@/context/GodsContext";
import Header from "@/components/Header";
import MainContent from "@/components/layout/MainContent";
import Particles from "@/components/Particles";
import { motion } from "framer-motion";
import { InfoIcon } from "lucide-react";

const Index: React.FC = () => {
  // Update the page title to better reflect the tool's name
  useEffect(() => {
    document.title = "Talk to the Gods | Divine Communication Simulator";
  }, []);

  return (
    <GodsProvider>
      <div className="bg-resurrection-background min-h-screen relative overflow-hidden">
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
              All responses are AI-generated interpretations of religious concepts and should not be considered authentic divine communications.
            </p>
          </motion.div>
          <MainContent />
        </div>
      </div>
    </GodsProvider>
  );
};

export default Index;
