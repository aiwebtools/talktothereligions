
import React from "react";
import { motion } from "framer-motion";
import { HelpCircle, MessageCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HomeFAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is Talk to the Gods?",
      answer: "Talk to the Gods is an educational tool designed to help you explore religious perspectives and theological concepts from different traditions through an interactive, simulated conversation format. It offers an immersive learning experience that helps you understand various religious viewpoints based on their documented teachings and historical records."
    },
    {
      question: "How does it work?",
      answer: "You select a religious figure from any tradition, ask questions about their teachings or philosophy, and our AI creates responses based on documented religious texts, scholarly interpretations, and historical understanding associated with that tradition. This approach allows for comparative religious study in an interactive format."
    },
    {
      question: "Is this real communication with religious figures?",
      answer: "No. This is an AI-driven educational simulation for research and learning purposes. It's important to understand that this is not a spiritual or mystical tool, but rather a technological approach to exploring and understanding religious teachings and perspectives."
    },
    {
      question: "Which religious traditions can I explore?",
      answer: "The system supports figures from all major world religions including Christianity, Islam, Judaism, Hinduism, Buddhism, and many others, as well as figures from ancient pantheons and indigenous traditions, allowing for comprehensive comparative religious studies."
    },
    {
      question: "How accurate are the responses?",
      answer: "The AI strives to provide responses based on documented religious texts and scholarly interpretations, but represents a synthesis of available religious and academic sources. For authoritative religious guidance, please consult with recognized religious authorities and primary texts."
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-4xl mx-auto mt-10 mb-8"
    >
      <div className="glass-card rounded-xl p-6 md:p-8 shadow-lg dark-glow">
        <div className="flex items-center justify-center mb-6">
          <h2 className="text-xl md:text-2xl font-serif text-resurrection-foreground text-gradient-animate flex items-center">
            <HelpCircle className="mr-3 text-resurrection-accent" />
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-resurrection-primary/20 rounded-lg p-4 bg-muted/40 divine-border"
            >
              <h3 className="font-medium text-resurrection-primary flex items-start">
                <MessageCircle className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                <span>{faq.question}</span>
              </h3>
              <p className="mt-2 text-resurrection-foreground/80 pl-6 text-sm md:text-base">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
          <a href="#faq" className="text-sm text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300">
            View complete FAQ
          </a>
          
          <a 
            href="https://chatgpt.com/g/g-6901478f2bf88191b49298a508bbd486-religious-studies-gpt"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              className={cn(
                "bg-resurrection-primary hover:bg-resurrection-primary/80 text-white",
                "text-xs md:text-sm px-4 h-9"
              )}
            >
              Begin Your Religious Studies
              <ExternalLink className="ml-2 h-3 w-3 md:h-4 md:w-4" />
            </Button>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default HomeFAQ;
