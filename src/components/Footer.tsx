import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 bg-white border-t border-aura-navy/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-2">
            <div className="text-3xl font-display font-bold tracking-tighter mb-8 text-aura-navy">
              AURA<span className="text-aura-navy/40">.</span>
            </div>
            <p className="max-w-sm text-aura-navy/40 text-lg leading-relaxed mb-8">
              Создание премиальных цифровых продуктов, которые вдохновляют и обеспечивают значимый рост для передовых брендов.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-aura-navy/40 hover:text-aura-navy transition-colors"><Instagram /></a>
              <a href="#" className="text-aura-navy/40 hover:text-aura-navy transition-colors"><Twitter /></a>
              <a href="#" className="text-aura-navy/40 hover:text-aura-navy transition-colors"><Linkedin /></a>
              <a href="#" className="text-aura-navy/40 hover:text-aura-navy transition-colors"><Github /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-aura-navy">Навигация</h4>
            <ul className="flex flex-col gap-4 text-aura-navy/40">
              <li><a href="#about" className="hover:text-aura-navy transition-colors">О нас</a></li>
              <li><a href="#features" className="hover:text-aura-navy transition-colors">Преимущества</a></li>
              <li><a href="#services" className="hover:text-aura-navy transition-colors">Услуги</a></li>
              <li><a href="#cases" className="hover:text-aura-navy transition-colors">Кейсы</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-aura-navy">Контакты</h4>
            <ul className="flex flex-col gap-4 text-aura-navy/40">
              <li>hello@aura.digital</li>
              <li>+7 (999) 000-0000</li>
              <li>ул. Инноваций, 123<br />Москва, Россия</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-aura-navy/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-aura-navy/20 font-medium">
          <p>© 2026 Aura Digital Agency. Все права защищены.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-aura-navy transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-aura-navy transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
