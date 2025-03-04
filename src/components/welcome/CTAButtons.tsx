
import React from "react";
import { Button } from "@/components/ui/button";
import { HelpCircle, Sparkles, ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Button 
            className={cn(
              "bg-gradient-to-r from-resurrection-primary to-divine-purple text-white w-full",
              "transition-all py-6 sm:py-7 px-6 sm:px-8 rounded-xl shadow-lg",
              "hover:shadow-resurrection-primary/40 hover:from-divine-purple hover:to-resurrection-secondary",
              "border border-white/10 backdrop-blur-sm group relative overflow-hidden"
            )}
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="flex items-center justify-center relative z-10">
              <Sparkles className="h-5 w-5 mr-2 text-white/90 group-hover:text-white animate-pulse-slow" />
              <span className="font-serif tracking-wide text-lg relative">
                Begin Your Divine Connection
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white/80 group-hover:w-full transition-all duration-300"></span>
              </span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </motion.div>
      </a>
      
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="flex-1"
      >
        <Button
          variant="outline"
          onClick={() => window.location.hash = '#faq'}
          className={cn(
            "border-resurrection-primary/30 text-resurrection-foreground w-full",
            "bg-resurrection-primary/5 hover:bg-resurrection-primary/15",
            "py-6 sm:py-7 px-6 sm:px-8 rounded-xl shadow-md",
            "backdrop-blur-sm hover:shadow-resurrection-primary/20",
            "group transition-all duration-300"
          )}
        >
          <HelpCircle className="mr-2 group-hover:text-resurrection-primary transition-colors duration-300 group-hover:rotate-12" />
          <span className="font-serif tracking-wide text-lg relative">
            Have Questions? See FAQ
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-resurrection-primary/80 group-hover:w-full transition-all duration-300"></span>
          </span>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default CTAButtons;
