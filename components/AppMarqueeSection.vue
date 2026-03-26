<script setup lang="ts">
const words = [
  "ИННОВАЦИИ", "ДИЗАЙН", "СТРАТЕГИЯ", "РАЗРАБОТКА", "AURA DIGITAL", "БУДУЩЕЕ", "КРЕАТИВ", "ЭСТЕТИКА", "КАЧЕСТВО"
]

const repeatedWords = [...words, ...words, ...words]
</script>

<template>
  <section class="relative h-[400px] overflow-hidden bg-white flex items-center justify-center">
    <!-- Background soft glow -->
    <div class="absolute inset-0 bg-radial-gradient from-aura-navy/5 to-transparent opacity-50" />
    
    <!-- First Marquee - Tilted Right -->
    <div class="absolute w-[150%] rotate-[-5deg] z-10">
      <div class="flex overflow-hidden whitespace-nowrap border-y border-aura-navy/10 py-6 bg-white/80 backdrop-blur-sm shadow-2xl">
        <div class="flex gap-12 items-center animate-marquee-fast px-10">
          <template v-for="i in 4" :key="i">
            <span v-for="(word, j) in words" :key="j" class="text-4xl md:text-6xl font-display font-black text-aura-navy/20 tracking-tighter hover:text-aura-navy/40 transition-colors cursor-default">
              {{ word }}
            </span>
          </template>
        </div>
      </div>
    </div>

    <!-- Second Marquee - Tilted Left -->
    <div class="absolute w-[150%] rotate-[5deg] z-20">
      <div class="flex overflow-hidden whitespace-nowrap border-y border-aura-navy/10 py-6 bg-aura-navy shadow-2xl">
        <div class="flex gap-12 items-center animate-marquee-slow px-10">
          <template v-for="i in 4" :key="i">
            <span v-for="(word, j) in words" :key="j" class="text-4xl md:text-6xl font-display font-black text-white/90 tracking-tighter hover:text-white transition-colors cursor-default">
              {{ word }}
            </span>
          </template>
        </div>
      </div>
    </div>

    <!-- Intersection Highlight Effect -->
    <div class="absolute inset-0 pointer-events-none z-30 flex items-center justify-center">
      <div class="w-64 h-64 bg-aura-navy/10 rounded-full blur-[100px]" />
    </div>
  </section>
</template>

<style scoped>
@keyframes marquee-ltr {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes marquee-rtl {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

.animate-marquee-fast {
  display: flex;
  width: max-content;
  animation: marquee-ltr 30s linear infinite;
}

.animate-marquee-slow {
  display: flex;
  width: max-content;
  animation: marquee-rtl 40s linear infinite;
}
</style>
