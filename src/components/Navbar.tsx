import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'О нас', href: '/#about' },
    { name: 'Преимущества', href: '/#features' },
    { name: 'Услуги', href: '/#services' },
    { name: 'Кейсы', href: '/#cases' },
    { name: 'Калькулятор', href: '/#calculator' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-aura-navy/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link 
          to="/"
          className="text-2xl font-display font-bold tracking-tighter text-aura-navy"
        >
          AURA<span className="text-aura-navy/40">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-aura-navy/60 hover:text-aura-navy transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <Link
            to="/brief"
            className="px-5 py-2 bg-aura-navy text-white rounded-full text-sm font-semibold hover:bg-aura-navy/90 transition-all duration-300"
          >
            Заполнить бриф
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-aura-navy"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-b border-aura-navy/5 px-6 py-8 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-display font-medium text-aura-navy"
            >
              {link.name}
            </a>
          ))}
          <Link 
            to="/brief"
            onClick={() => setIsOpen(false)}
            className="w-full py-4 bg-aura-navy text-white rounded-xl font-bold text-center"
          >
            Заполнить бриф
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
