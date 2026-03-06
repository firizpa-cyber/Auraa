import { motion } from 'motion/react';
import { ArrowUpRight, Plus } from 'lucide-react';
import { useState } from 'react';

const cases = [
  {
    title: 'Lumina App',
    category: 'Дизайн продукта',
    description: 'Интуитивно понятный интерфейс для управления умным домом с использованием ИИ.',
    image: 'https://picsum.photos/seed/aura-case-1/1200/800',
    tags: ['UI/UX', 'Mobile', 'AI']
  },
  {
    title: 'Vortex Platform',
    category: 'Разработка',
    description: 'Высокопроизводительная торговая платформа для криптоактивов с минимальной задержкой.',
    image: 'https://picsum.photos/seed/aura-case-2/1200/800',
    tags: ['Web3', 'React', 'Node.js']
  },
  {
    title: 'Nexus Identity',
    category: 'Брендинг',
    description: 'Полное визуальное переосмысление для глобальной технологической корпорации.',
    image: 'https://picsum.photos/seed/aura-case-3/1200/800',
    tags: ['Strategy', 'Logo', 'Brandbook']
  },
  {
    title: 'Aura Cloud',
    category: 'Инфраструктура',
    description: 'Облачное решение для масштабируемых корпоративных приложений.',
    image: 'https://picsum.photos/seed/aura-case-4/1200/800',
    tags: ['Cloud', 'DevOps', 'Scalability']
  }
];

export default function Cases() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="cases" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-aura-navy/40 font-bold text-[10px] tracking-[0.3em] uppercase mb-4 block"
            >
              Портфолио
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-aura-navy"
            >
              Избранные проекты
            </motion.h2>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="outline-button"
          >
            Все кейсы
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {cases.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group cursor-pointer relative"
            >
              <div className="relative aspect-[16/11] rounded-[2.5rem] overflow-hidden mb-8 border border-aura-navy/5 shadow-2xl shadow-aura-navy/5">
                {/* Image Reveal Animation */}
                <motion.div 
                  initial={{ scale: 1.2, filter: 'blur(10px)' }}
                  whileInView={{ scale: 1, filter: 'blur(0px)' }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-aura-navy/90 via-aura-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={hoveredIndex === i ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <div className="flex gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[9px] font-bold text-white uppercase tracking-wider border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-white/80 text-sm font-light leading-relaxed mb-6 max-w-sm">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-white font-display font-bold text-sm group/btn">
                      Смотреть кейс 
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </div>
                  </motion.div>
                </div>

                {/* Floating Action Button */}
                <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100">
                  <Plus className="w-6 h-6" />
                </div>
              </div>

              <div className="flex justify-between items-end px-4">
                <div>
                  <motion.h3 
                    className="text-2xl font-display font-bold text-aura-navy mb-2 group-hover:text-aura-navy/70 transition-colors"
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-aura-navy/40 text-[10px] font-bold uppercase tracking-[0.2em]">{project.category}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-aura-navy/10 flex items-center justify-center group-hover:bg-aura-navy group-hover:text-white transition-all duration-500">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
