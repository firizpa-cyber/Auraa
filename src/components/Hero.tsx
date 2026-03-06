import Reveal from './Reveal';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden alcantara-texture">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aura-navy/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Floating 3D Elements */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-32 h-32 bg-aura-navy/5 rounded-[2rem] border border-aura-navy/10 backdrop-blur-xl hidden lg:block"
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-10 w-48 h-48 bg-aura-navy/5 rounded-full border border-aura-navy/10 backdrop-blur-xl hidden lg:block"
      />

      <div className="max-w-7xl mx-auto px-6 text-center z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-aura-navy/10 bg-aura-navy/5 text-[10px] font-bold tracking-[0.2em] uppercase mb-12 mt-12 text-aura-navy"
        >
          <span className="w-2 h-2 rounded-full bg-aura-navy animate-pulse" />
          Будущее цифрового совершенства
        </motion.div>

        <Reveal>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.9] mb-8 text-aura-navy">
            Раскрываем <br />
            <span className="text-gradient">Ваш Потенциал</span>
          </h1>
        </Reveal>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-aura-navy/60 font-light leading-relaxed mb-12"
        >
          Aura — технологический партнер нового поколения, создающий премиальные цифровые продукты, которые вдохновляют и обеспечивают значимый рост вашего бизнеса.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link to="/brief" className="group navy-button flex items-center gap-2">
            Начать проект
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a href="#cases" className="outline-button">
            Наши работы
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-aura-navy/40 font-bold">Скролл</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-aura-navy to-transparent" />
      </motion.div>
    </section>
  );
}
