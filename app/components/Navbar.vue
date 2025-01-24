<template>
  <div class="z-50 bg-transparent w-full">
    <div class="w-4/5 max-w-[1920px] mx-auto">
      <div class="flex flex-row items-center justify-between">
        <div class="flex flex-col items-center lg:items-start">
          <Logo />

          <div class="mt-4 lg:mt-2">
            <a href="tel:+79166244545" class="flex justify-center items-center hover:opacity-80 transition">
              <img src="/images/phone-receiver.svg" alt="phone" class="w-4 h-4 block" />
              <span class="text-white font-bold text-base tracking-tight ml-1">+7&nbsp;916&nbsp;624&nbsp;4545</span>
            </a>
          </div>
        </div>

        <button
          class="lg:hidden top-10 right-4 border-2 border-white p-2.5 z-[999] transition-colors"
          :class="{ 'bg-gold-500': isMenuOpen }"
          @click="toggleMenu"
        >
          <div class="w-6 h-4 relative flex flex-col justify-between">
            <span
              class="w-full h-0.5 bg-white transition-transform duration-300"
              :class="{ 'rotate-45 translate-y-[7px]': isMenuOpen }"
            ></span>
            <span class="w-full h-0.5 bg-white transition-opacity" :class="{ 'opacity-0': isMenuOpen }"></span>
            <span
              class="w-full h-0.5 bg-white transition-transform duration-300"
              :class="{ '-rotate-45 -translate-y-[7px]': isMenuOpen }"
            ></span>
          </div>
        </button>

        <nav
          class="fixed lg:relative top-0 left-0 w-full h-screen lg:h-auto bg-white lg:bg-transparent lg:bg-none pt-[200px] lg:pt-0 text-center lg:text-right transform transition-transform duration-300"
          :class="[isMenuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0']"
        >
          <div class="flex flex-col lg:flex-row items-center lg:items-end justify-end space-y-4 lg:space-y-0">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="block lg:inline-block px-2 lg:px-4 py-4 lg:py-0 text-stone-900 lg:text-white text-base xl:text-lg hover:text-gold-500 lg:hover:text-stone-200 transition-colors font-semibold"
            >
              {{ link.text }}
            </NuxtLink>
          </div>
        </nav>

        <div class="flex flex-row items-center justify-center gap-2">
          <button v-for="lang of locales" :key="lang.code" @click="setLocale(lang.code)"> ({{ lang.code }}) </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const { setLocale, locales, locale } = useI18n();

const isMenuOpen = ref(false);

const navLinks = [
  { to: '/about', text: 'О клубе' },
  { to: '/price', text: 'Цены' },
  { to: '/events', text: 'Корпоративы' },
  { to: '/contacts', text: 'Контакты' },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
};
</script>

<style lang="scss"></style>
