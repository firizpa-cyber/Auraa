import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section id="services" ref={containerRef} className="py-32 bg-white relative overflow-hidden">
      {/* Parallax Background Element */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute top-0 left-0 w-full h-[140%] pointer-events-none z-0 opacity-[0.04]"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(15,37,75,0.1)_0%,transparent_70%)]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-aura-navy font-display font-bold text-sm tracking-widest uppercase mb-4 block">Наши услуги</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-none text-aura-navy">
              Комплексные <br />
              <span className="text-aura-navy/30">Цифровые решения</span>
            </h2>
          </div>
          <p className="max-w-xs text-aura-navy/50 text-lg font-light leading-relaxed">
            Мы предоставляем полный спектр услуг, чтобы ваш бренд процветал в цифровую эпоху.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bento Grid Item 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 glass-card p-12 rounded-[2.5rem] flex flex-col justify-between h-[400px] group overflow-hidden relative"
          >
            <div className="relative z-10">
              <h3 className="text-4xl font-display font-bold mb-4 text-aura-navy">Дизайн продукта</h3>
              <p className="text-aura-navy/60 max-w-md">
                Создание интуитивно понятных и красивых пользовательских интерфейсов для исключительного опыта.
              </p>
            </div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-aura-navy/5 blur-[80px] rounded-full group-hover:scale-125 transition-transform duration-700" />
            <div className="relative z-10 flex gap-4">
              <span className="px-4 py-1 rounded-full border border-aura-navy/10 text-xs font-bold uppercase tracking-widest text-aura-navy/60">UI/UX</span>
              <span className="px-4 py-1 rounded-full border border-aura-navy/10 text-xs font-bold uppercase tracking-widest text-aura-navy/60">Прототипирование</span>
            </div>
          </motion.div>

          {/* Bento Grid Item 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-12 rounded-[2.5rem] flex flex-col justify-between h-[400px] group"
          >
            <div>
              <h3 className="text-4xl font-display font-bold mb-4 text-aura-navy">Брендинг</h3>
              <p className="text-aura-navy/60">
                Создание уникальных визуальных идентичностей, рассказывающих историю вашего бренда.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-1 rounded-full border border-aura-navy/10 text-xs font-bold uppercase tracking-widest text-aura-navy/60">Логотип</span>
              <span className="px-4 py-1 rounded-full border border-aura-navy/10 text-xs font-bold uppercase tracking-widest text-aura-navy/60">Стратегия</span>
            </div>
          </motion.div>

          {/* Bento Grid Item 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-12 rounded-[2.5rem] flex flex-col justify-between h-[400px] group"
          >
            <div>
              <h3 className="text-4xl font-display font-bold mb-4 text-aura-navy">Разработка</h3>
              <p className="text-aura-navy/60">
                Создание надежных и масштабируемых веб- и мобильных приложений.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-1 rounded-full border border-aura-navy/10 text-xs font-bold uppercase tracking-widest text-aura-navy/60">React</span>
              <span className="px-4 py-1 rounded-full border border-aura-navy/10 text-xs font-bold uppercase tracking-widest text-aura-navy/60">Node.js</span>
            </div>
          </motion.div>

          {/* Bento Grid Item 4 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 glass-card p-12 rounded-[2.5rem] flex flex-col justify-between h-[400px] group overflow-hidden relative"
          >
            <div className="relative z-10">
              <h3 className="text-4xl font-display font-bold mb-4 text-aura-navy">Маркетинг</h3>
              <p className="text-aura-navy/60 max-w-md">
                Стимулирование роста с помощью стратегий, основанных на данных, и креативного контента.
              </p>
            </div>
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-aura-navy/5 blur-[80px] rounded-full group-hover:scale-125 transition-transform duration-700" />
            <div className="relative z-10 flex gap-4">
              <span className="px-4 py-1 rounded-full border border-aura-navy/10 text-xs font-bold uppercase tracking-widest text-aura-navy/60">SEO</span>
              <span className="px-4 py-1 rounded-full border border-aura-navy/10 text-xs font-bold uppercase tracking-widest text-aura-navy/60">SMM</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
