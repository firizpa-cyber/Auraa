import { motion, AnimatePresence } from 'motion/react';
import { useState, FormEvent } from 'react';
import { Send, CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Brief() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Веб-разработка',
    budget: '',
    description: '',
    timeline: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-6 pt-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full text-center p-12 glass-card rounded-2xl"
        >
          <div className="w-20 h-20 bg-aura-navy/5 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-aura-navy" />
          </div>
          <h2 className="text-2xl font-display font-bold text-aura-navy mb-4">Бриф отправлен!</h2>
          <p className="text-aura-navy/50 mb-8 leading-relaxed text-sm">
            Спасибо за доверие. Наш стратег изучит ваш проект и свяжется с вами в течение 24 часов.
          </p>
          <Link to="/" className="navy-button w-full inline-block text-center">Вернуться на главную</Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-aura-gray/10 pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <Link to="/" className="text-[10px] font-bold uppercase tracking-widest text-aura-navy/40 hover:text-aura-navy transition-colors flex items-center gap-2 mb-8">
            <ChevronLeft className="w-3 h-3" /> Назад
          </Link>
          <div className="flex justify-between items-end mb-4">
            <h1 className="text-3xl md:text-4xl font-display font-bold">Бриф проекта</h1>
            <span className="text-[10px] font-bold text-aura-navy/40 uppercase tracking-widest">Шаг {step} из 3</span>
          </div>
          <div className="h-1 bg-aura-navy/5 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-aura-navy"
              initial={{ width: '33%' }}
              animate={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 rounded-2xl">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-lg font-display font-bold text-aura-navy mb-8">Контактная информация</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-aura-navy/40 mb-2">Ваше имя</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-white border border-aura-navy/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-aura-navy/20 transition-colors"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-aura-navy/40 mb-2">Email</label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-white border border-aura-navy/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-aura-navy/20 transition-colors"
                      placeholder="hello@example.com"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <button type="button" onClick={nextStep} className="navy-button w-full flex items-center justify-center gap-2">
                  Далее <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-lg font-display font-bold text-aura-navy mb-8">О проекте</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-aura-navy/40 mb-2">Тип услуги</label>
                    <select 
                      className="w-full bg-white border border-aura-navy/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-aura-navy/20 transition-colors appearance-none"
                      value={formData.projectType}
                      onChange={e => setFormData({...formData, projectType: e.target.value})}
                    >
                      <option>Веб-разработка</option>
                      <option>Брендинг</option>
                      <option>Дизайн продукта</option>
                      <option>Маркетинг</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-aura-navy/40 mb-2">Примерный бюджет</label>
                    <input 
                      type="text" 
                      className="w-full bg-white border border-aura-navy/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-aura-navy/20 transition-colors"
                      placeholder="от 100,000 руб."
                      value={formData.budget}
                      onChange={e => setFormData({...formData, budget: e.target.value})}
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <button type="button" onClick={prevStep} className="outline-button flex-1">Назад</button>
                  <button type="button" onClick={nextStep} className="navy-button flex-[2] flex items-center justify-center gap-2">
                    Далее <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <h3 className="text-lg font-display font-bold text-aura-navy mb-8">Детали</h3>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-aura-navy/40 mb-2">Описание задачи</label>
                  <textarea 
                    rows={5}
                    className="w-full bg-white border border-aura-navy/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-aura-navy/20 transition-colors resize-none"
                    placeholder="Расскажите о ваших целях..."
                    value={formData.description}
                    onChange={e => setFormData({...formData, description: e.target.value})}
                  />
                </div>
                <div className="flex gap-4">
                  <button type="button" onClick={prevStep} className="outline-button flex-1">Назад</button>
                  <button type="submit" className="navy-button flex-[2] flex items-center justify-center gap-2">
                    Отправить бриф <Send className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </div>
  );
}
