
import React from "react";
import { motion } from "framer-motion";
import { Heart, BrainCircuit, Compass, Sparkles, Lightbulb, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

const DivineBenefits: React.FC = () => {
  const benefits = [
    {
      title: "Spiritual Wisdom",
      description: "Access divine guidance and wisdom from across religious traditions.",
      icon: <Sparkles className="h-6 w-6 text-resurrection-accent" />,
      color: "from-indigo-500/30 to-indigo-600/10"
    },
    {
      title: "Personal Growth",
      description: "Find inspiration for your spiritual journey and personal evolution.",
      icon: <Leaf className="h-6 w-6 text-green-400" />,
      color: "from-green-500/30 to-green-600/10"
    },
    {
      title: "Emotional Support",
      description: "Receive compassionate guidance during challenging life moments.",
      icon: <Heart className="h-6 w-6 text-pink-400" />,
      color: "from-pink-500/30 to-pink-600/10"
    },
    {
      title: "Intellectual Exploration",
      description: "Engage with complex theological and philosophical concepts.",
      icon: <BrainCircuit className="h-6 w-6 text-purple-400" />,
      color: "from-purple-500/30 to-purple-600/10"
    },
    {
      title: "Moral Guidance",
      description: "Explore ethical dilemmas through divine and spiritual perspectives.",
      icon: <Compass className="h-6 w-6 text-blue-400" />,
      color: "from-blue-500/30 to-blue-600/10"
    },
    {
      title: "Spiritual Creativity",
      description: "Spark creative inspiration from divine sources across traditions.",
      icon: <Lightbulb className="h-6 w-6 text-yellow-400" />,
      color: "from-yellow-500/30 to-yellow-600/10"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="my-16 relative overflow-hidden"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-resurrection-primary/5 blur-3xl rounded-full transform translate-y-1/2"></div>
      
      <div className="relative z-10">
        <h3 className="text-2xl font-serif text-center text-resurrection-foreground text-gradient-animate mb-10">
          Experience Divine Benefits
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(155, 135, 245, 0.3)" 
              }}
              className={cn(
                "bg-gradient-to-br border border-resurrection-primary/20 relative z-10",
                benefit.color,
                "p-6 rounded-xl shadow-lg transition-all duration-500 hover:border-resurrection-primary/40"
              )}
            >
              <div className="p-3 bg-resurrection-background/40 rounded-full inline-flex mb-4 backdrop-blur-sm">
                {benefit.icon}
              </div>
              
              <h4 className="text-lg font-serif text-resurrection-foreground mb-2">{benefit.title}</h4>
              <p className="text-sm text-resurrection-foreground/70">{benefit.description}</p>
              
              {/* Interactive particle effect on hover */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-2 h-2 bg-white/30 rounded-full animate-float"></div>
                <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/20 rounded-full animate-float animation-delay-1000"></div>
                <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-float animation-delay-2000"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DivineBenefits;
