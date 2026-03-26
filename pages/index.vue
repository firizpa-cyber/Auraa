<script setup lang="ts">
// SEO is already handled in nuxt.config.ts, but we can add page-specific meta here if needed
useHead({
  title: 'Создание сайтов в Худжанде | Aura Digital Agency',
  meta: [
    { name: 'description', content: 'Aura Digital — профессиональное создание сайтов в Худжанде и Таджикистане. Разработка веб-сайтов, интернет-магазинов и продвижение бизнеса в интернете.' },
    { name: 'keywords', content: 'создание сайтов в худжанде, разработка сайтов таджикистан, заказать сайт худжанд, веб студия таджикистан, создание интернет магазина худжанд, aura digital tajikistan' }
  ]
})
</script>

<template>
  <div class="relative alcantara-bg overflow-hidden">
    <!-- Fluffy 3D Background Elements -->
    <div class="fixed inset-0 pointer-events-none z-0">
      <div 
        v-motion
        :initial="{ x: 0, y: 0, scale: 1 }"
        :enter="{ 
          x: [0, 50, 0], 
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
          transition: {
            duration: 25000,
            repeat: Infinity,
            ease: 'easeInOut'
          }
        }"
        class="absolute top-[-15%] left-[-10%] w-[60vw] h-[60vw] bg-aura-navy/[0.04] rounded-full blur-[100px] fluffy-blur" 
      />
      <div 
        v-motion
        :initial="{ x: 0, y: 0, scale: 1 }"
        :enter="{ 
          x: [0, -40, 0], 
          y: [0, 60, 0],
          scale: [1, 1.05, 1],
          transition: {
            duration: 30000,
            repeat: Infinity,
            ease: 'easeInOut'
          }
        }"
        class="absolute bottom-[-15%] right-[-10%] w-[70vw] h-[70vw] bg-aura-navy/[0.03] rounded-full blur-[120px] fluffy-blur" 
      />
      <div 
        v-motion
        :initial="{ opacity: 0.01, scale: 0.8 }"
        :enter="{ 
          opacity: [0.01, 0.03, 0.01],
          scale: [0.8, 1.2, 0.8],
          transition: {
            duration: 20000,
            repeat: Infinity,
            ease: 'easeInOut'
          }
        }"
        class="absolute top-[30%] left-[20%] w-[40vw] h-[40vw] bg-aura-navy/[0.02] rounded-full blur-[150px] fluffy-blur" 
      />
    </div>

    <div class="relative z-20">
      <AppBackgroundText text="KHUJAND" top="10%" left="-5%" :rotate="-10" :speed="0.5" :opacity="0.04" />
      <AppBackgroundText text="TAJIKISTAN" top="25%" right="-10%" :rotate="15" :speed="-0.3" :opacity="0.03" />
      <AppBackgroundText text="DIGITAL" top="45%" left="-15%" :rotate="-5" :speed="0.4" :opacity="0.02" />
      <AppBackgroundText text="WEBSITE" top="65%" right="-15%" :rotate="10" :speed="-0.2" :opacity="0.03" />
      <AppBackgroundText text="AURA" top="85%" left="-5%" :rotate="-15" :speed="0.6" :opacity="0.04" />
    </div>

    <div class="relative z-30">
      <AppHero />
      <AppAbout />
      <AppFeatures />
      <AppProcess />
      <AppMarqueeSection />
      <AppServices />
      <AppCases />
      <AppCalculator />
      <AppCTA />
    </div>
  </div>
</template>
