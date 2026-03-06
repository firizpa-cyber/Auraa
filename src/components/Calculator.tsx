import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator as CalcIcon, ChevronRight, Sparkles, Loader2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SERVICES = [
  { id: 'web', name: 'Веб-разработка', basePrice: 50000 },
  { id: 'design', name: 'Дизайн продукта', basePrice: 30000 },
  { id: 'branding', name: 'Брендинг', basePrice: 40000 },
  { id: 'marketing', name: 'Маркетинг', basePrice: 20000 },
];

const OPTIONS = [
  { id: 'mobile', name: 'Мобильная версия', price: 15000 },
  { id: 'seo', name: 'SEO оптимизация', price: 10000 },
  { id: 'cms', name: 'Интеграция CMS', price: 20000 },
  { id: 'support', name: 'Техподдержка (1 мес)', price: 5000 },
];

export default function Calculator() {
  const [selectedService, setSelectedService] = useState(SERVICES[0].id);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [pages, setPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [aiSuggestion, setAiSuggestion] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);

  useEffect(() => {
    const service = SERVICES.find(s => s.id === selectedService);
    const optionsPrice = selectedOptions.reduce((acc, optId) => {
      const option = OPTIONS.find(o => o.id === optId);
      return acc + (option?.price || 0);
    }, 0);
    
    const base = service?.basePrice || 0;
    const sum = (base + optionsPrice) * (1 + (pages - 1) * 0.2);
    setTotal(Math.round(sum));
  }, [selectedService, selectedOptions, pages]);

  const toggleOption = (id: string) => {
    setSelectedOptions(prev => 
      prev.includes(id) ? prev.filter(o => o !== id) : [...prev, id]
    );
  };

  const getAiSuggestion = async () => {
    setIsAiLoading(true);
    try {
      const serviceName = SERVICES.find(s => s.id === selectedService)?.name;
      const optionNames = selectedOptions.map(id => OPTIONS.find(o => o.id === id)?.name);

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Как эксперт по цифровым продуктам, предложи 2 коротких совета по улучшению проекта, если выбрана основная услуга "${serviceName}" и доп. опции: ${optionNames.join(', ') || 'нет'}. Ответь на русском языке, кратко и профессионально.`,
      });
      setAiSuggestion(response.text || "Не удалось получить рекомендации.");
    } catch (error) {
      console.error(error);
      setAiSuggestion("Ошибка при получении рекомендаций.");
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <section id="calculator" className="section-padding bg-aura-gray/10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-aura-navy/40 font-bold text-[10px] tracking-[0.2em] uppercase mb-4 block">Калькулятор</span>
          <h2 className="text-aura-navy">Оцените ваш проект</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-aura-navy/40 mb-4">Основная услуга</h4>
              <div className="grid grid-cols-2 gap-3">
                {SERVICES.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedService(s.id)}
                    className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                      selectedService === s.id
                        ? 'bg-aura-navy border-aura-navy text-white shadow-lg'
                        : 'bg-white border-aura-navy/5 text-aura-navy hover:border-aura-navy/20'
                    }`}
                  >
                    <div className="text-sm font-bold mb-1">{s.name}</div>
                    <div className={`text-[10px] ${selectedService === s.id ? 'text-white/60' : 'text-aura-navy/40'}`}>
                      от {s.basePrice.toLocaleString()} ₽
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-aura-navy/40 mb-4">Дополнительно</h4>
              <div className="grid grid-cols-2 gap-3">
                {OPTIONS.map(o => (
                  <button
                    key={o.id}
                    onClick={() => toggleOption(o.id)}
                    className={`p-4 rounded-xl border text-left transition-all duration-300 ${
                      selectedOptions.includes(o.id)
                        ? 'bg-aura-navy border-aura-navy text-white shadow-lg'
                        : 'bg-white border-aura-navy/5 text-aura-navy hover:border-aura-navy/20'
                    }`}
                  >
                    <div className="text-sm font-bold mb-1">{o.name}</div>
                    <div className={`text-[10px] ${selectedOptions.includes(o.id) ? 'text-white/60' : 'text-aura-navy/40'}`}>
                      +{o.price.toLocaleString()} ₽
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-aura-navy/40">Объем (экраны/страницы)</h4>
                <div className="flex items-center gap-4 bg-aura-navy/5 px-3 py-1 rounded-lg">
                  <button onClick={() => setPages(Math.max(1, pages - 1))}><Minus className="w-3 h-3" /></button>
                  <span className="text-sm font-bold w-4 text-center">{pages}</span>
                  <button onClick={() => setPages(pages + 1)}><Plus className="w-3 h-3" /></button>
                </div>
              </div>
              <input 
                type="range" 
                min="1" 
                max="20" 
                value={pages}
                onChange={(e) => setPages(parseInt(e.target.value))}
                className="w-full h-1 bg-aura-navy/5 rounded-lg appearance-none cursor-pointer accent-aura-navy"
              />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="glass-card p-8 rounded-2xl sticky top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-aura-navy/5 rounded-lg">
                  <CalcIcon className="w-4 h-4 text-aura-navy" />
                </div>
                <h3 className="text-lg font-display font-bold text-aura-navy">Итого</h3>
              </div>

              <div className="text-4xl font-display font-bold text-aura-navy mb-2">
                {total.toLocaleString()} <span className="text-lg font-sans font-normal text-aura-navy/40">₽</span>
              </div>
              <p className="text-[10px] text-aura-navy/40 mb-8 uppercase tracking-widest font-bold">Ориентировочная стоимость</p>

              <div className="space-y-4 mb-8">
                <button 
                  onClick={getAiSuggestion}
                  disabled={isAiLoading}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-aura-navy/5 text-aura-navy rounded-xl text-[10px] font-bold hover:bg-aura-navy/10 transition-colors disabled:opacity-50"
                >
                  {isAiLoading ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
                  Совет от ИИ
                </button>

                <AnimatePresence>
                  {aiSuggestion && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 bg-aura-navy/5 rounded-xl border border-aura-navy/5"
                    >
                      <div className="text-[9px] font-bold text-aura-navy/40 uppercase tracking-widest mb-2 flex items-center gap-1">
                        <Sparkles className="w-2 h-2" /> Рекомендация
                      </div>
                      <p className="text-[11px] text-aura-navy/70 leading-relaxed italic">
                        "{aiSuggestion}"
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link 
                to="/brief" 
                className="navy-button w-full flex items-center justify-center gap-2 group"
              >
                Обсудить проект
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
