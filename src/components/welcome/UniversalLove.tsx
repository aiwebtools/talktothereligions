
import React from "react";
import { motion } from "framer-motion";
import { Heart, BookOpen, Globe, Sparkles } from "lucide-react";

const UniversalLove: React.FC = () => {
  const traditions = [
    {
      tradition: "Christianity",
      quote: "Love your neighbor as yourself",
      symbol: "✝️"
    },
    {
      tradition: "Islam",
      quote: "None of you believes until he loves for his brother what he loves for himself",
      symbol: "☪️"
    },
    {
      tradition: "Buddhism",
      quote: "Hatred is never appeased by hatred. By love alone is hatred appeased",
      symbol: "☸️"
    },
    {
      tradition: "Hinduism",
      quote: "Where there is love, there is life",
      symbol: "🕉️"
    },
    {
      tradition: "Judaism",
      quote: "What is hateful to you, do not do to your neighbor",
      symbol: "✡️"
    },
    {
      tradition: "Sikhism",
      quote: "Even kings and emperors with heaps of wealth cannot compare with an ant filled with the love of God",
      symbol: "☬"
    },
    {
      tradition: "Taoism",
      quote: "Being deeply loved gives you strength, while loving deeply gives you courage",
      symbol: "☯️"
    },
    {
      tradition: "Confucianism",
      quote: "To love a thing means wanting it to live",
      symbol: "📜"
    },
    {
      tradition: "Jainism",
      quote: "All beings hate pain; therefore, one should not harm them",
      symbol: "🙏"
    },
    {
      tradition: "Bahá'í Faith",
      quote: "Love is the secret of God's holy Dispensation",
      symbol: "🌟"
    },
    {
      tradition: "Shinto",
      quote: "The kami teach us to love and respect all life",
      symbol: "⛩️"
    },
    {
      tradition: "Zoroastrianism",
      quote: "Good thoughts, good words, good deeds - all flow from love",
      symbol: "🔥"
    },
    {
      tradition: "Greek Mythology",
      quote: "Love conquers all, and we too surrender to love",
      symbol: "⚡"
    },
    {
      tradition: "Norse Mythology",
      quote: "Love is the bridge between two hearts",
      symbol: "⚒️"
    },
    {
      tradition: "Egyptian Mythology",
      quote: "The heart that loves is always young",
      symbol: "𓂀"
    },
    {
      tradition: "Celtic Spirituality",
      quote: "Love is the light that guides us through the sacred groves",
      symbol: "🍀"
    },
    {
      tradition: "Native American",
      quote: "We are all connected by the sacred thread of love",
      symbol: "🦅"
    },
    {
      tradition: "Shamanism",
      quote: "Love is the healing medicine of the spirit",
      symbol: "🥁"
    },
    {
      tradition: "Kabbalah",
      quote: "Love is the bridge between you and everything",
      symbol: "🌳"
    },
    {
      tradition: "Sufism",
      quote: "Let yourself be silently drawn by love",
      symbol: "🌹"
    },
    {
      tradition: "Gnosticism",
      quote: "Divine love is the gnosis that awakens the soul",
      symbol: "👁️"
    },
    {
      tradition: "Sacred Geometry",
      quote: "Love is the perfect harmony that creates all sacred forms",
      symbol: "🔮"
    },
    {
      tradition: "Hermeticism",
      quote: "As above, so below - love is the universal principle",
      symbol: "⚗️"
    },
    {
      tradition: "Theosophy",
      quote: "Universal brotherhood is founded on divine love",
      symbol: "✨"
    },
    {
      tradition: "Vedanta",
      quote: "Love is the recognition of oneness in all beings",
      symbol: "🪷"
    },
    {
      tradition: "Aztec Spirituality",
      quote: "In love and war, the heart finds its divine purpose",
      symbol: "🐍"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="my-20 relative"
    >
      <div className="glass-card rounded-xl p-8 md:p-12 shadow-xl dark-glow relative overflow-hidden">
        {/* Background divine light */}
        <div className="absolute inset-0 bg-gradient-radial from-resurrection-primary/10 via-transparent to-transparent"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 relative z-10"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="text-resurrection-accent h-8 w-8 animate-pulse-slow" />
            <h3 className="text-3xl md:text-4xl font-serif text-resurrection-foreground text-gradient-animate">
              The Universal Message
            </h3>
            <Heart className="text-resurrection-accent h-8 w-8 animate-pulse-slow" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-r from-resurrection-primary/20 via-divine-accent/15 to-resurrection-secondary/20 border-2 border-gold-400/50 rounded-xl p-8 mb-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-divine-sweep"></div>
            <Globe className="text-resurrection-accent h-12 w-12 mx-auto mb-4 animate-float" />
            <p className="text-xl md:text-2xl font-medium text-resurrection-foreground leading-relaxed mb-4">
              <span className="text-gold-400 font-bold">All Religions Share One Sacred Truth:</span>
            </p>
            <p className="text-2xl md:text-3xl font-serif text-gradient-animate font-bold">
              L O V E
            </p>
            <p className="text-lg text-resurrection-foreground/90 mt-4 italic">
              Study all traditions and discover the underlying message that binds them all - 
              for that is the true message of the One Divine Source.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 relative z-10">
          {traditions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-gradient-to-br from-white/5 to-white/10 border border-resurrection-primary/30 rounded-xl p-4 relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 bg-resurrection-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="text-3xl mb-3 transition-transform duration-500 group-hover:scale-125 text-center">
                {item.symbol}
              </div>
              
              <h4 className="text-base font-serif text-resurrection-primary mb-2 text-center font-bold">
                {item.tradition}
              </h4>
              
              <blockquote className="text-xs text-resurrection-foreground/80 italic text-center leading-relaxed">
                "{item.quote}"
              </blockquote>
              
              <div className="flex justify-center mt-3">
                <Sparkles className="h-3 w-3 text-resurrection-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-slow" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="text-center mt-12 relative z-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="text-resurrection-accent h-6 w-6" />
            <p className="text-xl font-serif text-resurrection-foreground text-gradient-animate">
              Unity in Diversity
            </p>
            <BookOpen className="text-resurrection-accent h-6 w-6" />
          </div>
          <p className="text-lg text-resurrection-foreground/90 max-w-4xl mx-auto leading-relaxed">
            Through the study of diverse religious traditions, we discover that beneath different languages, 
            rituals, and customs lies a single, eternal truth: the call to love unconditionally. 
            This universal message transcends all boundaries and reveals the divine unity that connects all beings.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default UniversalLove;
