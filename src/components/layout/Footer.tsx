
import React from "react";
import { Mail, Phone, Eye, ExternalLink, FileText, HelpCircle, Server } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Footer: React.FC = () => {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = "mailto:support@ai-webtools.com";
  };

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = "tel:+14758008096";
  };

  return (
    <footer className="w-full py-5 px-3 text-resurrection-foreground/50 text-xs relative z-10">
      <div className="container mx-auto max-w-lg md:max-w-full">
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <h2 className="text-lg md:text-xl font-serif font-light tracking-wider text-resurrection-foreground flex items-center">
                <span className="text-gradient-animate mr-1 md:mr-2 text-base md:text-lg">🔮</span> 
                <span className="text-white/90 text-sm md:text-base">Talk to the Gods</span>
                <Eye 
                  className="mx-1 md:mx-2 text-resurrection-accent h-4 w-4 md:h-5 md:w-5 animate-pulse-slow" 
                  strokeWidth={1.5} 
                  fill="#9b87f5" 
                  fillOpacity={0.2}
                />
                <span className="bg-gradient-to-r from-[#9b87f5] to-[#8B5CF6] bg-clip-text text-transparent font-normal text-sm md:text-base">GPT</span>
              </h2>
            </div>
            <div className="flex flex-col items-center md:items-start gap-1 mt-1">
              <a 
                href="https://www.aiwebtools.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[8px] md:text-[10px] text-resurrection-foreground/60 hover:text-resurrection-primary transition-colors duration-300 inline-block tracking-wide"
              >
                Presented by AiWebTools.Ai
              </a>
              <p className="text-[10px] md:text-[12px] text-resurrection-foreground/70 tracking-wide leading-relaxed">
                Connect with the divine through an immersive spiritual experience with the deity of your choice.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-y-2 gap-x-4 md:gap-y-3 md:gap-x-6 mb-4 md:mb-0 text-[10px] md:text-xs">
            <a 
              href="#faq" 
              className="hover:text-resurrection-primary transition-colors duration-300 flex items-center group"
            >
              <HelpCircle size={10} className="mr-1 md:mr-1.5 group-hover:animate-pulse-slow" />
              <span className="group-hover:underline">FAQ</span>
            </a>
            <a 
              href="#disclaimer" 
              className="hover:text-resurrection-primary transition-colors duration-300 flex items-center group"
            >
              <FileText size={10} className="mr-1 md:mr-1.5 group-hover:animate-pulse-slow" />
              <span className="group-hover:underline">Full Disclaimer</span>
            </a>
            <a 
              href="https://openai.com/policies/privacy-policy/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-resurrection-primary transition-colors duration-300 group flex items-center"
            >
              <ExternalLink size={10} className="mr-1 md:mr-1.5 group-hover:rotate-45 transition-transform duration-300" />
              <span className="group-hover:underline">Privacy Policy</span>
            </a>
            <a 
              href="https://aiwebtools.lovable.app/disclaimers" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-resurrection-primary transition-colors duration-300 group flex items-center"
            >
              <ExternalLink size={10} className="mr-1 md:mr-1.5 group-hover:rotate-45 transition-transform duration-300" />
              <span className="group-hover:underline">Terms of Service</span>
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-5">
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-resurrection-primary transition-colors duration-300 text-center md:text-left mb-3 md:mb-0 text-[9px] md:text-xs"
          >
            © 2025 AI WEB TOOLS LLC. All rights reserved.
          </a>
          
          <div>
            <a 
              href="https://chatgpt.com/g/g-KrXujWZPM-talk-to-your-god-gpt" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                variant="outline" 
                size="sm" 
                className={cn(
                  "bg-[#9b87f5]/10 border-[#9b87f5]/30 hover:bg-[#9b87f5]/20",
                  "text-resurrection-foreground rounded-full",
                  "text-[9px] md:text-xs py-1 h-7 md:h-8"
                )}
              >
                <Server className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                BEGIN DIVINE CONNECTION
              </Button>
            </a>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-2 md:gap-3 text-[9px] md:text-xs">
          <a 
            href="mailto:support@ai-webtools.com" 
            onClick={handleEmailClick}
            className="hover:text-resurrection-primary transition-colors duration-300 flex items-center group"
          >
            <Mail size={10} className="mr-1 md:mr-1.5 group-hover:translate-y-[-2px] transition-transform duration-300" />
            <span className="group-hover:underline">support@ai-webtools.com</span>
          </a> 
          <a 
            href="tel:+14758008096" 
            onClick={handlePhoneClick}
            className="hover:text-resurrection-primary transition-colors duration-300 flex items-center group"
          >
            <Phone size={10} className="mr-1 md:mr-1.5 group-hover:rotate-12 transition-transform duration-300" />
            <span className="group-hover:underline">(475) 800-8096</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
