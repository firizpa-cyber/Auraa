<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'
import { ref } from 'vue'

const isOpen = ref(false)

const navLinks = [
  { name: 'О нас', href: '/#about' },
  { name: 'Преимущества', href: '/#features' },
  { name: 'Услуги', href: '/#services' },
  { name: 'Кейсы', href: '/#cases' },
  { name: 'Калькулятор', href: '/#calculator' },
]
</script>

<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-aura-navy/5">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <NuxtLink 
        to="/"
        class="text-2xl font-display font-bold tracking-tighter text-aura-navy"
      >
        AURA<span class="text-aura-navy/40">.</span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <ClientOnly>
        <div class="hidden md:flex items-center gap-8">
          <a
            v-for="(link, i) in navLinks"
            :key="link.name"
            :href="link.href"
            v-motion
            :initial="{ opacity: 0, y: -10 }"
            :enter="{ 
              opacity: 1, 
              y: 0,
              transition: {
                delay: i * 100
              }
            }"
            class="text-sm font-medium text-aura-navy/60 hover:text-aura-navy transition-colors"
          >
            {{ link.name }}
          </a>
          <NuxtLink
            to="/brief"
            class="px-5 py-2 bg-aura-navy text-white rounded-full text-sm font-semibold hover:bg-aura-navy/90 transition-all duration-300"
          >
            Заполнить бриф
          </NuxtLink>
        </div>
      </ClientOnly>

      <!-- Mobile Toggle -->
      <button 
        class="md:hidden text-aura-navy"
        @click="isOpen = !isOpen"
      >
        <X v-if="isOpen" />
        <Menu v-else />
      </button>
    </div>

    <!-- Mobile Menu -->
    <ClientOnly>
      <div 
        v-if="isOpen"
        v-motion
        :initial="{ opacity: 0, height: 0 }"
        :enter="{ opacity: 1, height: 'auto' }"
        class="md:hidden bg-white border-b border-aura-navy/5 px-6 py-8 flex flex-col gap-6"
      >
        <a 
          v-for="link in navLinks"
          :key="link.name" 
          :href="link.href"
          @click="isOpen = false"
          class="text-xl font-display font-medium text-aura-navy"
        >
          {{ link.name }}
        </a>
        <NuxtLink 
          to="/brief"
          @click="isOpen = false"
          class="w-full py-4 bg-aura-navy text-white rounded-xl font-bold text-center"
        >
          Заполнить бриф
        </NuxtLink>
      </div>
    </ClientOnly>
  </nav>
</template>
