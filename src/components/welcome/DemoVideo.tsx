
import React from "react";
import { Youtube, BookOpen, GraduationCap, Scroll } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const DemoVideo: React.FC = () => {
  return (
    <div className="mt-6 mb-6 md:mt-8 md:mb-8 px-2 md:px-0">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Youtube className="text-resurrection-accent" size={20} />
        <h4 className="font-medium text-resurrection-foreground/80">
          See the Religious Studies Tool in Action
        </h4>
      </div>
      <div className="mx-auto w-full max-w-md px-4 sm:px-0">
        <div className={cn(
          "relative overflow-hidden rounded-lg shadow-lg",
          "border border-resurrection-primary/30 dark-glow",
          "w-full"
        )}
        style={{ paddingBottom: '177.78%' }}
        >
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/XDS4qsb48h0?si=dQWg1aq-K9g5VTL9&amp;autoplay=0&amp;mute=0&amp;controls=1&amp;enablejsapi=1&amp;modestbranding=1&amp;rel=0&amp;hd=1&amp;vq=hd1080&amp;showinfo=0" 
            title="Religious Studies GPT Demo" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
      
      {/* Educational Value Section */}
      <motion.div 
        className="mt-6 mb-4 p-4 bg-resurrection-primary/5 border border-resurrection-primary/20 rounded-lg text-resurrection-foreground/90"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h5 className="flex items-center justify-center mb-3 font-serif text-lg text-resurrection-primary">
          <BookOpen className="h-5 w-5 mr-2" />
          Academic & Research Value
          <GraduationCap className="h-5 w-5 ml-2" />
        </h5>
        
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-start gap-2 p-3 bg-resurrection-primary/10 rounded-md">
            <Scroll className="h-4 w-4 text-resurrection-primary mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-medium">Religious Studies</span>
              <p className="mt-1 text-resurrection-foreground/80">Study theological concepts and compare different religious perspectives in an interactive format.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2 p-3 bg-resurrection-primary/10 rounded-md">
            <GraduationCap className="h-4 w-4 text-resurrection-primary mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-medium">Academic Research</span>
              <p className="mt-1 text-resurrection-foreground/80">Analyze how different religious traditions approach similar philosophical questions.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2 p-3 bg-resurrection-primary/10 rounded-md">
            <BookOpen className="h-4 w-4 text-resurrection-primary mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-medium">Comparative Religion</span>
              <p className="mt-1 text-resurrection-foreground/80">Understand similarities and differences between various religious and ethical frameworks.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DemoVideo;
