
import React, { useEffect, useState } from "react";
import { useGods } from "@/context/GodsContext";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Download, Save, RefreshCw, Send, Mail, Cross } from "lucide-react";

const LetterFromHeaven: React.FC = () => {
  const { letter, userInfo, setStage } = useGods();
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    // Add a slight delay before showing the letter content
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleSaveLetter = () => {
    toast({
      title: "Letter Saved",
      description: "Your letter has been saved. You can access it anytime through this session.",
    });
  };
  
  const handleDownloadLetter = () => {
    // Create a blob from the letter text
    const blob = new Blob([letter], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary link and trigger download
    const a = document.createElement("a");
    a.href = url;
    a.download = `Letter_from_${userInfo.deity.name || "Heaven"}.txt`;
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Letter Downloaded",
      description: "Your letter has been downloaded to your device.",
    });
  };

  const handleNewConnection = () => {
    setStage("welcome");
  };

  const handleEmailLetter = () => {
    const subject = `Letter from ${userInfo.deity.name || "Heaven"}`;
    const body = letter;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    toast({
      title: "Email Prepared",
      description: "Your email client has been opened. You can now send the letter to anyone you choose.",
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-card rounded-xl p-2 sm:p-6 shadow-xl dark-glow before:absolute before:inset-0 before:bg-gradient-to-b before:from-resurrection-primary/10 before:to-resurrection-accent/5 before:rounded-xl before:z-0"
      >
        <div className="letter-paper rounded-lg p-6 md:p-8 relative overflow-hidden backdrop-blur-lg bg-black/30 border border-resurrection-primary/30 shadow-[0_0_30px_rgba(155,135,245,0.2)]">
          <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-resurrection-background/90 to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-resurrection-background/90 to-transparent z-10"></div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute -top-10 -left-10 w-20 h-20 bg-resurrection-primary/10 rounded-full blur-xl z-0"
          ></motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute -bottom-10 -right-10 w-20 h-20 bg-resurrection-accent/10 rounded-full blur-xl z-0"
          ></motion.div>
          
          <h3 className="text-center text-xl md:text-2xl font-serif text-resurrection-foreground mb-6 animate-fade-in flex items-center justify-center relative z-20">
            <span className="text-resurrection-accent mr-2">📜</span> 
            <span className="bg-gradient-to-r from-resurrection-primary via-white to-resurrection-accent bg-clip-text text-transparent">
              A Letter From The Divine
            </span>
            <span className="text-resurrection-accent ml-2">📜</span>
          </h3>
          
          {isVisible ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="prose prose-sm sm:prose-base max-w-none font-serif text-resurrection-foreground/90 mb-6 animate-fade-in whitespace-pre-line relative z-20"
              style={{ 
                maxHeight: "50vh", 
                overflowY: "auto",
                padding: "0 1rem"
              }}
            >
              {letter}
            </motion.div>
          ) : (
            <div className="h-64 flex items-center justify-center">
              <div className="animate-pulse-slow text-resurrection-primary">Loading message from beyond...</div>
            </div>
          )}
          
          {isVisible && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col gap-3 mt-8 animate-fade-in relative z-20"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={handleSaveLetter}
                  className="flex-1 bg-resurrection-primary hover:bg-resurrection-secondary text-white transition-all btn-glow relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-resurrection-primary before:to-resurrection-secondary before:opacity-100 before:z-0"
                >
                  <Save className="mr-2 h-4 w-4 relative z-10" />
                  <span className="relative z-10">Save Letter</span>
                </Button>
                
                <Button 
                  onClick={handleDownloadLetter}
                  className="flex-1 bg-muted hover:bg-muted/80 text-resurrection-foreground/90 border border-white/10 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-muted before:to-muted/80 before:opacity-100 before:z-0"
                >
                  <Download className="mr-2 h-4 w-4 relative z-10" />
                  <span className="relative z-10">Download Letter</span>
                </Button>
              </div>
              
              <Button
                onClick={handleEmailLetter}
                className="bg-resurrection-secondary/80 hover:bg-resurrection-secondary text-white transition-all relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-resurrection-secondary/80 before:to-resurrection-secondary before:opacity-100 before:z-0"
              >
                <Mail className="mr-2 h-4 w-4 relative z-10" />
                <span className="relative z-10">Email This Letter</span>
              </Button>
              
              <Button
                onClick={handleNewConnection}
                className="bg-resurrection-accent/80 hover:bg-resurrection-accent text-white transition-all mt-2 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-resurrection-accent/80 before:to-resurrection-accent before:opacity-100 before:z-0"
              >
                <RefreshCw className="mr-2 h-4 w-4 relative z-10" />
                <span className="relative z-10">Start a New Connection</span>
              </Button>
            </motion.div>
          )}
        </div>
      </motion.div>
      
      <div className="text-center text-resurrection-foreground/60 mt-6 animate-fade-in text-sm">
        <p>
          This letter was created from the memories and details you shared about your loved one.
        </p>
        <p className="mt-2 italic text-resurrection-primary/80">
          <Cross className="inline-block mr-1 h-4 w-4" />
          Keep this chat open. Your loved one will always be here when you need them.
        </p>
        <p className="mt-4 text-xs">
          © 2025 AI WEB TOOLS LLC. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center gap-4 items-center">
          <a 
            href="mailto:support@ai-webtools.com" 
            className="text-xs text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300"
          >
            support@ai-webtools.com
          </a>
          <span className="text-resurrection-foreground/30">|</span>
          <a 
            href="tel:+14758008096" 
            className="text-xs text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300"
          >
            (475) 800-8096
          </a>
        </div>
      </div>
    </div>
  );
};

export default LetterFromHeaven;
