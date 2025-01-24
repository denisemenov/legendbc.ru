<template>
  <div class="relative">
    <div
      class="flex flex-col gap-16 py-16 w-full bg-cover bg-center bg-no-repeat relative"
      :style="{
        backgroundImage: `linear-gradient(180deg, rgba(26, 26, 26, 0.5), rgba(26, 26, 26, 0.5)), url(${backgroundImage})`,
      }"
    >
      <Navbar />

      <h1 class="text-center text-3xl md:text-4xl font-serif font-bold tracking-wide text-white">
        <!-- {{ title || 'Бильярдный клуб Легенда' }} -->
        Бильярдный клуб Легенда
      </h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  // title: string;
  backgroundImage?: string;
}

withDefaults(defineProps<Props>(), {
  backgroundImage: '/images/slide_1.jpg',
});
</script>

<style lang="scss"></style>
