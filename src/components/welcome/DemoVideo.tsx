
import React from "react";
import { Youtube, BookOpen, GraduationCap, Scroll } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const DemoVideo: React.FC = () => {
  return (
    <div className="mt-4 mb-4 md:mt-8 md:mb-8 px-2 md:px-0">
      <div className="flex items-center justify-center gap-2 mb-2 md:mb-3">
        <Youtube className="text-resurrection-accent" size={18} />
        <h4 className="font-medium text-sm md:text-base text-resurrection-foreground/80">
          See Talk to the Gods GPT in Action
        </h4>
      </div>
      <div className={cn(
        "relative overflow-hidden rounded-lg shadow-lg",
        "border border-resurrection-primary/30 dark-glow",
        "pb-[56.25%] h-0 w-full max-w-full"
      )}>
        <iframe 
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/Yw_z9NYHlPA?si=YZp3h5AY3KFgH7n4&amp;mute=1&amp;controls=1&amp;enablejsapi=1&amp;modestbranding=1&amp;rel=0&amp;showinfo=0" 
          title="Talk to the Gods GPT Demo" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      
      {/* Educational Value Section - Optimized for mobile */}
      <motion.div 
        className="mt-4 md:mt-6 mb-2 md:mb-4 p-3 md:p-4 bg-resurrection-primary/5 border border-resurrection-primary/20 rounded-lg text-resurrection-foreground/90"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h5 className="flex items-center justify-center mb-2 md:mb-3 font-serif text-base md:text-lg text-resurrection-primary">
          <BookOpen className="h-4 w-4 md:h-5 md:w-5 mr-2" />
          Educational & Research Value
          <GraduationCap className="h-4 w-4 md:h-5 md:w-5 ml-2" />
        </h5>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-xs md:text-sm">
          <div className="flex items-start gap-2 p-2 md:p-3 bg-resurrection-primary/10 rounded-md">
            <Scroll className="h-3.5 w-3.5 md:h-4 md:w-4 text-resurrection-primary mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-medium">Religious Studies</span>
              <p className="mt-0.5 md:mt-1 text-xs md:text-sm text-resurrection-foreground/80">Explore theological concepts and divine archetypes across different faith traditions.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2 p-2 md:p-3 bg-resurrection-primary/10 rounded-md">
            <GraduationCap className="h-3.5 w-3.5 md:h-4 md:w-4 text-resurrection-primary mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-medium">Academic Research</span>
              <p className="mt-0.5 md:mt-1 text-xs md:text-sm text-resurrection-foreground/80">Compare divine responses to similar inquiries across different religious contexts.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-2 p-2 md:p-3 bg-resurrection-primary/10 rounded-md">
            <BookOpen className="h-3.5 w-3.5 md:h-4 md:w-4 text-resurrection-primary mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-medium">Spiritual Education</span>
              <p className="mt-0.5 md:mt-1 text-xs md:text-sm text-resurrection-foreground/80">Understand how different deities might approach moral and spiritual questions.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DemoVideo;
