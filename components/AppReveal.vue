<script setup lang="ts">
defineProps<{
  width?: "fit-content" | "100%"
}>()
</script>

<template>
  <div :style="{ position: 'relative', width: width ?? 'fit-content', overflow: 'hidden' }">
    <ClientOnly>
      <div
        v-motion
        :initial="{ opacity: 0, y: 75 }"
        :visible-once="{ 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 500,
            delay: 250,
            type: 'spring',
            stiffness: 100,
            damping: 20
          }
        }"
      >
        <slot />
      </div>
      <div
        v-motion
        :initial="{ left: 0 }"
        :visible-once="{ 
          left: '100%',
          transition: {
            duration: 500,
            ease: 'easeIn'
          }
        }"
        style="position: absolute; top: 4px; bottom: 4px; left: 0; right: 0; background: #0F254B; z-index: 20;"
      />
    </ClientOnly>
  </div>
</template>
