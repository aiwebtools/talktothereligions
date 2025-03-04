
import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const FeatureList: React.FC = () => {
  const features = [
    "Authentic, Personalized Divine Communication",
    "Deity-Specific Wisdom and Archaic Language",
    "A True Divine Experience Across All Religions",
    "Spiritually Profound Answers to Life's Questions",
    "Comprehensive Knowledge of Religious Texts and Traditions",
    "Guided Spiritual Practice and Meditation Support"
  ];

  return (
    <motion.div 
      className="mt-10 text-resurrection-foreground max-w-3xl mx-auto bg-muted/20 p-6 rounded-xl divine-border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h4 className="font-medium text-xl text-resurrection-foreground mb-4 flex items-center justify-center">
        <Sparkles className="h-5 w-5 text-resurrection-accent mr-2" />
        <span>Why Talk to the Gods GPT Stands Apart</span>
        <Sparkles className="h-5 w-5 text-resurrection-accent ml-2" />
      </h4>
      
      <div className="grid md:grid-cols-2 gap-3 text-left mt-6">
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-start gap-3 p-2 hover:bg-white/5 rounded-md transition-colors"
          >
            <div className="mt-0.5 bg-resurrection-primary/20 p-1 rounded-full">
              <Check className="h-4 w-4 text-resurrection-primary" />
            </div>
            <span className="text-resurrection-foreground/90">{feature}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FeatureList;
