<script setup lang="ts">
const stages = [
  {
    number: '01',
    title: 'Брифинг и Анализ',
    description: 'Погружаемся в ваш бизнес, изучаем конкурентов и определяем ключевые цели проекта.',
  },
  {
    number: '02',
    title: 'Проектирование',
    description: 'Создаем архитектуру, прототипы и продумываем пользовательский опыт (UX).',
  },
  {
    number: '03',
    title: 'Дизайн',
    description: 'Разрабатываем визуальную концепцию, которая отражает ценности вашего бренда.',
  },
  {
    number: '04',
    title: 'Разработка',
    description: 'Превращаем макеты в живой продукт с использованием современного стека технологий.',
  },
  {
    number: '05',
    title: 'Запуск и Поддержка',
    description: 'Тестируем, разворачиваем проект и обеспечиваем его стабильную работу после релиза.',
  },
]
</script>

<template>
  <section id="process" class="section-padding alcantara-texture overflow-hidden">
    <ClientOnly>
      <div class="max-w-6xl mx-auto px-6 relative z-10">
        <div class="mb-20 text-center">
          <span 
            v-motion
            :initial="{ opacity: 0, y: 10 }"
            :visible-once="{ opacity: 1, y: 0 }"
            class="text-aura-navy/40 font-bold text-[10px] tracking-[0.3em] uppercase mb-4 block"
          >
            Методология
          </span>
          <h2 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visible-once="{ opacity: 1, y: 0 }"
            class="text-aura-navy"
          >
            Этапы проектирования
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div
            v-for="(stage, i) in stages"
            :key="stage.number"
            v-motion
            :initial="{ opacity: 0, scale: 0.9, y: 30 }"
            :visible-once="{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              transition: {
                delay: i * 100,
                type: 'spring',
                stiffness: 100
              }
            }"
            :hovered="{ y: -10 }"
            class="relative p-8 glass-card rounded-3xl border border-aura-navy/5 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden"
          >
            <!-- 3D Number Background -->
            <div class="absolute -right-4 -top-4 text-8xl font-display font-black text-aura-navy/[0.03] group-hover:text-aura-navy/[0.06] transition-colors pointer-events-none">
              {{ stage.number }}
            </div>

            <div class="relative z-10">
              <div class="w-10 h-10 bg-aura-navy text-white rounded-xl flex items-center justify-center font-display font-bold text-sm mb-6 shadow-lg shadow-aura-navy/20">
                {{ stage.number }}
              </div>
              
              <h3 class="text-lg font-display font-bold mb-4 text-aura-navy leading-tight">
                {{ stage.title }}
              </h3>
              
              <p class="text-aura-navy/60 text-[13px] leading-relaxed font-light">
                {{ stage.description }}
              </p>
            </div>

            <!-- Decorative line -->
            <div class="absolute bottom-0 left-0 h-1 bg-aura-navy/10 w-0 group-hover:w-full transition-all duration-700" />
          </div>
        </div>
      </div>
    </ClientOnly>
  </section>
</template>
