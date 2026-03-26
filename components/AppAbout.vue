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
  const range = 20 // percent
  const y = (scrollYProgress.value - 0.5) * range
  return `${y}%`
})
</script>

<template>
  <section id="about" ref="containerRef" class="section-padding bg-white relative overflow-hidden">
    <!-- Parallax Background Element -->
    <div 
      :style="{ transform: isMounted ? `translateY(${backgroundY})` : 'none' }"
      class="absolute top-0 left-0 w-full h-[120%] pointer-events-none z-0 opacity-[0.03] transition-transform duration-75 ease-out"
    >
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-aura-navy rounded-full blur-[100px]" />
      <div class="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-aura-navy rounded-full blur-[150px]" />
    </div>

    <ClientOnly>
      <div class="max-w-6xl mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible="{ 
              opacity: 1, 
              x: 0,
              transition: {
                duration: 800
              }
            }"
            class="lg:col-span-5 relative"
          >
            <div class="aspect-[4/5] rounded-2xl overflow-hidden border border-aura-navy/5 shadow-xl">
              <img 
                src="https://picsum.photos/seed/aura-studio/800/1000" 
                alt="Веб-студия Aura в Худжанде" 
                class="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div class="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl hidden md:block">
              <div class="text-3xl font-display font-bold text-aura-navy">5+</div>
              <div class="text-[10px] font-bold uppercase tracking-widest text-aura-navy/40">Лет в Таджикистане</div>
            </div>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, x: 30 }"
            :visible="{ 
              opacity: 1, 
              x: 0,
              transition: {
                duration: 800
              }
            }"
            class="lg:col-span-7"
          >
            <span class="text-aura-navy/40 font-bold text-[10px] tracking-[0.2em] uppercase mb-4 block">О нашей студии</span>
            <AppReveal>
              <h2 class="mb-6">
                Веб-студия Aura <br />
                <span class="text-aura-navy/30 text-4xl md:text-5xl">в Худжанде</span>
              </h2>
            </AppReveal>
            <div class="space-y-4 text-aura-navy/60 font-light leading-relaxed text-sm md:text-base max-w-xl">
              <p>
                Aura Digital — это ведущая веб-студия в Худжанде, специализирующаяся на создании высокотехнологичных сайтов и цифровых стратегий. Мы помогаем бизнесу в Таджикистане выходить на новый уровень.
              </p>
              <p>
                Наша команда объединяет инженеров и дизайнеров, которые верят, что создание сайтов в Таджикистане должно соответствовать мировым стандартам качества и эстетики.
              </p>
            </div>

            <div class="grid grid-cols-2 gap-8 mt-10 border-t border-aura-navy/5 pt-10">
              <div>
                <div class="text-2xl font-display font-bold text-aura-navy mb-1">50+</div>
                <p class="text-[10px] text-aura-navy/40 font-bold uppercase tracking-widest">Проектов</p>
              </div>
              <div>
                <div class="text-2xl font-display font-bold text-aura-navy mb-1">12+</div>
                <p class="text-[10px] text-aura-navy/40 font-bold uppercase tracking-widest">Специалистов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientOnly>
  </section>
</template>
