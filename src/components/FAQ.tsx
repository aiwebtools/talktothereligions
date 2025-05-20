
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, HelpCircle, MessageCircle, ExternalLink, ArrowLeft, AlertTriangle, Sparkles, Info } from "lucide-react";

interface FAQProps {
  onClose: () => void;
}

const FAQ: React.FC<FAQProps> = ({ onClose }) => {
  const faqs = [
    {
      question: "What is Talk to the Gods GPT?",
      answer: "Talk to the Gods GPT is an advanced AI educational tool designed to help you study and understand theological perspectives from any religion or spiritual tradition. Through interactive simulations, this tool offers an opportunity to explore religious teachings, moral frameworks, and philosophical insights from diverse belief systems."
    },
    {
      question: "How does Talk to the Gods GPT work?",
      answer: "The process is simple: 1) You select a religious figure from any tradition you wish to study; 2) Our AI creates an educational simulation by synthesizing known teachings, texts, and scholarly interpretations from that tradition; 3) You engage in an interactive learning experience to study religious concepts, ethical frameworks, and theological perspectives that align with that tradition's documented beliefs."
    },
    {
      question: "Which religious traditions can I explore?",
      answer: "Talk to the Gods GPT supports a vast array of religious traditions and theological perspectives across all major world religions and spiritual systems. This includes but is not limited to Christianity, Islam, Judaism, Hinduism, Buddhism, Taoism, Shinto, Greek/Roman traditions, Norse traditions, Celtic spirituality, indigenous beliefs, and many more."
    },
    {
      question: "Is this meant to be a religious experience?",
      answer: "No. Talk to the Gods GPT is an educational and research tool designed for comparative religious studies, academic exploration, and understanding diverse theological perspectives. It creates an engaging learning experience based on the documented teachings and scholarly understandings of various religious traditions. It's important to understand that this is a technological approach to studying religious concepts, not a spiritual or devotional tool."
    },
    {
      question: "How accurate are the responses to theological questions?",
      answer: "The AI strives to provide responses that align with scholarly interpretations, religious texts, and academic understandings associated with each religious tradition. While comprehensive in its knowledge base, the system represents a synthesis of available religious scholarship. For authoritative religious guidance, please consult with recognized religious authorities or primary texts."
    },
    {
      question: "Can I use this for academic research?",
      answer: "Talk to the Gods GPT can be a valuable supplementary tool for exploring religious concepts and comparing theological perspectives across traditions. However, for academic research, we recommend using it alongside traditional scholarly sources, primary religious texts, and consultation with academic experts in religious studies. This tool is best used as a starting point for deeper research and exploration."
    },
    {
      question: "Is my information kept private?",
      answer: "Yes, your privacy is important to us. Your interactions with Talk to the Gods GPT remain private and secure. We do not store conversations beyond your session unless you specifically request to save them. For more information, please read our Privacy Policy."
    },
    {
      question: "Can I use Talk to the Gods GPT on mobile devices?",
      answer: "Yes, Talk to the Gods GPT is fully responsive and works on all devices including smartphones, tablets, and desktop computers. You can access it through ChatGPT's interface on any device."
    },
    {
      question: "How do I provide feedback or report issues?",
      answer: "We value your feedback to improve the educational experience. You can contact our support team via email at support@ai-webtools.com or by phone at (475) 800-8096 with any questions, suggestions, or concerns about your experience."
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="glass-card rounded-xl p-8 md:p-10 shadow-xl dark-glow">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-serif text-resurrection-foreground text-gradient-animate flex items-center">
            <HelpCircle className="mr-3 text-resurrection-accent" />
            Frequently Asked Questions
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full hover:bg-resurrection-primary/20"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="mb-8 border border-resurrection-primary/20 rounded-lg p-5 bg-yellow-50/10">
          <h3 className="font-medium text-resurrection-primary text-lg flex items-start mb-4">
            <AlertTriangle className="h-5 w-5 mr-2 mt-1 flex-shrink-0 text-yellow-500" />
            <span>Important Disclaimer</span>
          </h3>
          <div className="space-y-3 text-sm pl-7">
            <p>Talk to the Gods GPT is designed for educational research and religious studies. It provides AI-simulated responses based on religious texts, scholarly interpretations, and historical records. This is not a religious or spiritual tool but an educational resource for studying religious concepts.</p>
            <p className="font-medium">For a complete understanding of how to use this tool appropriately, please read our <a href="#disclaimer" className="text-resurrection-accent underline">full disclaimer</a>.</p>
          </div>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-resurrection-primary/20 rounded-lg p-5 bg-muted/40 interactive-card divine-border"
            >
              <h3 className="font-medium text-resurrection-primary text-lg flex items-start">
                <MessageCircle className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <span>{faq.question}</span>
              </h3>
              <p className="mt-3 text-resurrection-foreground/80 pl-7 leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-resurrection-foreground/70 mb-4 flex items-center justify-center">
            <Info className="h-4 w-4 mr-2" />
            Have more questions? Contact our support team:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:support@ai-webtools.com"
              className="flex items-center text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300 group"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              support@ai-webtools.com
            </a>
            <a
              href="tel:+14758008096"
              className="flex items-center text-resurrection-primary hover:text-resurrection-accent transition-colors duration-300 group"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              (475) 800-8096
            </a>
          </div>
        </div>

        <div className="mt-10 flex justify-between items-center">
          <Button 
            variant="outline" 
            onClick={onClose}
            className="border-resurrection-primary/30 text-resurrection-primary hover:bg-resurrection-primary/10 flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <a 
            href="https://chatgpt.com/g/g-KrXujWZPM-talk-to-your-god-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button 
              className="bg-resurrection-primary hover:bg-resurrection-primary/80 text-white"
            >
              Begin Religious Studies
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default FAQ;
