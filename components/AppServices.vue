<script setup lang="ts">
import { useWindowScroll, useElementBounding } from '@vueuse/core'
import { ref, computed, onMounted } from 'vue'

const containerRef = ref<HTMLElement | null>(null)
const isMounted = ref(false)
const { y: windowScrollY } = useWindowScroll()
const { top: elementTop, height: elementHeight } = useElementBounding(containerRef)

onMounted(() => {
  isMounted.value = true
})

const scrollYProgress = computed(() => {
  if (!isMounted.value || typeof window === 'undefined') return 0
  const viewportHeight = window.innerHeight
  const start = elementTop.value + windowScrollY.value - viewportHeight
  const end = elementTop.value + windowScrollY.value + elementHeight.value
  const progress = (windowScrollY.value - start) / (end - start)
  return Math.max(0, Math.min(1, progress))
})

const xTranslate = computed(() => {
  if (!isMounted.value) return 0
  return (scrollYProgress.value - 0.5) * -400
})

const backgroundY = computed(() => {
  if (!isMounted.value) return '0%'
  const range = 40 // percent
  const y = (scrollYProgress.value - 0.5) * range
  return `${y}%`
})
</script>

<template>
  <section id="services" ref="containerRef" class="py-32 bg-white relative overflow-hidden">
    <!-- Parallax Background Element -->
    <div 
      :style="{ transform: isMounted ? `translateY(${backgroundY})` : 'none' }"
      class="absolute top-0 left-0 w-full h-[140%] pointer-events-none z-0 opacity-[0.04] transition-transform duration-75 ease-out"
    >
      <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(15,37,75,0.1)_0%,transparent_70%)]" />
    </div>

    <ClientOnly>
      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div class="max-w-2xl">
            <span class="text-aura-navy font-display font-bold text-sm tracking-widest uppercase mb-4 block">Наши услуги</span>
            <h2 class="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-none text-aura-navy">
              Создание сайтов <br />
              <span class="text-aura-navy/30">в Худжанде</span>
            </h2>
          </div>
          <p class="max-w-xs text-aura-navy/50 text-lg font-light leading-relaxed">
            Профессиональная разработка сайтов в Таджикистане. Мы создаем цифровые решения, которые развивают ваш бизнес.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Bento Grid Item 1 -->
          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.95, y: 20 }"
            :visible="{ 
              opacity: 1, 
              scale: 1,
              y: 0,
              transition: {
                duration: 800
              }
            }"
            class="md:col-span-2 glass-card p-12 rounded-[2.5rem] flex flex-col justify-between h-[400px] group overflow-hidden relative"
          >
            <div class="relative z-10">
              <h3 class="text-4xl font-display font-bold mb-4 text-aura-navy">Разработка сайтов</h3>
              <p class="text-aura-navy/60 max-w-md">
                Создание современных и быстрых сайтов в Худжанде. От лендингов до сложных корпоративных порталов.
              </p>
            </div>
            <div class="absolute -bottom-20 -right-20 w-80 h-80 bg-aura-navy/5 blur-[80px] rounded-full group-hover:scale-125 transition-transform duration-700" />
            <div class="relative z-10 flex gap-4">
              <span class="px-4 py-1 rounded-full border border-aura-navy/10 text-xs font-bold uppercase tracking-widest text-aura-navy/60">Vue / Nuxt</span>
              <span class="px-4 py-1 rounded-full border border-aura-navy/10 text-xs font-bold uppercase tracking-widest text-aura-navy/60">Разработка</span>
            </div>
          </div>

          <!-- Bento Grid Item 2 -->
          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.95, y: 20 }"
            :visible="{ 
              opacity: 1, 
              scale: 1,
              y: 0,
              transition: {
                duration: 800,
                delay: 100
              }
            }"
            class="glass-card p-12 rounded-[2.5rem] flex flex-col justify-between h-[400px] group"
          >
            <div>
              <h3 class="text-4xl font-display font-bold mb-4 text-aura-navy">Веб-дизайн</h3>
              <p class="text-aura-navy/60">
                Премиальный дизайн, который выделяет ваш бренд среди конкурентов в Таджикистане.
              </p>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="px-4 py-1 rounded-full border border-aura-navy/10 text-xs font-bold uppercase tracking-widest text-aura-navy/60">UI/UX</span>
              <span class="px-4 py-1 rounded-full border border-aura-navy/10 text-xs font-bold uppercase tracking-widest text-aura-navy/60">Эстетика</span>
            </div>
          </div>

          <!-- Bento Grid Item 3 -->
          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.95, y: 20 }"
            :visible="{ 
              opacity: 1, 
              scale: 1,
              y: 0,
              transition: {
                duration: 800,
                delay: 200
              }
            }"
            class="glass-card p-12 rounded-[2.5rem] flex flex-col justify-between h-[400px] group"
          >
            <div>
              <h3 class="text-4xl font-display font-bold mb-4 text-aura-navy">Магазины</h3>
              <p class="text-aura-navy/60">
                Создание интернет-магазинов в Таджикистане с удобной оплатой и управлением.
              </p>
            </div>
            <div class="flex flex-wrap gap-2">
              <span class="px-4 py-1 rounded-full border border-aura-navy/10 text-xs font-bold uppercase tracking-widest text-aura-navy/60">E-commerce</span>
              <span class="px-4 py-1 rounded-full border border-aura-navy/10 text-xs font-bold uppercase tracking-widest text-aura-navy/60">Продажи</span>
            </div>
          </div>

          <!-- Bento Grid Item 4 -->
          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.95, y: 20 }"
            :visible="{ 
              opacity: 1, 
              scale: 1,
              y: 0,
              transition: {
                duration: 800,
                delay: 300
              }
            }"
            class="md:col-span-2 glass-card p-12 rounded-[2.5rem] flex flex-col justify-between h-[400px] group overflow-hidden relative"
          >
            <div class="relative z-10">
              <h3 class="text-4xl font-display font-bold mb-4 text-aura-navy">Продвижение</h3>
              <p class="text-aura-navy/60 max-w-md">
                SEO продвижение сайтов в Худжанде. Вывод вашего бизнеса на первые позиции в поиске.
              </p>
            </div>
            <div class="absolute -top-20 -right-20 w-80 h-80 bg-aura-navy/5 blur-[80px] rounded-full group-hover:scale-125 transition-transform duration-700" />
            <div class="relative z-10 flex gap-4">
              <span class="px-4 py-1 rounded-full border border-aura-navy/10 text-xs font-bold uppercase tracking-widest text-aura-navy/60">SEO</span>
              <span class="px-4 py-1 rounded-full border border-aura-navy/10 text-xs font-bold uppercase tracking-widest text-aura-navy/60">Маркетинг</span>
            </div>
          </div>
        </div>
      </div>
    </ClientOnly>

    <!-- Horizontal Scroll Section -->
    <div class="mt-32 overflow-hidden border-y border-aura-navy/5 py-24 bg-aura-navy/[0.02] relative">
      <div class="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div class="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
      
      <div class="flex whitespace-nowrap animate-marquee-infinite">
        <div class="flex gap-20 items-center px-10">
          <template v-for="i in 8" :key="i">
            <span class="text-7xl md:text-9xl font-display font-black text-aura-navy/[0.03] uppercase tracking-tighter hover:text-aura-navy/10 transition-colors cursor-default">
              Создание сайтов в Худжанде
            </span>
            <span class="w-4 h-4 rounded-full bg-aura-navy/10" />
            <span class="text-7xl md:text-9xl font-display font-black text-aura-navy/[0.03] uppercase tracking-tighter hover:text-aura-navy/10 transition-colors cursor-default">
              Разработка сайтов в Таджикистане
            </span>
            <span class="w-4 h-4 rounded-full bg-aura-navy/10" />
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes marquee-infinite {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee-infinite {
  display: flex;
  width: max-content;
  animation: marquee-infinite 40s linear infinite;
}

.animate-marquee-infinite:hover {
  animation-play-state: paused;
}
</style>
