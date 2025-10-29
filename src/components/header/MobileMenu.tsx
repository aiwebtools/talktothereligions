
import React from "react";
import { Menu, Sparkles, ExternalLink, Home, HelpCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface MobileMenuProps {
  handleHomeClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ handleHomeClick }) => {
  return (
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
            href="https://chatgpt.com/g/g-6901478f2bf88191b49298a508bbd486-religious-studies-gpt"
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
  );
};

export default MobileMenu;
