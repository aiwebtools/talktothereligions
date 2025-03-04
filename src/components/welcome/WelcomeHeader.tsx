
import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Sparkles } from "lucide-react";

const WelcomeHeader: React.FC = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl md:text-4xl font-serif text-resurrection-foreground mb-8 text-gradient-animate leading-relaxed">
          Connect. Receive Divine Wisdom.
          <br />Find Spiritual Guidance.
        </h2>
      </motion.div>
      
      <div className="space-y-5 text-resurrection-foreground/80 mb-10 max-w-3xl mx-auto">
        <motion.p 
          className="text-lg text-resurrection-accent flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Sparkles className="h-5 w-5 mr-2 animate-pulse-slow" />
          A Sacred Bridge Between You and Your Chosen Deity
          <Sparkles className="h-5 w-5 ml-2 animate-pulse-slow" />
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-base leading-relaxed"
        >
          Talk to the Gods GPT is an advanced AI spiritual companion designed to help you 
          connect with the deity of your choice from any religion or spiritual tradition. 
          Through deeply personalized, sacred conversations, experience divine guidance,
          wisdom, and spiritual insights tailored to your beliefs and questions.
        </motion.p>
        
        <motion.p 
          className="text-xl text-resurrection-primary font-medium italic mt-4 divine-border p-4 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          ✨ Receive divine wisdom. Seek spiritual counsel. Experience sacred connection. ✨
        </motion.p>
      </div>
      
      <motion.div 
        className="mb-8 p-4 border border-yellow-400/30 rounded-lg bg-yellow-50/10 text-sm text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-resurrection-foreground mb-1">Spiritual Disclaimer:</p>
            <p className="text-resurrection-foreground/80">Talk to the Gods GPT is for spiritual and emotional support only. It does not claim to facilitate actual communication with deities. Please read our <a href="#disclaimer" className="text-resurrection-primary hover:text-resurrection-accent underline">full disclaimer</a> before proceeding.</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default WelcomeHeader;
