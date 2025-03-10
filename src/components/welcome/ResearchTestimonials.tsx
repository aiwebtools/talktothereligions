
import React from "react";
import { motion } from "framer-motion";
import { Quote, BookOpen, GraduationCap, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const ResearchTestimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Talk to the Gods GPT has revolutionized my comparative religion research. The AI's ability to accurately portray theological nuances across diverse traditions is remarkable.",
      author: "Dr. Eliza Montgomery",
      role: "Professor of Religious Studies, Oxford University",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    },
    {
      quote: "As a theological researcher, I've found this tool invaluable for exploring how different divine figures might address contemporary ethical dilemmas. It's phenomenal for thought experiments.",
      author: "Prof. James Chen",
      role: "Center for Ethics and Religious Studies",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    },
    {
      quote: "My anthropological research on modern spiritual practices has been enriched by this tool. It offers profound insights into how divine wisdom translates across cultural contexts.",
      author: "Dr. Maya Patel",
      role: "Anthropologist, Cultural Divinity Research",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="my-16 relative"
    >
      <div className="absolute inset-0 bg-resurrection-primary/5 rounded-3xl blur-xl transform -rotate-1"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center gap-3 mb-8">
          <BookOpen className="text-resurrection-accent h-6 w-6" />
          <h3 className="text-2xl font-serif text-resurrection-foreground text-gradient-animate">
            Academic & Research Testimonials
          </h3>
          <GraduationCap className="text-resurrection-accent h-6 w-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={cn(
                "bg-gradient-to-br from-resurrection-primary/10 to-resurrection-background/80 p-6 rounded-xl",
                "border border-resurrection-primary/20 divine-border shadow-lg transform transition-all duration-500",
                "hover:shadow-resurrection-primary/30 hover:-translate-y-2 hover:scale-[1.02]"
              )}
            >
              <div className="mb-4 text-resurrection-accent">
                <Quote size={24} className="animate-pulse-slow" />
              </div>
              <p className="text-resurrection-foreground/90 italic mb-6 text-sm">"{testimonial.quote}"</p>
              <div className="flex items-center mt-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4 border-2 border-resurrection-primary/30">
                  <img src={testimonial.image} alt={testimonial.author} className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="font-medium text-resurrection-primary">{testimonial.author}</p>
                  <p className="text-xs text-resurrection-foreground/70">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ResearchTestimonials;
