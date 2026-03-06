import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Zap, Shield, Globe, Cpu } from 'lucide-react';

const features = [
  {
    icon: <Zap className="w-5 h-5 text-aura-navy" />,
    title: 'Скорость',
    description: 'Оптимизация производительности на уровне ядра системы.',
  },
  {
    icon: <Shield className="w-5 h-5 text-aura-navy" />,
    title: 'Безопасность',
    description: 'Защита данных по стандартам корпоративного уровня.',
  },
  {
    icon: <Globe className="w-5 h-5 text-aura-navy" />,
    title: 'Масштаб',
    description: 'Инфраструктура, готовая к росту вашего бизнеса.',
  },
  {
    icon: <Cpu className="w-5 h-5 text-aura-navy" />,
    title: 'Интеллект',
    description: 'Интеграция ИИ для автоматизации сложных процессов.',
  },
];

export default function Features() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section id="features" ref={containerRef} className="section-padding bg-aura-gray/20 relative overflow-hidden">
      {/* Parallax Background Element */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute top-0 left-0 w-full h-[130%] pointer-events-none z-0 opacity-[0.05]"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-aura-navy rounded-full blur-[200px]" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-aura-navy/40 font-bold text-[10px] tracking-[0.2em] uppercase mb-4 block">Преимущества</span>
            <h2 className="text-aura-navy">Технологическое превосходство</h2>
          </div>
          <p className="text-aura-navy/50 text-sm max-w-xs leading-relaxed">
            Мы используем стек технологий, который обеспечивает стабильность и гибкость вашего продукта.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:bg-white transition-all duration-300"
            >
              <div className="mb-6 p-3 bg-aura-navy/5 rounded-xl w-fit">
                {feature.icon}
              </div>
              <h3 className="text-lg font-display font-bold mb-3 text-aura-navy">{feature.title}</h3>
              <p className="text-aura-navy/50 text-xs leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
