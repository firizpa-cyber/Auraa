import { motion } from 'motion/react';

const words = [
  "ИННОВАЦИИ", "ДИЗАЙН", "СТРАТЕГИЯ", "РАЗРАБОТКА", "AURA DIGITAL", "БУДУЩЕЕ", "КРЕАТИВ", "ЭСТЕТИКА", "КАЧЕСТВО"
];

export default function MarqueeSection() {
  return (
    <section className="relative h-[400px] overflow-hidden bg-white flex items-center justify-center">
      {/* Background soft glow */}
      <div className="absolute inset-0 bg-radial-gradient from-aura-navy/5 to-transparent opacity-50" />
      
      {/* First Marquee - Tilted Right */}
      <div className="absolute w-[150%] rotate-[-5deg] z-10">
        <div className="flex overflow-hidden whitespace-nowrap border-y border-aura-navy/10 py-6 bg-white/80 backdrop-blur-sm shadow-2xl">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 items-center"
          >
            {[...words, ...words, ...words].map((word, i) => (
              <span key={i} className="text-4xl md:text-6xl font-display font-black text-aura-navy/20 tracking-tighter">
                {word}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Second Marquee - Tilted Left */}
      <div className="absolute w-[150%] rotate-[5deg] z-20">
        <div className="flex overflow-hidden whitespace-nowrap border-y border-aura-navy/10 py-6 bg-aura-navy shadow-2xl">
          <motion.div 
            animate={{ x: [-1000, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 items-center"
          >
            {[...words, ...words, ...words].map((word, i) => (
              <span key={i} className="text-4xl md:text-6xl font-display font-black text-white/90 tracking-tighter">
                {word}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Intersection Highlight Effect */}
      <div className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center">
        <div className="w-64 h-64 bg-aura-navy/10 rounded-full blur-[100px]" />
      </div>
    </section>
  );
}
