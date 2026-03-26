<script setup lang="ts">
import { ref, computed } from 'vue'
import { Calculator as CalcIcon, ChevronRight, Sparkles, Loader2, Plus, Minus } from 'lucide-vue-next'
import { GoogleGenAI } from "@google/genai"

const SERVICES = [
  { id: 'web', name: 'Веб-разработка', basePrice: 5000 },
  { id: 'design', name: 'Дизайн продукта', basePrice: 3000 },
  { id: 'branding', name: 'Брендинг', basePrice: 4000 },
  { id: 'marketing', name: 'Маркетинг', basePrice: 2000 },
]

const OPTIONS = [
  { id: 'mobile', name: 'Мобильная версия', price: 1500 },
  { id: 'seo', name: 'SEO оптимизация', price: 1000 },
  { id: 'cms', name: 'Интеграция CMS', price: 2000 },
  { id: 'support', name: 'Техподдержка (1 мес)', price: 500 },
]

const selectedService = ref(SERVICES[0].id)
const selectedOptions = ref<string[]>([])
const pages = ref(1)
const aiSuggestion = ref<string | null>(null)
const isAiLoading = ref(false)

const total = computed(() => {
  const service = SERVICES.find(s => s.id === selectedService.value)
  const optionsPrice = selectedOptions.value.reduce((acc, optId) => {
    const option = OPTIONS.find(o => o.id === optId)
    return acc + (option?.price || 0)
  }, 0)
  
  const base = service?.basePrice || 0
  const sum = (base + optionsPrice) * (1 + (pages.value - 1) * 0.2)
  return Math.round(sum)
})

const toggleOption = (id: string) => {
  if (selectedOptions.value.includes(id)) {
    selectedOptions.value = selectedOptions.value.filter(o => o !== id)
  } else {
    selectedOptions.value.push(id)
  }
}

const getAiSuggestion = async () => {
  isAiLoading.value = true
  try {
    const config = useRuntimeConfig()
    if (!config.public.geminiApiKey) {
      aiSuggestion.value = "Пожалуйста, настройте API ключ для получения советов."
      return
    }
    const ai = new GoogleGenAI({ apiKey: config.public.geminiApiKey as string })
    const serviceName = SERVICES.find(s => s.id === selectedService.value)?.name
    const optionNames = selectedOptions.value.map(id => OPTIONS.find(o => o.id === id)?.name)

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Как эксперт по цифровым продуктам, предложи 2 коротких совета по улучшению проекта, если выбрана основная услуга "${serviceName}" и доп. опции: ${optionNames.join(', ') || 'нет'}. Ответь на русском языке, кратко и профессионально.`,
    })
    aiSuggestion.value = response.text || "Не удалось получить рекомендации."
  } catch (error) {
    console.error(error)
    aiSuggestion.value = "Ошибка при получении рекомендаций."
  } finally {
    isAiLoading.value = false
  }
}
</script>

<template>
  <section id="calculator" class="section-padding bg-aura-gray/10">
    <div class="max-w-5xl mx-auto px-6">
      <div class="text-center mb-12">
        <span class="text-aura-navy/40 font-bold text-[10px] tracking-wide uppercase mb-4 block">Калькулятор</span>
        <h2 class="text-aura-navy">Оцените ваш проект</h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div class="lg:col-span-7 space-y-8">
          <div>
            <h4 class="text-[10px] font-bold uppercase tracking-widest text-aura-navy/40 mb-4">Основная услуга</h4>
            <div class="grid grid-cols-2 gap-3">
              <button
                v-for="s in SERVICES"
                :key="s.id"
                @click="selectedService = s.id"
                :class="[
                  'p-4 rounded-xl border text-left transition-all duration-300',
                  selectedService === s.id
                    ? 'bg-aura-navy border-aura-navy text-white shadow-lg'
                    : 'bg-white border-aura-navy/5 text-aura-navy hover:border-aura-navy/20'
                ]"
              >
                <div class="text-sm font-bold mb-1">{{ s.name }}</div>
                <div :class="['text-[10px]', selectedService === s.id ? 'text-white/60' : 'text-aura-navy/40']">
                  от {{ s.basePrice.toLocaleString() }} TJS
                </div>
              </button>
            </div>
          </div>

          <div>
            <h4 class="text-[10px] font-bold uppercase tracking-widest text-aura-navy/40 mb-4">Дополнительно</h4>
            <div class="grid grid-cols-2 gap-3">
              <button
                v-for="o in OPTIONS"
                :key="o.id"
                @click="toggleOption(o.id)"
                :class="[
                  'p-4 rounded-xl border text-left transition-all duration-300',
                  selectedOptions.includes(o.id)
                    ? 'bg-aura-navy border-aura-navy text-white shadow-lg'
                    : 'bg-white border-aura-navy/5 text-aura-navy hover:border-aura-navy/20'
                ]"
              >
                <div class="text-sm font-bold mb-1">{{ o.name }}</div>
                <div :class="['text-[10px]', selectedOptions.includes(o.id) ? 'text-white/60' : 'text-aura-navy/40']">
                  +{{ o.price.toLocaleString() }} TJS
                </div>
              </button>
            </div>
          </div>

          <div>
            <div class="flex justify-between items-center mb-4">
              <h4 class="text-[10px] font-bold uppercase tracking-widest text-aura-navy/40">Объем (экраны/страницы)</h4>
              <div class="flex items-center gap-4 bg-aura-navy/5 px-3 py-1 rounded-lg border border-aura-navy/5">
                <button 
                  @click="pages = Math.max(1, pages - 1)"
                  class="hover:text-aura-navy transition-colors"
                >
                  <Minus class="w-3 h-3" />
                </button>
                <span class="text-sm font-bold w-6 text-center text-aura-navy">{{ pages }}</span>
                <button 
                  @click="pages++"
                  class="hover:text-aura-navy transition-colors"
                >
                  <Plus class="w-3 h-3" />
                </button>
              </div>
            </div>
            <div class="relative group py-6">
              <!-- Custom Slider Track Background -->
              <div class="absolute top-1/2 -translate-y-1/2 left-0 w-full h-2 bg-aura-navy/5 rounded-full overflow-hidden border border-aura-navy/5">
                <!-- Progress Bar with Gradient and Glow -->
                <div 
                  class="h-full bg-gradient-to-r from-aura-navy/40 via-aura-navy to-aura-navy/40 transition-all duration-300 shadow-[0_0_15px_rgba(15,37,75,0.3)]"
                  :style="{ width: `${(pages - 1) / 19 * 100}%` }"
                />
              </div>
              
              <input 
                type="range" 
                min="1" 
                max="20" 
                v-model.number="pages"
                class="absolute top-1/2 -translate-y-1/2 left-0 w-full h-2 opacity-0 cursor-pointer z-10"
              />
              
              <!-- Custom Thumb -->
              <div 
                class="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-aura-navy rounded-full shadow-xl pointer-events-none z-20 transition-transform duration-300 group-hover:scale-125 group-active:scale-110 flex items-center justify-center"
                :style="{ left: `calc(${(pages - 1) / 19 * 100}% - 12px)` }"
              >
                <div class="w-1.5 h-1.5 bg-aura-navy rounded-full animate-ping" />
              </div>

              <!-- Glow Effect -->
              <div 
                class="absolute top-1/2 -translate-y-1/2 w-12 h-12 bg-aura-navy/20 blur-2xl rounded-full pointer-events-none z-0 transition-all duration-300 opacity-0 group-hover:opacity-100"
                :style="{ left: `calc(${(pages - 1) / 19 * 100}% - 24px)` }"
              />
            </div>
          </div>
        </div>

        <div class="lg:col-span-5">
          <div class="glass-card p-8 rounded-2xl sticky top-24">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-2 bg-aura-navy/5 rounded-lg">
                <CalcIcon class="w-4 h-4 text-aura-navy" />
              </div>
              <h3 class="text-lg font-display font-bold text-aura-navy">Итого</h3>
            </div>

            <div class="relative overflow-hidden mb-2">
              <div 
                :key="total"
                v-motion
                :initial="{ y: 20, opacity: 0 }"
                :enter="{ y: 0, opacity: 1 }"
                class="text-4xl font-display font-bold text-aura-navy"
              >
                {{ total.toLocaleString() }} <span class="text-lg font-sans font-normal text-aura-navy/40">TJS</span>
              </div>
            </div>
            <p class="text-[10px] text-aura-navy/40 mb-8 uppercase tracking-widest font-bold">Ориентировочная стоимость</p>

            <div class="space-y-4 mb-8">
              <button 
                @click="getAiSuggestion"
                :disabled="isAiLoading"
                class="w-full flex items-center justify-center gap-2 py-3 px-4 bg-aura-navy/5 text-aura-navy rounded-xl text-[10px] font-bold hover:bg-aura-navy/10 transition-colors disabled:opacity-50"
              >
                <Loader2 v-if="isAiLoading" class="w-3 h-3 animate-spin" />
                <Sparkles v-else class="w-3 h-3" />
                Совет от ИИ
              </button>

              <div
                v-if="aiSuggestion"
                v-motion
                :initial="{ opacity: 0, height: 0 }"
                :enter="{ opacity: 1, height: 'auto' }"
                class="p-4 bg-aura-navy/5 rounded-xl border border-aura-navy/5 overflow-hidden"
              >
                <div class="text-[9px] font-bold text-aura-navy/40 uppercase tracking-widest mb-2 flex items-center gap-1">
                  <Sparkles class="w-2 h-2" /> Рекомендация
                </div>
                <p class="text-[11px] text-aura-navy/70 leading-relaxed italic">
                  "{{ aiSuggestion }}"
                </p>
              </div>
            </div>

            <NuxtLink 
              to="/brief" 
              class="navy-button w-full flex items-center justify-center gap-2 group"
            >
              Обсудить проект
              <ChevronRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
