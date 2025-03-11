
import React from "react";
import { Eye, Wand2 } from "lucide-react";
import { cn } from "@/lib/utils";

const Logo: React.FC = () => {
  return (
    <div className="hidden sm:flex flex-col items-center justify-center sm:justify-start">
      <h1 
        className={cn(
          "text-xl sm:text-2xl md:text-5xl font-serif font-light",
          "tracking-wider text-resurrection-foreground",
          "animate-fade-in flex items-center",
          "bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-violet-400 to-purple-300"
        )}
      >
        <span className="text-gradient-animate mr-2 md:mr-3 text-xl md:text-3xl">🔮</span> 
        <span className="text-white/90 text-xs sm:text-sm md:text-2xl mr-2">Talk to the</span>
        <Eye 
          className="mx-2 md:mx-3 text-resurrection-accent h-3 w-3 sm:h-4 sm:w-4 md:h-8 md:w-8 animate-pulse-slow" 
          strokeWidth={1.5} 
          fill="#9b87f5" 
          fillOpacity={0.2} 
        />
        <Wand2 
          className="mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-7 md:w-7 text-[#9b87f5] animate-float" 
          strokeWidth={1.5}
        />
        <span className="bg-gradient-to-r from-[#9b87f5] to-[#8B5CF6] bg-clip-text text-transparent font-normal text-xs sm:text-sm md:text-2xl">Gods GPT</span>
      </h1>
      
      <div className="text-center mt-1">
        <a 
          href="https://www.aiwebtools.ai"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "text-[8px] sm:text-[10px] md:text-xs text-resurrection-foreground/60",
            "hover:text-resurrection-primary transition-colors duration-300",
            "animate-fade-in tracking-wide"
          )}
        >
          Presented by AiWebTools.Ai
        </a>
      </div>
    </div>
  );
};

export default Logo;
