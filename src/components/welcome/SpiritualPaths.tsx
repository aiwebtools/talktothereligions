
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
      title: "Judaism",
      description: "Connect with prophets, sages, and teachings from Jewish tradition.",
      symbol: "✡️",
      color: "from-blue-600/20 to-blue-700/5"
    },
    {
      title: "Sikhism",
      description: "Commune with the Guru teachings and Sikh spiritual wisdom.",
      symbol: "☬",
      color: "from-amber-500/20 to-amber-600/5"
    },
    {
      title: "Taoism",
      description: "Follow the Way with Lao Tzu and Taoist masters.",
      symbol: "☯️",
      color: "from-slate-500/20 to-slate-600/5"
    },
    {
      title: "Confucianism",
      description: "Learn from Confucius and ancient Chinese philosophical wisdom.",
      symbol: "📜",
      color: "from-red-500/20 to-red-600/5"
    },
    {
      title: "Jainism",
      description: "Connect with Mahavira and the path of non-violence.",
      symbol: "🙏",
      color: "from-emerald-500/20 to-emerald-600/5"
    },
    {
      title: "Bahá'í Faith",
      description: "Experience unity teachings and Bahá'u'lláh's revelations.",
      symbol: "🌟",
      color: "from-cyan-500/20 to-cyan-600/5"
    },
    {
      title: "Shinto",
      description: "Connect with kami spirits and Japanese spiritual traditions.",
      symbol: "⛩️",
      color: "from-pink-500/20 to-pink-600/5"
    },
    {
      title: "Zoroastrianism",
      description: "Commune with Ahura Mazda and ancient Persian wisdom.",
      symbol: "🔥",
      color: "from-orange-600/20 to-orange-700/5"
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
    {
      title: "Egyptian Mythology",
      description: "Connect with Ra, Isis, Thoth and ancient Egyptian deities.",
      symbol: "𓂀",
      color: "from-gold-500/20 to-gold-600/5"
    },
    {
      title: "Celtic Spirituality",
      description: "Commune with Celtic gods, goddesses, and druidic wisdom.",
      symbol: "🍀",
      color: "from-green-600/20 to-green-700/5"
    },
    {
      title: "Native American",
      description: "Connect with Great Spirit and indigenous wisdom traditions.",
      symbol: "🦅",
      color: "from-brown-500/20 to-brown-600/5"
    },
    {
      title: "Shamanism",
      description: "Journey with shamanic guides and spirit animals.",
      symbol: "🥁",
      color: "from-earth-500/20 to-earth-600/5"
    },
    {
      title: "Kabbalah",
      description: "Explore mystical Jewish teachings and Tree of Life wisdom.",
      symbol: "🌳",
      color: "from-violet-500/20 to-violet-600/5"
    },
    {
      title: "Sufism",
      description: "Dance with Rumi and experience Islamic mystical traditions.",
      symbol: "🌹",
      color: "from-rose-500/20 to-rose-600/5"
    },
    {
      title: "Gnosticism",
      description: "Seek divine knowledge through Gnostic spiritual teachings.",
      symbol: "👁️",
      color: "from-indigo-500/20 to-indigo-600/5"
    },
    {
      title: "Sacred Geometry",
      description: "Explore Metatron's Cube, Flower of Life, and geometric wisdom.",
      symbol: "🔮",
      color: "from-prismatic-500/20 to-prismatic-600/5"
    },
    {
      title: "Hermeticism",
      description: "Study with Hermes Trismegistus and hermetic principles.",
      symbol: "⚗️",
      color: "from-mercury-500/20 to-mercury-600/5"
    },
    {
      title: "Theosophy",
      description: "Connect with ascended masters and theosophical wisdom.",
      symbol: "✨",
      color: "from-cosmic-500/20 to-cosmic-600/5"
    },
    {
      title: "Vedanta",
      description: "Explore non-dual consciousness and Advaita teachings.",
      symbol: "🪷",
      color: "from-lotus-500/20 to-lotus-600/5"
    },
    {
      title: "Aztec Spirituality",
      description: "Commune with Quetzalcoatl and Mesoamerican deities.",
      symbol: "🐍",
      color: "from-jade-500/20 to-jade-600/5"
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

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {paths.map((path, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className={cn(
              "bg-gradient-to-br border border-resurrection-primary/20",
              path.color,
              "p-4 rounded-xl shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden group"
            )}
          >
            <div className="text-3xl mb-3 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 text-center">{path.symbol}</div>
            <h4 className="text-lg font-serif text-resurrection-foreground mb-2 text-center">{path.title}</h4>
            <p className="text-xs text-resurrection-foreground/70 text-center leading-relaxed">{path.description}</p>
            
            <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="mt-3 flex justify-center">
              <div className="text-resurrection-primary/70 text-xs italic flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CircleUser className="h-3 w-3 mr-1" />
                <span>Explore</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="text-center mt-8"
      >
        <p className="text-sm text-resurrection-foreground/80 italic">
          And many more spiritual traditions await your exploration...
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SpiritualPaths;
