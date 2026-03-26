<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section class="py-32 bg-white relative overflow-hidden">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-aura-navy/5 blur-[150px] rounded-full pointer-events-none" />
    
    <ClientOnly>
      <div class="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visible-once="{ opacity: 1, scale: 1 }"
          class="glass-card p-20 md:p-32 rounded-[4rem] border border-aura-navy/10"
        >
          <span class="text-aura-navy font-display font-bold text-sm tracking-widest uppercase mb-8 block">Готовы к росту?</span>
          <h2 class="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-none mb-12 text-aura-navy">
            Заказать сайт <br />
            <span class="text-gradient">в Худжанде</span>
          </h2>
          <p class="max-w-2xl mx-auto text-xl text-aura-navy/60 font-light leading-relaxed mb-16">
            Объедините усилия with Aura Digital и раскройте весь потенциал вашего бизнеса в Таджикистане. Мы готовы создать для вас лучший сайт на рынке.
          </p>
          <NuxtLink to="/brief" class="group navy-button inline-flex items-center gap-4 mx-auto text-xl">
            Начать проект
            <ArrowRight class="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </NuxtLink>
        </div>
      </div>
    </ClientOnly>
  </section>
</template>
