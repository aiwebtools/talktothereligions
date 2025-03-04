
import React, { useState } from "react";
import { useGods } from "@/context/GodsContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const UserForm: React.FC = () => {
  const { setStage, userInfo, setUserInfo } = useGods();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!userInfo.name.trim()) {
      setError("Please tell us your name before continuing.");
      setIsSubmitting(false);
      return;
    }
    
    // Simulate a slight delay for animation purposes
    setTimeout(() => {
      setStage("questionFlow");
      setIsSubmitting(false);
    }, 500); // Reduced from 800ms to 500ms for faster mobile response
  };

  return (
    <div className="w-full max-w-md mx-auto px-3 md:px-0">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }} // Slightly faster animation
        className="glass-card rounded-lg md:rounded-xl p-4 md:p-8 animate-fade-in shadow-lg md:shadow-xl dark-glow"
      >
        <h2 className="text-xl md:text-3xl font-serif text-center mb-2 md:mb-3 text-gradient-animate">
          Begin your divine journey
        </h2>
        
        <p className="mb-4 md:mb-6 text-center text-resurrection-foreground/80 text-xs md:text-sm">
          Before establishing a connection with your chosen deity, we need some basic information. 
          This helps create an authentic and meaningful divine experience.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
          <div className="space-y-1.5 md:space-y-2">
            <Label htmlFor="user-name" className="text-resurrection-foreground/80 text-sm md:text-base">
              What is your name?
            </Label>
            <Input
              id="user-name"
              type="text"
              value={userInfo.name}
              onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
              placeholder="Enter your name"
              className="bg-white/5 border-resurrection-primary/20 focus:border-resurrection-primary/50 transition-all duration-300 text-resurrection-foreground h-10 md:h-12"
              autoComplete="off"
              autoCapitalize="words"
            />
            {error && <p className="text-red-500 text-xs md:text-sm mt-1">{error}</p>}
          </div>
          
          <div className="pt-1 md:pt-2 text-center text-resurrection-foreground/70 text-xs md:text-sm">
            <p>Next, you'll select your religion and the deity you wish to connect with.</p>
            <p className="mt-0.5 md:mt-1 italic">We'll gather details about your spiritual beliefs to ensure an authentic divine connection.</p>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-resurrection-primary hover:bg-resurrection-secondary text-white transition-all duration-300 py-4 md:py-6 rounded-md btn-glow"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg 
                  className="animate-spin -ml-1 mr-2 h-4 w-4 md:h-5 md:w-5 text-white" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24"
                >
                  <circle 
                    className="opacity-25" 
                    cx="12" 
                    cy="12" 
                    r="10" 
                    stroke="currentColor" 
                    strokeWidth="4"
                  ></circle>
                  <path 
                    className="opacity-75" 
                    fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span className="text-sm md:text-base">Continuing</span>
              </span>
            ) : (
              <span className="flex items-center">
                <span className="text-sm md:text-base">Continue to Questions</span>
                <Sparkles className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </span>
            )}
          </Button>
        </form>
      </motion.div>
      
      <p className="text-center text-resurrection-foreground/60 mt-3 md:mt-4 text-[10px] md:text-xs px-4">
        Your experience is private and sacred. We handle your spiritual details with the utmost respect.
      </p>
    </div>
  );
};

export default UserForm;
