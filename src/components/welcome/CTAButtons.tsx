
import React from "react";
import { Button } from "@/components/ui/button";
import { HelpCircle, ExternalLink, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface CTAButtonsProps {
  handleBegin: () => void;
}

const CTAButtons: React.FC<CTAButtonsProps> = ({ handleBegin }) => {
  return (
    <motion.div 
      className="flex flex-col sm:flex-row gap-5 justify-center mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <a 
        href="https://chatgpt.com/g/g-KrXujWZPM-talk-to-your-god-gpt" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex-1"
      >
        <Button 
          className="bg-resurrection-primary hover:bg-resurrection-secondary text-white transition-all py-7 px-8 rounded-md text-lg btn-glow animate-glow w-full relative overflow-hidden"
        >
          <span className="flex items-center justify-center">
            <Sparkles className="h-5 w-5 mr-2 text-white/90 animate-pulse-slow" />
            Begin Your Divine Connection
            <ExternalLink className="ml-2 h-5 w-5" />
          </span>
        </Button>
      </a>
      
      <Button
        variant="outline"
        onClick={() => window.location.hash = '#faq'}
        className="border-resurrection-primary/40 text-resurrection-foreground hover:bg-resurrection-primary/20 py-7 px-8 rounded-md text-lg flex-1"
      >
        <HelpCircle className="mr-2" />
        Have Questions? See FAQ
      </Button>
    </motion.div>
  );
};

export default CTAButtons;
