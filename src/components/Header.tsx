
import React, { useState } from "react";
import { useGods } from "@/context/GodsContext";
import { Eye, Home, AlertTriangle, HelpCircle, Menu, Sparkles, ExternalLink, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const Header: React.FC = () => {
  const { stage } = useGods();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleHomeClick = () => {
    navigate("/");
    window.history.pushState(null, '', "/");
  };

  return (
    <header className="w-full py-3 sm:py-4 md:py-8 px-2 sm:px-3 md:px-6 relative z-10">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 mb-2 sm:mb-3 md:mb-5">
          <div className="text-center w-full sm:w-auto relative">
            <div className="hidden sm:flex items-center justify-center sm:justify-start flex-col">
              <div className="flex items-center">
                <h1 
                  className={cn(
                    "text-xl sm:text-2xl md:text-5xl font-serif font-light",
                    "tracking-wider text-resurrection-foreground mb-0",
                    "animate-fade-in flex items-center justify-center",
                    "bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-violet-400 to-purple-300"
                  )}
                >
                  <span className="text-gradient-animate mr-1 md:mr-3 text-xl md:text-3xl">🔮</span> 
                  <span className="text-white/90 text-xs sm:text-sm md:text-2xl">Talk to the</span>
                  <Eye className="mx-1 md:mx-3 text-resurrection-accent h-3 w-3 sm:h-4 sm:w-4 md:h-8 md:w-8 animate-pulse-slow" 
                    strokeWidth={1.5} 
                    fill="#9b87f5" 
                    fillOpacity={0.2} 
                  />
                  <Wand2 className="mr-1 md:mr-2 h-3 w-3 sm:h-4 sm:w-4 md:h-7 md:w-7 text-[#9b87f5] animate-float" 
                    strokeWidth={1.5}
                  />
                  <span className="bg-gradient-to-r from-[#9b87f5] to-[#8B5CF6] bg-clip-text text-transparent font-normal text-xs sm:text-sm md:text-2xl">Gods GPT</span>
                </h1>
              </div>
              
              <a 
                href="https://www.aiwebtools.ai"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "text-[8px] sm:text-[10px] md:text-xs text-resurrection-foreground/60",
                  "hover:text-resurrection-primary transition-colors duration-300",
                  "animate-fade-in inline-block tracking-wide mt-1 sm:mt-0"
                )}
              >
                Presented by AiWebTools.Ai
              </a>
            </div>

            <div className="flex sm:hidden items-center justify-between w-full px-2">
              <div className="flex flex-col items-start">
                <h1 className="text-lg font-serif text-white/90 flex items-center">
                  <span>Talk to the</span>
                  <Wand2 className="mx-1 h-4 w-4 text-[#9b87f5]" strokeWidth={1.5} />
                  <span className="text-[#9b87f5]">Gods GPT</span>
                </h1>
                <a 
                  href="https://www.aiwebtools.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[8px] text-resurrection-foreground/60 hover:text-resurrection-primary transition-colors duration-300"
                >
                  Presented by AiWebTools.Ai
                </a>
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="p-1"
                  >
                    <Menu className="h-6 w-6 text-white/90" />
                    <span className="sr-only">Menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-56 bg-resurrection-background/95 backdrop-blur-sm border border-resurrection-accent/20"
                  align="end"
                >
                  <DropdownMenuItem asChild className="bg-gradient-to-r from-resurrection-primary to-resurrection-accent hover:from-resurrection-accent hover:to-resurrection-primary text-white font-medium">
                    <a 
                      href="https://chat.openai.com/g/g-4rHRo0Ppq-talk-to-the-gods-gpt" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full"
                    >
                      <span className="flex items-center">
                        <Sparkles className="mr-2 h-4 w-4" />
                        <span>Use Talk to the Gods GPT</span>
                      </span>
                      <ExternalLink className="h-3 w-3 ml-2" />
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="text-blue-400 hover:text-blue-300">
                    <a 
                      href="https://www.aiwebtools.ai" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between w-full"
                    >
                      <span className="flex items-center">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        <span>Access more AI tools</span>
                      </span>
                      <ExternalLink className="h-3 w-3 ml-2" />
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-resurrection-accent/20" />
                  <DropdownMenuItem onClick={handleHomeClick}>
                    <Home className="mr-2 h-4 w-4" />
                    <span>Home</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="#faq" className="flex items-center">
                      <HelpCircle className="mr-2 h-4 w-4" />
                      <span>FAQ</span>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="#disclaimer" className="flex items-center">
                      <AlertTriangle className="mr-2 h-4 w-4" />
                      <span>Legal Disclaimer</span>
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <p className="text-[8px] sm:text-[10px] md:text-[12px] text-resurrection-foreground/70 tracking-wide leading-tight mt-0 sm:mt-1 md:mt-2 hidden sm:block">
              Connect with the divine through an immersive spiritual experience with the deity of your choice.
            </p>
          </div>
          
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
                href="https://chat.openai.com/g/g-4rHRo0Ppq-talk-to-the-gods-gpt"
                target="_blank"
                rel="noopener noreferrer"
                title="Use Talk to the Gods GPT"
                className="flex items-center gap-2"
              >
                <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-white/90" />
                <span className="text-xs md:text-sm text-white">USE TALK TO THE GODS GPT NOW</span>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
