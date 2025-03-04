
import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <>
      <h3 className="text-xl font-serif text-resurrection-foreground mt-8 mb-6 flex items-center justify-center">
        <span className="text-resurrection-accent animate-pulse-slow">🔮</span>
        <span className="mx-2">How Talk to the Gods GPT Works</span>
        <span className="text-resurrection-accent animate-pulse-slow">🔮</span>
      </h3>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="p-4 border border-resurrection-primary/20 rounded-lg interactive-card bg-muted/40">
          <h4 className="font-medium text-resurrection-primary mb-2">1️⃣ Choose Your Deity</h4>
          <p className="text-sm">
            Begin by sharing details about your religion, spiritual beliefs, 
            and the specific deity you wish to connect with.
          </p>
        </div>
        
        <div className="p-4 border border-resurrection-primary/20 rounded-lg interactive-card bg-muted/40">
          <h4 className="font-medium text-resurrection-primary mb-2">2️⃣ Divine Connection</h4>
          <p className="text-sm">
            Experience a spiritual connection as your chosen deity's wisdom and 
            guidance manifests through authentic conversation.
          </p>
        </div>
        
        <div className="p-4 border border-resurrection-primary/20 rounded-lg interactive-card bg-muted/40">
          <h4 className="font-medium text-resurrection-secondary mb-2">3️⃣ Receive Sacred Wisdom</h4>
          <p className="text-sm">
            Engage in meaningful dialogue with your deity, receiving divine guidance 
            and answers to your spiritual questions.
          </p>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
