import { motion } from 'motion/react';

const stages = [
  {
    number: '01',
    title: 'Брифинг и Анализ',
    description: 'Погружаемся в ваш бизнес, изучаем конкурентов и определяем ключевые цели проекта.',
  },
  {
    number: '02',
    title: 'Проектирование',
    description: 'Создаем архитектуру, прототипы и продумываем пользовательский опыт (UX).',
  },
  {
    number: '03',
    title: 'Дизайн',
    description: 'Разрабатываем визуальную концепцию, которая отражает ценности вашего бренда.',
  },
  {
    number: '04',
    title: 'Разработка',
    description: 'Превращаем макеты в живой продукт с использованием современного стека технологий.',
  },
  {
    number: '05',
    title: 'Запуск и Поддержка',
    description: 'Тестируем, разворачиваем проект и обеспечиваем его стабильную работу после релиза.',
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding alcantara-texture overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-aura-navy/40 font-bold text-[10px] tracking-[0.3em] uppercase mb-4 block"
          >
            Методология
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-aura-navy"
          >
            Этапы проектирования
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stages.map((stage, i) => (
            <motion.div
              key={stage.number}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10 }}
              className="relative p-8 glass-card rounded-3xl border border-aura-navy/5 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden"
            >
              {/* 3D Number Background */}
              <div className="absolute -right-4 -top-4 text-8xl font-display font-black text-aura-navy/[0.03] group-hover:text-aura-navy/[0.06] transition-colors pointer-events-none">
                {stage.number}
              </div>

              <div className="relative z-10">
                <div className="w-10 h-10 bg-aura-navy text-white rounded-xl flex items-center justify-center font-display font-bold text-sm mb-6 shadow-lg shadow-aura-navy/20">
                  {stage.number}
                </div>
                
                <h3 className="text-lg font-display font-bold mb-4 text-aura-navy leading-tight">
                  {stage.title}
                </h3>
                
                <p className="text-aura-navy/60 text-[13px] leading-relaxed font-light">
                  {stage.description}
                </p>
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 h-1 bg-aura-navy/10 w-0 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
