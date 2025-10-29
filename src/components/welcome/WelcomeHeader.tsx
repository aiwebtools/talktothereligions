import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Sparkles, Zap, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const WelcomeHeader: React.FC = () => {
  return (
    <>
      {/* New prominent CTA button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <a 
          href="https://chatgpt.com/g/g-6901478f2bf88191b49298a508bbd486-religious-studies-gpt"
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block w-full max-w-full"
        >
          <Button 
            className={cn(
              "bg-gradient-to-r from-resurrection-primary via-divine-purple to-resurrection-accent text-white",
              "text-base sm:text-lg md:text-2xl font-serif py-4 sm:py-5 md:py-6 px-4 sm:px-6 md:px-8 rounded-xl w-full sm:w-auto",
              "shadow-lg shadow-resurrection-primary/25 hover:shadow-resurrection-primary/40",
              "border border-white/10 backdrop-blur-sm relative overflow-hidden",
              "transform transition-all duration-500 hover:scale-105 active:scale-95",
              "animate-pulse-slow"
            )}
          >
            <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            <Zap className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 mr-1 sm:mr-2 text-yellow-200 animate-pulse flex-shrink-0" />
            <span className="whitespace-normal sm:whitespace-nowrap">EXPLORE RELIGIOUS PERSPECTIVES</span>
            <Zap className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 ml-1 sm:ml-2 text-yellow-200 animate-pulse flex-shrink-0" />
          </Button>
        </a>
      </motion.div>

      {/* Divine Quote Tagline */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-8"
      >
        <div className="bg-gradient-to-r from-resurrection-primary/20 via-divine-accent/15 to-resurrection-secondary/20 border-2 border-gold-400/50 rounded-xl p-6 relative overflow-hidden backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-divine-sweep"></div>
          <div className="flex items-center justify-center gap-3 mb-3">
            <Quote className="text-gold-400 h-6 w-6 animate-pulse-slow" />
            <h3 className="text-xl md:text-2xl font-serif text-gold-400 font-bold text-gradient-animate">
              Divine Reminder
            </h3>
            <Quote className="text-gold-400 h-6 w-6 animate-pulse-slow scale-x-[-1]" />
          </div>
          <blockquote className="text-2xl md:text-3xl font-serif text-resurrection-foreground text-center italic leading-relaxed font-medium">
            "The Kingdom of God is Within You to Remember"
          </blockquote>
          <div className="flex justify-center mt-4">
            <Sparkles className="h-5 w-5 text-resurrection-accent animate-pulse-slow" />
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-xl sm:text-2xl md:text-4xl font-serif text-resurrection-foreground mb-6 md:mb-8 leading-relaxed px-2">
          <span className="bg-gradient-to-r from-resurrection-primary via-divine-purple to-resurrection-accent bg-clip-text text-transparent">
            Study. Research. Understand.
            <br />Explore Religious Traditions.
          </span>
        </h2>
      </motion.div>
      
      <div className="space-y-4 md:space-y-5 text-resurrection-foreground/80 mb-8 md:mb-10 max-w-3xl mx-auto px-3">
        <motion.p 
          className="text-lg text-resurrection-accent flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Sparkles className="h-5 w-5 mr-2 animate-pulse-slow" />
          An Educational Tool for Exploring Religious Perspectives
          <Sparkles className="h-5 w-5 ml-2 animate-pulse-slow" />
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-base leading-relaxed"
        >
          Talk to the Gods GPT is an advanced AI educational tool designed to help you 
          study and understand theological perspectives from any religion or spiritual tradition. 
          Through interactive simulations, explore religious teachings, moral frameworks,
          and philosophical insights from diverse belief systems for research and learning.
        </motion.p>
        
        <motion.p 
          className="text-xl text-resurrection-primary font-medium italic mt-4 divine-border p-4 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          ✨ Study theological concepts. Explore religious traditions. Understand diverse perspectives. ✨
        </motion.p>
      </div>
      
      <motion.div 
        className="mb-8 p-3 sm:p-4 border border-yellow-400/30 rounded-lg bg-yellow-50/10 text-sm text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-resurrection-foreground mb-1">Educational Disclaimer:</p>
            <p className="text-resurrection-foreground/80">Talk to the Gods GPT is an educational tool for studying religious traditions and theological concepts. It offers simulated perspectives based on religious texts and scholarship. Please read our <a href="#disclaimer" className="text-resurrection-primary hover:text-resurrection-accent underline">full disclaimer</a> before proceeding.</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default WelcomeHeader;
