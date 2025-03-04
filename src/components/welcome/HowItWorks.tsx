
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: "1️⃣",
      title: "Choose Your Deity",
      description: "Begin by sharing details about your religion, spiritual beliefs, and the specific deity you wish to connect with."
    },
    {
      icon: "2️⃣",
      title: "Divine Connection",
      description: "Experience a spiritual connection as your chosen deity's wisdom and guidance manifests through authentic conversation."
    },
    {
      icon: "3️⃣",
      title: "Receive Sacred Wisdom",
      description: "Engage in meaningful dialogue with your deity, receiving divine guidance and answers to your spiritual questions."
    }
  ];

  return (
    <>
      <h3 className="text-xl font-serif text-resurrection-foreground mt-10 mb-8 flex items-center justify-center">
        <span className="text-resurrection-accent animate-pulse-slow">🔮</span>
        <span className="mx-3">How Talk to the Gods GPT Works</span>
        <span className="text-resurrection-accent animate-pulse-slow">🔮</span>
      </h3>
      
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-5 border border-resurrection-primary/20 rounded-lg interactive-card bg-muted/40 divine-border flex flex-col items-center"
          >
            <div className="w-12 h-12 rounded-full bg-resurrection-primary/20 flex items-center justify-center mb-3">
              <span className="text-xl">{step.icon}</span>
            </div>
            <h4 className="font-medium text-resurrection-primary text-lg mb-3">{step.title}</h4>
            <p className="text-sm text-center">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default HowItWorks;
