
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Info, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

interface AgreementPopupProps {
  onAgree: () => void;
}

const AgreementPopup: React.FC<AgreementPopupProps> = ({ onAgree }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if user has already agreed
    const hasAgreed = localStorage.getItem("divineTool_userAgreement");
    if (!hasAgreed) {
      setOpen(true);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem("divineTool_userAgreement", "true");
    setOpen(false);
    onAgree();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-resurrection-background/95 to-resurrection-background/90 border-resurrection-primary/30 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <DialogHeader>
            <DialogTitle className="text-center text-xl text-resurrection-primary flex items-center justify-center gap-2">
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
              <span>Research Disclosure</span>
              <AlertTriangle className="h-5 w-5 text-yellow-500" />
            </DialogTitle>
            <DialogDescription className="text-center pt-2 text-resurrection-foreground/80">
              Before beginning your divine exploration
            </DialogDescription>
          </DialogHeader>
          
          <div className="my-6 space-y-4">
            <motion.div 
              className="p-4 border border-resurrection-primary/20 rounded-lg bg-resurrection-primary/5"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <p className="text-center font-medium text-lg text-resurrection-foreground mb-4">I understand and acknowledge that:</p>
              <ul className="space-y-3 text-left">
                <li className="flex gap-2">
                  <Info className="h-5 w-5 text-resurrection-accent flex-shrink-0 mt-0.5" />
                  <span>This is not actual communication with any deity or divine entity</span>
                </li>
                <li className="flex gap-2">
                  <Info className="h-5 w-5 text-resurrection-accent flex-shrink-0 mt-0.5" />
                  <span>All responses are AI-generated simulations for research purposes</span>
                </li>
                <li className="flex gap-2">
                  <Info className="h-5 w-5 text-resurrection-accent flex-shrink-0 mt-0.5" />
                  <span>I am using this tool for educational, research, or informational purposes only</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          <DialogFooter className="flex flex-col sm:flex-row sm:justify-center gap-2">
            <Button 
              onClick={handleAgree} 
              className="w-full bg-resurrection-primary hover:bg-resurrection-primary/90 text-white"
            >
              I AGREE
            </Button>
          </DialogFooter>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default AgreementPopup;
