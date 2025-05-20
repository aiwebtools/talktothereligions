
import React from "react";
import { Sparkles, ExternalLink, HelpCircle, AlertTriangle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavigationButtonsProps {
  handleHomeClick: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({ handleHomeClick }) => {
  return (
    <div className="hidden sm:flex items-center gap-2 md:gap-3 mt-1 sm:mt-0">
      <Button
        variant="divine"
        size="sm"
        asChild
        className={cn(
          "text-white rounded-md",
          "h-8 px-3 sm:h-9 md:h-10",
          "border border-white/10"
        )}
      >
        <a 
          href="https://chatgpt.com/g/g-KrXujWZPM-talk-to-your-god-gpt"
          target="_blank"
          rel="noopener noreferrer"
          title="Access Religious Studies Tool"
          className="flex items-center gap-2"
        >
          <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-white/90" />
          <span className="text-xs md:text-sm text-white">EXPLORE RELIGIOUS PERSPECTIVES</span>
        </a>
      </Button>
      
      <Button
        variant="ghost"
        size="sm"
        asChild
        className={cn(
          "text-resurrection-foreground rounded-md",
          "hover:text-blue-400",
          "hover:bg-blue-400/10",
          "border border-blue-400/20",
          "h-8 px-3 sm:h-9 md:h-10"
        )}
      >
        <a 
          href="https://www.aiwebtools.ai"
          target="_blank"
          rel="noopener noreferrer"
          title="Access more AI tools"
          className="flex items-center gap-2"
        >
          <ExternalLink className="h-3 w-3 md:h-4 md:w-4 text-blue-400" />
          <span className="text-xs md:text-sm text-blue-400">More AI Tools</span>
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
          "h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10"
        )}
      >
        <a href="#faq">
          <HelpCircle className="h-3 w-3 md:h-5 md:w-5 text-[#9b87f5]" />
          <span className="sr-only">FAQ</span>
        </a>
      </Button>

      <Button
        variant="ghost"
        size="sm"
        asChild
        className={cn(
          "text-resurrection-foreground rounded-full",
          "hover:text-yellow-400",
          "hover:bg-yellow-400/10",
          "border border-yellow-400/20",
          "h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10"
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
        onClick={handleHomeClick}
        className={cn(
          "text-resurrection-foreground rounded-full",
          "hover:text-[#9b87f5]",
          "hover:bg-[#9b87f5]/10",
          "border border-[#9b87f5]/20",
          "h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10"
        )}
      >
        <Home className="h-3 w-3 md:h-5 md:w-5" />
        <span className="sr-only">Home</span>
      </Button>
    </div>
  );
};

export default NavigationButtons;
