
import React from "react";
import { motion } from "framer-motion";
import { Heart, BookOpen, Globe, Sparkles } from "lucide-react";

const UniversalLove: React.FC = () => {
  const loveTraditions = [
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

  const lightTraditions = [
    {
      tradition: "Christianity",
      quote: "I am the light of the world. Whoever follows me will never walk in darkness - John 8:12",
      symbol: "✝️"
    },
    {
      tradition: "Islam",
      quote: "Allah is the Light of the heavens and the earth - Quran 24:35",
      symbol: "☪️"
    },
    {
      tradition: "Buddhism",
      quote: "Be a lamp unto yourself, be your own refuge - Buddha",
      symbol: "☸️"
    },
    {
      tradition: "Hinduism",
      quote: "Lead me from darkness to light - Brihadaranyaka Upanishad",
      symbol: "🕉️"
    },
    {
      tradition: "Judaism",
      quote: "The Lord is my light and my salvation - Psalm 27:1",
      symbol: "✡️"
    },
    {
      tradition: "Sikhism",
      quote: "God's Light illuminates the three worlds - Guru Granth Sahib",
      symbol: "☬"
    },
    {
      tradition: "Taoism",
      quote: "The Tao is the eternal light that guides all things",
      symbol: "☯️"
    },
    {
      tradition: "Confucianism",
      quote: "The superior person seeks enlightenment within",
      symbol: "📜"
    },
    {
      tradition: "Jainism",
      quote: "Knowledge is the supreme light that destroys darkness",
      symbol: "🙏"
    },
    {
      tradition: "Bahá'í Faith",
      quote: "The light of men is Justice, quench it not - Bahá'u'lláh",
      symbol: "🌟"
    },
    {
      tradition: "Shinto",
      quote: "Amaterasu, the Sun Goddess, brings divine light to all",
      symbol: "⛩️"
    },
    {
      tradition: "Zoroastrianism",
      quote: "Ahura Mazda is the supreme light, the Wise Lord",
      symbol: "🔥"
    },
    {
      tradition: "Greek Mythology",
      quote: "Apollo brings the light of truth and prophecy",
      symbol: "⚡"
    },
    {
      tradition: "Norse Mythology",
      quote: "Baldur the Beautiful radiates divine light",
      symbol: "⚒️"
    },
    {
      tradition: "Egyptian Mythology",
      quote: "Ra, the Sun God, is the eternal source of light",
      symbol: "𓂀"
    },
    {
      tradition: "Celtic Spirituality",
      quote: "The sacred fire illuminates the path to the Otherworld",
      symbol: "🍀"
    },
    {
      tradition: "Native American",
      quote: "Father Sun brings light and life to all creation",
      symbol: "🦅"
    },
    {
      tradition: "Shamanism",
      quote: "The spirit light guides the shaman's journey",
      symbol: "🥁"
    },
    {
      tradition: "Kabbalah",
      quote: "Ein Sof is the infinite light from which all emanates",
      symbol: "🌳"
    },
    {
      tradition: "Sufism",
      quote: "God is the Light upon Light - Nur-ala-Nur",
      symbol: "🌹"
    },
    {
      tradition: "Gnosticism",
      quote: "The divine spark of light dwells within every soul",
      symbol: "👁️"
    },
    {
      tradition: "Sacred Geometry",
      quote: "The Flower of Life radiates the pattern of divine light",
      symbol: "🔮"
    },
    {
      tradition: "Hermeticism",
      quote: "The divine light of consciousness illuminates all planes",
      symbol: "⚗️"
    },
    {
      tradition: "Theosophy",
      quote: "The Clear Light is the source of all wisdom",
      symbol: "✨"
    },
    {
      tradition: "Vedanta",
      quote: "Jyoti, the inner light, reveals Brahman - the Absolute",
      symbol: "🪷"
    },
    {
      tradition: "Aztec Spirituality",
      quote: "Huitzilopochtli, the Sun deity, brings the fire of life",
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
          {loveTraditions.map((item, index) => (
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
              Unity in Diversity Through Love
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

      {/* LIGHT Section */}
      <div className="glass-card rounded-xl p-8 md:p-12 shadow-xl dark-glow relative overflow-hidden mt-12">
        {/* Background divine light */}
        <div className="absolute inset-0 bg-gradient-radial from-gold-400/10 via-transparent to-transparent"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-12 relative z-10"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Sparkles className="text-gold-400 h-8 w-8 animate-pulse-slow" />
            <h3 className="text-3xl md:text-4xl font-serif text-resurrection-foreground text-gradient-animate">
              The Universal Light
            </h3>
            <Sparkles className="text-gold-400 h-8 w-8 animate-pulse-slow" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gradient-to-r from-gold-400/20 via-resurrection-primary/15 to-gold-400/20 border-2 border-gold-400/50 rounded-xl p-8 mb-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-divine-sweep"></div>
            <div className="text-6xl mx-auto mb-4 animate-float">☀️</div>
            <p className="text-xl md:text-2xl font-medium text-resurrection-foreground leading-relaxed mb-4">
              <span className="text-gold-400 font-bold">All Traditions Honor the Divine:</span>
            </p>
            <p className="text-2xl md:text-3xl font-serif text-gradient-animate font-bold">
              L I G H T
            </p>
            <p className="text-lg text-resurrection-foreground/90 mt-4 italic">
              From the eternal sun to the inner flame, every spiritual path recognizes Light as 
              the divine presence that illuminates truth, dispels darkness, and guides souls home.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 relative z-10">
          {lightTraditions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.08 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="bg-gradient-to-br from-gold-400/5 to-gold-400/10 border border-gold-400/30 rounded-xl p-4 relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 bg-gold-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="text-3xl mb-3 transition-transform duration-500 group-hover:scale-125 text-center">
                {item.symbol}
              </div>
              
              <h4 className="text-base font-serif text-gold-400 mb-2 text-center font-bold">
                {item.tradition}
              </h4>
              
              <blockquote className="text-xs text-resurrection-foreground/80 italic text-center leading-relaxed">
                "{item.quote}"
              </blockquote>
              
              <div className="flex justify-center mt-3">
                <Sparkles className="h-3 w-3 text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-slow" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.3 }}
          className="text-center mt-12 relative z-10"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="text-gold-400 h-6 w-6" />
            <p className="text-xl font-serif text-resurrection-foreground text-gradient-animate">
              Unity in Diversity Through Light
            </p>
            <Sparkles className="text-gold-400 h-6 w-6" />
          </div>
          <p className="text-lg text-resurrection-foreground/90 max-w-4xl mx-auto leading-relaxed">
            Across all faiths and spiritual paths, Light symbolizes the divine presence, wisdom, and truth. 
            Whether called Allah's Nur, Christ's Light, Buddha's Enlightenment, or Brahman's Jyoti, 
            this sacred illumination reveals our shared spiritual heritage and the One Source from which all light emanates.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default UniversalLove;
