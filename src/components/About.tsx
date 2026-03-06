import Reveal from './Reveal';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="about" ref={containerRef} className="section-padding bg-white relative overflow-hidden">
      {/* Parallax Background Element */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute top-0 left-0 w-full h-[120%] pointer-events-none z-0 opacity-[0.03]"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-aura-navy rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-aura-navy rounded-full blur-[150px]" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-aura-navy/5 shadow-xl">
              <img 
                src="https://picsum.photos/seed/aura-minimal/800/1000" 
                alt="О компании Aura" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl hidden md:block">
              <div className="text-3xl font-display font-bold text-aura-navy">12+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-aura-navy/40">Лет опыта</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <span className="text-aura-navy/40 font-bold text-[10px] tracking-[0.2em] uppercase mb-4 block">Наша история</span>
            <Reveal>
              <h2 className="mb-6">
                Эстетика в каждой <br />
                <span className="text-aura-navy/30">детали кода</span>
              </h2>
            </Reveal>
            <div className="space-y-4 text-aura-navy/60 font-light leading-relaxed text-sm md:text-base max-w-xl">
              <p>
                Aura — это не просто студия разработки. Это объединение инженеров и дизайнеров, которые верят, что цифровой продукт должен быть безупречным как внутри, так и снаружи.
              </p>
              <p>
                Мы отошли от массового производства в пользу ремесленного подхода. Каждый проект для нас — это вызов создать нечто уникальное, что будет выделяться на фоне шаблонных решений.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-10 border-t border-aura-navy/5 pt-10">
              <div>
                <div className="text-2xl font-display font-bold text-aura-navy mb-1">150+</div>
                <p className="text-[10px] text-aura-navy/40 font-bold uppercase tracking-widest">Проектов</p>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-aura-navy mb-1">24/7</div>
                <p className="text-[10px] text-aura-navy/40 font-bold uppercase tracking-widest">Поддержка</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
