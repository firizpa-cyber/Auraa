<script setup lang="ts">
import { ref } from 'vue'
import { Send, CheckCircle, ChevronRight, ChevronLeft } from 'lucide-vue-next'

const step = ref(1)
const submitted = ref(false)
const formData = ref({
  name: '',
  email: '',
  company: '',
  projectType: 'Веб-разработка',
  budget: '',
  description: '',
  timeline: ''
})

const handleSubmit = () => {
  submitted.value = true
}

const nextStep = () => step.value++
const prevStep = () => step.value--

definePageMeta({
  layout: 'default'
})
</script>

<template>
  <div v-if="submitted" class="min-h-screen flex items-center justify-center bg-white px-6 pt-20">
    <div 
      v-motion
      :initial="{ opacity: 0, scale: 0.9 }"
      :enter="{ opacity: 1, scale: 1 }"
      class="max-w-md w-full text-center p-12 glass-card rounded-2xl"
    >
      <div class="w-20 h-20 bg-aura-navy/5 rounded-full flex items-center justify-center mx-auto mb-8">
        <CheckCircle class="w-10 h-10 text-aura-navy" />
      </div>
      <h2 class="text-2xl font-display font-bold text-aura-navy mb-4">Бриф отправлен!</h2>
      <p class="text-aura-navy/50 mb-8 leading-relaxed text-sm">
        Спасибо за доверие. Наш стратег изучит ваш проект и свяжется с вами в течение 24 часов.
      </p>
      <NuxtLink to="/" class="navy-button w-full inline-block text-center">Вернуться на главную</NuxtLink>
    </div>
  </div>

  <div v-else class="min-h-screen bg-aura-gray/10 pt-32 pb-20 px-6">
    <div class="max-w-2xl mx-auto">
      <div class="mb-12">
        <NuxtLink to="/" class="text-[10px] font-bold uppercase tracking-widest text-aura-navy/40 hover:text-aura-navy transition-colors flex items-center gap-2 mb-8">
          <ChevronLeft class="w-3 h-3" /> Назад
        </NuxtLink>
        <div class="flex justify-between items-end mb-4">
          <h1 class="text-3xl md:text-4xl font-display font-bold">Бриф проекта</h1>
          <span class="text-[10px] font-bold text-aura-navy/40 uppercase tracking-widest">Шаг {{ step }} из 3</span>
        </div>
        <div class="h-1 bg-aura-navy/5 rounded-full overflow-hidden">
          <div 
            class="h-full bg-aura-navy transition-all duration-500"
            :style="{ width: `${(step / 3) * 100}%` }"
          />
        </div>
      </div>

      <form @submit.prevent="handleSubmit" class="glass-card p-8 md:p-12 rounded-2xl">
        <div
          v-if="step === 1"
          v-motion
          :initial="{ opacity: 0, x: 20 }"
          :enter="{ opacity: 1, x: 0 }"
          class="space-y-6"
        >
          <h3 class="text-lg font-display font-bold text-aura-navy mb-8">Контактная информация</h3>
          <div class="space-y-4">
            <div>
              <label class="block text-[10px] font-bold uppercase tracking-widest text-aura-navy/40 mb-2">Ваше имя</label>
              <input 
                type="text" 
                required
                class="w-full bg-white border border-aura-navy/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-aura-navy/20 transition-colors"
                placeholder="Иван Иванов"
                v-model="formData.name"
              />
            </div>
            <div>
              <label class="block text-[10px] font-bold uppercase tracking-widest text-aura-navy/40 mb-2">Email</label>
              <input 
                type="email" 
                required
                class="w-full bg-white border border-aura-navy/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-aura-navy/20 transition-colors"
                placeholder="hello@example.com"
                v-model="formData.email"
              />
            </div>
          </div>
          <button type="button" @click="nextStep" class="navy-button w-full flex items-center justify-center gap-2">
            Далее <ChevronRight class="w-4 h-4" />
          </button>
        </div>

        <div
          v-else-if="step === 2"
          v-motion
          :initial="{ opacity: 0, x: 20 }"
          :enter="{ opacity: 1, x: 0 }"
          class="space-y-6"
        >
          <h3 class="text-lg font-display font-bold text-aura-navy mb-8">О проекте</h3>
          <div class="space-y-4">
            <div>
              <label class="block text-[10px] font-bold uppercase tracking-widest text-aura-navy/40 mb-2">Тип услуги</label>
              <select 
                class="w-full bg-white border border-aura-navy/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-aura-navy/20 transition-colors appearance-none"
                v-model="formData.projectType"
              >
                <option>Веб-разработка</option>
                <option>Брендинг</option>
                <option>Дизайн продукта</option>
                <option>Маркетинг</option>
              </select>
            </div>
            <div>
              <label class="block text-[10px] font-bold uppercase tracking-widest text-aura-navy/40 mb-2">Примерный бюджет</label>
              <input 
                type="text" 
                class="w-full bg-white border border-aura-navy/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-aura-navy/20 transition-colors"
                placeholder="от 100,000 руб."
                v-model="formData.budget"
              />
            </div>
          </div>
          <div class="flex gap-4">
            <button type="button" @click="prevStep" class="outline-button flex-1">Назад</button>
            <button type="button" @click="nextStep" class="navy-button flex-[2] flex items-center justify-center gap-2">
              Далее <ChevronRight class="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          v-else-if="step === 3"
          v-motion
          :initial="{ opacity: 0, x: 20 }"
          :enter="{ opacity: 1, x: 0 }"
          class="space-y-6"
        >
          <h3 class="text-lg font-display font-bold text-aura-navy mb-8">Детали</h3>
          <div>
            <label class="block text-[10px] font-bold uppercase tracking-widest text-aura-navy/40 mb-2">Описание задачи</label>
            <textarea 
              rows="5"
              class="w-full bg-white border border-aura-navy/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-aura-navy/20 transition-colors resize-none"
              placeholder="Расскажите о ваших целях..."
              v-model="formData.description"
            />
          </div>
          <div class="flex gap-4">
            <button type="button" @click="prevStep" class="outline-button flex-1">Назад</button>
            <button type="submit" class="navy-button flex-[2] flex items-center justify-center gap-2">
              Отправить бриф <Send class="w-4 h-4" />
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
