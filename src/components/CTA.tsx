import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-aura-navy/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-20 md:p-32 rounded-[4rem] border border-aura-navy/10"
        >
          <span className="text-aura-navy font-display font-bold text-sm tracking-widest uppercase mb-8 block">Готовы к трансформации?</span>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-none mb-12 text-aura-navy">
            Давайте строить <br />
            <span className="text-gradient">Вместе</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-aura-navy/60 font-light leading-relaxed mb-16">
            Объедините усилия с Aura и раскройте весь потенциал вашего цифрового присутствия. Мы готовы вывести ваш бренд на новый уровень.
          </p>
          <Link to="/brief" className="group navy-button inline-flex items-center gap-4 mx-auto text-xl">
            Начать проект
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
