<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden alcantara-texture">
    <!-- Background Glow -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aura-navy/5 blur-[120px] rounded-full pointer-events-none" />

    <ClientOnly>
      <!-- Floating 3D Elements -->
      <div 
        v-motion
        :initial="{
          y: -20,
          rotate: 10,
          opacity: 0
        }"
        :enter="{ 
          y: 0,
          rotate: 0,
          opacity: 1,
          transition: {
            duration: 1000,
            ease: 'easeOut'
          }
        }"
        :visible="{
          y: [0, -15, 0],
          rotate: [0, 5, 0],
          transition: {
            duration: 5000,
            repeat: Infinity,
            ease: 'easeInOut'
          }
        }"
        class="absolute top-1/4 left-10 w-32 h-32 bg-aura-navy/5 rounded-[2rem] border border-aura-navy/10 backdrop-blur-xl hidden lg:block"
      />
      <div 
        v-motion
        :initial="{
          y: 20,
          rotate: -10,
          opacity: 0
        }"
        :enter="{ 
          y: 0,
          rotate: 0,
          opacity: 1,
          transition: {
            duration: 1000,
            ease: 'easeOut'
          }
        }"
        :visible="{
          y: [0, 20, 0],
          rotate: [0, -8, 0],
          transition: {
            duration: 7000,
            repeat: Infinity,
            ease: 'easeInOut'
          }
        }"
        class="absolute bottom-1/4 right-10 w-48 h-48 bg-aura-navy/5 rounded-full border border-aura-navy/10 backdrop-blur-xl hidden lg:block"
      />

      <div class="max-w-7xl mx-auto px-6 text-center z-10 flex flex-col items-center">
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 800,
              ease: 'easeOut'
            }
          }"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-aura-navy/10 bg-aura-navy/5 text-[10px] font-bold tracking-[0.2em] uppercase mb-12 mt-12 text-aura-navy"
        >
          <span class="w-2 h-2 rounded-full bg-aura-navy animate-pulse" />
          Разработка сайтов в Таджикистане
        </div>

        <AppReveal>
          <h1 class="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.9] mb-8 text-aura-navy">
            Создание сайтов <br />
            <span class="text-gradient">в Худжанде</span>
          </h1>
        </AppReveal>

        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 800,
              delay: 400,
              ease: 'easeOut'
            }
          }"
          class="max-w-2xl mx-auto text-lg md:text-xl text-aura-navy/60 font-light leading-relaxed mb-12"
        >
          Aura — профессиональная разработка сайтов в Худжанде и по всему Таджикистану. Мы создаем премиальные цифровые продукты, которые вдохновляют и обеспечивают значимый рост вашего бизнеса.
        </p>

        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 800,
              delay: 600,
              ease: 'easeOut'
            }
          }"
          class="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <NuxtLink to="/brief" class="group navy-button flex items-center gap-2">
            Начать проект
            <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </NuxtLink>
          <a href="#cases" class="outline-button">
            Наши работы
          </a>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ 
          opacity: 1,
          transition: {
            delay: 1500,
            duration: 1000
          }
        }"
        class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span class="text-[10px] uppercase tracking-[0.2em] text-aura-navy/40 font-bold">Скролл</span>
        <div class="w-[1px] h-12 bg-gradient-to-b from-aura-navy to-transparent" />
      </div>
    </ClientOnly>
  </section>
</template>
