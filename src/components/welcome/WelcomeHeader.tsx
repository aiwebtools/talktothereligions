
import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const WelcomeHeader: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl md:text-4xl font-serif text-resurrection-foreground mb-6 text-gradient-animate">
        Connect. Receive Divine Wisdom. Find Spiritual Guidance.
      </h2>
      
      <div className="space-y-4 text-resurrection-foreground/80 mb-8 max-w-3xl mx-auto">
        <p className="text-lg text-resurrection-accent">
          A Sacred Bridge Between You and Your Chosen Deity
        </p>
        <p>
          Talk to the Gods GPT is an advanced AI spiritual companion designed to help you 
          connect with the deity of your choice from any religion or spiritual tradition. 
          Through deeply personalized, sacred conversations, experience divine guidance,
          wisdom, and spiritual insights tailored to your beliefs and questions.
        </p>
        <p className="text-xl text-resurrection-primary font-medium italic">
          ✨ Receive divine wisdom. Seek spiritual counsel. Experience sacred connection. ✨
        </p>
      </div>
      
      <div className="mb-6 p-3 border border-yellow-400/30 rounded-lg bg-yellow-50/10 text-sm text-left">
        <div className="flex items-start gap-2">
          <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-resurrection-foreground">Spiritual Disclaimer:</p>
            <p className="text-resurrection-foreground/80">Talk to the Gods GPT is for spiritual and emotional support only. It does not claim to facilitate actual communication with deities. Please read our <a href="#disclaimer" className="text-resurrection-primary hover:text-resurrection-accent underline">full disclaimer</a> before proceeding.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeHeader;
