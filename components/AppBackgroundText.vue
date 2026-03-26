<script setup lang="ts">
import { useWindowScroll, useElementBounding } from '@vueuse/core'
import { ref, computed, onMounted } from 'vue'

const props = defineProps<{
  text: string
  top?: string
  left?: string
  right?: string
  bottom?: string
  rotate?: number
  opacity?: number
  scale?: number
  speed?: number
}>()

const target = ref<HTMLElement | null>(null)
const isMounted = ref(false)
const { y: windowScrollY } = useWindowScroll()
const { top: elementTop, height: elementHeight } = useElementBounding(target)

onMounted(() => {
  isMounted.value = true
})

const scrollYProgress = computed(() => {
  if (!isMounted.value || typeof window === 'undefined' || !target.value) return 0
  const viewportHeight = window.innerHeight
  const rect = target.value.getBoundingClientRect()
  const top = rect.top + windowScrollY.value
  const height = rect.height
  
  const start = top - viewportHeight
  const end = top + height
  const progress = (windowScrollY.value - start) / (end - start)
  return Math.max(0, Math.min(1, progress))
})

const yPos = computed(() => {
  if (!isMounted.value) return 0
  const range = 300 * (props.speed ?? 0.2)
  return (scrollYProgress.value - 0.5) * -range
})

const blurVal = computed(() => {
  if (!isMounted.value) return 0
  return Math.abs(scrollYProgress.value - 0.5) * 10
})
</script>

<template>
  <div 
    ref="target"
    class="absolute pointer-events-none select-none z-10 overflow-hidden"
    :style="{ 
      top, 
      left, 
      right, 
      bottom, 
      transform: `rotate(${rotate ?? 0}deg)` 
    }"
  >
    <div
      :style="{ 
        transform: isMounted ? `translateY(${yPos}px) scale(${scale ?? 1})` : 'none', 
        opacity: opacity ?? 0.08, 
        filter: isMounted ? `blur(${blurVal}px)` : 'none' 
      }"
      class="text-[18vw] font-display font-black text-aura-navy/10 leading-none whitespace-nowrap transition-transform duration-75 ease-out"
    >
      {{ text }}
    </div>
  </div>
</template>
