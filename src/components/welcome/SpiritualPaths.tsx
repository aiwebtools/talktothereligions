
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CircleUser, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const SpiritualPaths: React.FC = () => {
  const paths = [
    {
      title: "Christianity",
      description: "Connect with Jesus Christ, Mary, saints and angels from the Christian tradition.",
      symbol: "✝️",
      color: "from-blue-500/20 to-blue-600/5"
    },
    {
      title: "Hinduism",
      description: "Communicate with Krishna, Shiva, Lakshmi, Ganesh, and other Hindu deities.",
      symbol: "🕉️",
      color: "from-orange-500/20 to-orange-600/5"
    },
    {
      title: "Buddhism",
      description: "Seek wisdom from Buddha, bodhisattvas, and enlightened masters.",
      symbol: "☸️",
      color: "from-yellow-500/20 to-yellow-600/5"
    },
    {
      title: "Islam",
      description: "Experience guidance inspired by Islamic spiritual traditions.",
      symbol: "☪️",
      color: "from-green-500/20 to-green-600/5"
    },
    {
      title: "Greek Mythology",
      description: "Commune with Zeus, Athena, Apollo and the pantheon of Greek gods.",
      symbol: "⚡",
      color: "from-purple-500/20 to-purple-600/5"
    },
    {
      title: "Norse Mythology",
      description: "Seek counsel from Odin, Thor, Freya and the Norse pantheon.",
      symbol: "⚒️",
      color: "from-slate-500/20 to-slate-600/5"
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="my-16"
    >
      <div className="flex items-center justify-center gap-3 mb-8">
        <Sparkles className="text-resurrection-accent h-6 w-6" />
        <h3 className="text-2xl font-serif text-resurrection-foreground text-gradient-animate">
          Explore Spiritual Paths
        </h3>
        <BookOpen className="text-resurrection-accent h-6 w-6" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {paths.map((path, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className={cn(
              "bg-gradient-to-br border border-resurrection-primary/20",
              path.color,
              "p-6 rounded-xl shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden group"
            )}
          >
            <div className="text-4xl mb-4 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">{path.symbol}</div>
            <h4 className="text-xl font-serif text-resurrection-foreground mb-2">{path.title}</h4>
            <p className="text-sm text-resurrection-foreground/70">{path.description}</p>
            
            <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="mt-4 flex justify-end">
              <div className="text-resurrection-primary/70 text-xs italic flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CircleUser className="h-3 w-3 mr-1" />
                <span>Explore</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SpiritualPaths;
