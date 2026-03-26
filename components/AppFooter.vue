<script setup lang="ts">
import { Instagram, Twitter, Linkedin, Github } from 'lucide-vue-next'
</script>

<template>
  <footer class="py-20 bg-white border-t border-aura-navy/5">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div class="md:col-span-2">
          <div class="text-3xl font-display font-bold tracking-tighter mb-8 text-aura-navy">
            AURA<span class="text-aura-navy/40">.</span>
          </div>
          <p class="max-w-sm text-aura-navy/40 text-lg leading-relaxed mb-8">
            Профессиональное создание сайтов в Худжанде и Таджикистане. Мы создаем премиальные цифровые продукты для вашего бизнеса.
          </p>
          <div class="flex gap-6">
            <a href="#" class="text-aura-navy/40 hover:text-aura-navy transition-colors"><Instagram /></a>
            <a href="#" class="text-aura-navy/40 hover:text-aura-navy transition-colors"><Twitter /></a>
            <a href="#" class="text-aura-navy/40 hover:text-aura-navy transition-colors"><Linkedin /></a>
            <a href="#" class="text-aura-navy/40 hover:text-aura-navy transition-colors"><Github /></a>
          </div>
        </div>

        <div>
          <h4 class="text-sm font-bold uppercase tracking-widest mb-8 text-aura-navy">Услуги</h4>
          <ul class="flex flex-col gap-4 text-aura-navy/40">
            <li><a href="#services" class="hover:text-aura-navy transition-colors">Создание сайтов</a></li>
            <li><a href="#services" class="hover:text-aura-navy transition-colors">Веб-дизайн</a></li>
            <li><a href="#services" class="hover:text-aura-navy transition-colors">Интернет-магазины</a></li>
            <li><a href="#services" class="hover:text-aura-navy transition-colors">SEO продвижение</a></li>
          </ul>
        </div>

        <div>
          <h4 class="text-sm font-bold uppercase tracking-widest mb-8 text-aura-navy">Контакты</h4>
          <ul class="flex flex-col gap-4 text-aura-navy/40">
            <li>hello@aura.digital</li>
            <li>+992 000 000 000</li>
            <li>Худжанд, Таджикистан<br />пр. Исмоила Сомони</li>
          </ul>
        </div>
      </div>

      <div class="pt-12 border-t border-aura-navy/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-aura-navy/20 font-medium">
        <p>© 2026 Aura Digital Agency. Все права защищены.</p>
        <div class="flex gap-8">
          <a href="#" class="hover:text-aura-navy transition-colors">Политика конфиденциальности</a>
          <a href="#" class="hover:text-aura-navy transition-colors">Условия использования</a>
        </div>
      </div>
    </div>
  </footer>
</template>
