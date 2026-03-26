<script setup lang="ts">
import { useWindowScroll, useElementBounding } from '@vueuse/core'
import { ref, computed, onMounted } from 'vue'
import { Zap, Shield, Globe, Cpu } from 'lucide-vue-next'

const features = [
  {
    icon: Zap,
    title: 'Высокая скорость',
    description: 'Создаем самые быстрые сайты в Худжанде благодаря оптимизации кода и современным технологиям.',
  },
  {
    icon: Shield,
    title: 'Безопасность',
    description: 'Надежная защита вашего бизнеса и данных клиентов по мировым стандартам безопасности.',
  },
  {
    icon: Globe,
    title: 'Локальный рынок',
    description: 'Глубокое понимание рынка Таджикистана помогает нам создавать эффективные решения для вашего бизнеса.',
  },
  {
    icon: Cpu,
    title: 'Инновации',
    description: 'Интеграция современных ИИ-инструментов и автоматизации для роста вашей компании.',
  },
]

const containerRef = ref<HTMLElement | null>(null)
const isMounted = ref(false)
const { y: windowScrollY } = useWindowScroll()
const { top: elementTop, height: elementHeight } = useElementBounding(containerRef)

onMounted(() => {
  isMounted.value = true
})

const scrollYProgress = computed(() => {
  if (!isMounted.value || typeof window === 'undefined' || !containerRef.value) return 0
  const viewportHeight = window.innerHeight
  const rect = containerRef.value.getBoundingClientRect()
  const top = rect.top + windowScrollY.value
  const height = rect.height
  
  const start = top - viewportHeight
  const end = top + height
  const progress = (windowScrollY.value - start) / (end - start)
  return Math.max(0, Math.min(1, progress))
})

const backgroundY = computed(() => {
  if (!isMounted.value) return '0%'
  const range = 30 // percent
  const y = (scrollYProgress.value - 0.5) * range
  return `${y}%`
})
</script>

<template>
  <section id="features" ref="containerRef" class="section-padding bg-aura-gray/20 relative overflow-hidden">
    <!-- Parallax Background Element -->
    <div 
      :style="{ transform: isMounted ? `translateY(${backgroundY})` : 'none' }"
      class="absolute top-0 left-0 w-full h-[130%] pointer-events-none z-0 opacity-[0.05] transition-transform duration-75 ease-out"
    >
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-aura-navy rounded-full blur-[200px]" />
    </div>

    <ClientOnly>
      <div class="max-w-6xl mx-auto px-6 relative z-10">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div class="max-w-xl">
            <span class="text-aura-navy/40 font-bold text-[10px] tracking-[0.2em] uppercase mb-4 block">Наши преимущества</span>
            <h2 class="text-aura-navy">Почему выбирают <br /><span class="text-aura-navy/30">Aura Digital в Худжанде</span></h2>
          </div>
          <p class="text-aura-navy/50 text-sm max-w-xs leading-relaxed">
            Мы используем передовой стек технологий для создания самых быстрых и надежных сайтов в Таджикистане.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(feature, i) in features"
            :key="feature.title"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible="{ 
              opacity: 1, 
              y: 0,
              transition: {
                delay: i * 100,
                duration: 800
              }
            }"
            class="glass-card p-8 rounded-2xl hover:bg-white transition-all duration-300"
          >
            <div class="mb-6 p-3 bg-aura-navy/5 rounded-xl w-fit">
              <component :is="feature.icon" class="w-5 h-5 text-aura-navy" />
            </div>
            <h3 class="text-lg font-display font-bold mb-3 text-aura-navy">{{ feature.title }}</h3>
            <p class="text-aura-navy/50 text-xs leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </ClientOnly>
  </section>
</template>
