
import React from "react";
import { Mail, Phone, ExternalLink, HelpCircle, FileText, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const WelcomeFooter: React.FC = () => {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = "mailto:support@ai-webtools.com";
  };

  const handlePhoneClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = "tel:+14758008096";
  };

  return (
    <div className="mt-8 pt-6 border-t border-white/10 text-center">
      <div className="mb-6">
        <div className="flex items-center justify-center mb-3">
          <h3 className="text-lg font-serif font-light tracking-wide text-resurrection-foreground flex items-center">
            <span className="text-gradient-animate mr-1">🔮</span> 
            Talk to the Gods
            <Eye className="mx-1 text-resurrection-accent h-4 w-4 animate-pulse-slow" />
            <span className="text-resurrection-primary font-normal">GPT</span>
          </h3>
        </div>
        <p className="text-[10px] text-resurrection-foreground/50 mb-4">
          Connect with the divine through an immersive spiritual experience with the deity of your choice.
        </p>
        <p className="mb-3 text-resurrection-foreground/70 text-sm">
          Contact Us
        </p>
        <div className="flex flex-col gap-3">
          <a 
            href="mailto:support@ai-webtools.com" 
            onClick={handleEmailClick}
            className="flex items-center justify-center gap-1.5 text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300 group text-sm"
          >
            <Mail size={14} className="group-hover:translate-y-[-2px] transition-transform duration-300" />
            <span className="group-hover:underline">support@ai-webtools.com</span>
          </a>
          <a 
            href="tel:+14758008096" 
            onClick={handlePhoneClick}
            className="flex items-center justify-center gap-1.5 text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300 group text-sm"
          >
            <Phone size={14} className="group-hover:rotate-12 transition-transform duration-300" />
            <span className="group-hover:underline">(475) 800-8096</span>
          </a>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-y-3 justify-center mb-6 text-xs sm:text-sm">
        <a 
          href="#disclaimer"
          className="flex items-center justify-center gap-1.5 px-2 text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300 group"
        >
          <FileText size={12} className="group-hover:animate-pulse-slow" />
          <span className="group-hover:underline">Full Disclaimer</span>
        </a>
        <a 
          href="https://openai.com/policies/privacy-policy/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 px-2 text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300 group"
        >
          <ExternalLink size={12} className="group-hover:rotate-45 transition-transform duration-300" />
          <span className="group-hover:underline">Privacy Policy</span>
        </a>
        <a 
          href="https://aiwebtools.ai/terms-of-services" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 px-2 text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300 group"
        >
          <ExternalLink size={12} className="group-hover:rotate-45 transition-transform duration-300" />
          <span className="group-hover:underline">Terms of Service</span>
        </a>
        <a 
          href="#faq"
          className="flex items-center justify-center gap-1.5 px-2 text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300 group"
        >
          <HelpCircle size={12} className="group-hover:animate-pulse-slow" />
          <span className="group-hover:underline">FAQ</span>
        </a>
      </div>
      
      <div className="flex justify-center">
        <a 
          href="https://chatgpt.com/g/g-KrXujWZPM-talk-to-your-god-gpt" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button 
            className="bg-resurrection-primary hover:bg-resurrection-primary/80 text-white"
          >
            Begin Your Divine Connection
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
      
      <p className="text-xs text-resurrection-foreground/60 mt-4">
        © 2025 AI WEB TOOLS LLC. All rights reserved.
      </p>
    </div>
  );
};

export default WelcomeFooter;
