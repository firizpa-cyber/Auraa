<script setup lang="ts">
import { useWindowScroll, useElementSize } from '@vueuse/core'
import { computed, ref, onMounted } from 'vue'

const { y } = useWindowScroll()
const scrollProgress = ref(0)

onMounted(() => {
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    scrollProgress.value = (winScroll / height)
  })
})

const scaleX = computed(() => scrollProgress.value)
</script>

<template>
  <div class="relative bg-white min-h-screen selection:bg-aura-navy selection:text-white">
    <!-- Scroll Progress Bar -->
    <div
      class="fixed top-0 left-0 right-0 h-1 bg-aura-navy origin-left z-[100] transition-transform duration-100"
      :style="{ transform: `scaleX(${scaleX})` }"
    />

    <AppNavbar />
    
    <main>
      <NuxtPage />
    </main>

    <AppFooter />
    
    <!-- SVG Filter for Fluffy Effect -->
    <svg class="hidden">
      <filter id="fluffyFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="5" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="80" result="displaced" />
        <feGaussianBlur in="displaced" stdDeviation="10" />
      </filter>
    </svg>
  </div>
</template>
