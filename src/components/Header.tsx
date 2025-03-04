
import React from "react";
import { useGods } from "@/context/GodsContext";
import { Eye, Home, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const { stage } = useGods();

  return (
    <header className="w-full py-4 md:py-8 px-3 md:px-6 relative z-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-3 md:mb-5">
          <div className="text-center">
            <h1 
              className={cn(
                "text-2xl md:text-5xl font-serif font-light",
                "tracking-wider text-resurrection-foreground mb-1 md:mb-2",
                "animate-fade-in flex items-center justify-center",
                "bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-violet-400 to-purple-300"
              )}
            >
              <span className="text-gradient-animate mr-1 md:mr-3 text-xl md:text-3xl">🔮</span> 
              <span className="text-white/90 text-sm md:text-2xl">Talk to the</span>
              <Eye className="mx-1 md:mx-3 text-resurrection-accent h-4 w-4 md:h-8 md:w-8 animate-pulse-slow" 
                strokeWidth={1.5} 
                fill="#9b87f5" 
                fillOpacity={0.2} 
              />
              <span className="bg-gradient-to-r from-[#9b87f5] to-[#8B5CF6] bg-clip-text text-transparent font-normal text-sm md:text-2xl">Gods GPT</span>
            </h1>
            
            <a 
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-[8px] md:text-xs text-resurrection-foreground/60",
                "hover:text-resurrection-primary transition-colors duration-300",
                "animate-fade-in inline-block tracking-wide"
              )}
            >
              Presented by AiWebTools.Ai
            </a>
            
            <p className="text-[10px] md:text-[12px] text-resurrection-foreground/70 tracking-wide leading-tight mt-1 md:mt-2">
              Connect with the divine through an immersive spiritual experience with the deity of your choice.
            </p>
          </div>
          
          <div className="flex items-center gap-2 md:gap-3">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className={cn(
                "text-resurrection-foreground rounded-full",
                "hover:text-yellow-400",
                "hover:bg-yellow-400/10",
                "border border-yellow-400/20",
                "h-8 w-8 md:h-10 md:w-10"
              )}
            >
              <a href="#disclaimer">
                <AlertTriangle className="h-3 w-3 md:h-5 md:w-5 text-yellow-400" />
                <span className="sr-only">Legal Disclaimer</span>
              </a>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              asChild
              className={cn(
                "text-resurrection-foreground rounded-full",
                "hover:text-[#9b87f5]",
                "hover:bg-[#9b87f5]/10",
                "border border-[#9b87f5]/20",
                "h-8 w-8 md:h-10 md:w-10"
              )}
            >
              <Link to="/">
                <Home className="h-3 w-3 md:h-5 md:w-5" />
                <span className="sr-only">Home</span>
              </Link>
            </Button>
          </div>
        </div>
        
        {stage === "welcome" && (
          <p className="text-resurrection-foreground/70 animate-fade-in max-w-lg mx-auto text-[8px] md:text-xs px-2 tracking-wide leading-relaxed hidden md:block">
            Connect with the divine through an immersive spiritual experience with the deity of your choice.
          </p>
        )}
      </div>
    </header>
  );
};

export default Header;
