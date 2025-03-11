
import React from "react";
import { Wand2 } from "lucide-react";

const MobileLogo: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-lg font-serif text-white/90 flex items-center">
        <span className="mr-1">Talk to the</span>
        <Wand2 className="mx-1 h-4 w-4 text-[#9b87f5]" strokeWidth={1.5} />
        <span className="text-[#9b87f5]">Gods GPT</span>
      </h1>
      <div className="text-center mt-0.5">
        <a 
          href="https://www.aiwebtools.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[7px] text-resurrection-foreground/60 hover:text-resurrection-primary transition-colors duration-300"
        >
          Presented by AiWebTools.Ai
        </a>
      </div>
    </div>
  );
};

export default MobileLogo;
