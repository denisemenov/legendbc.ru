<template>
  <header
    class="flex flex-col items-center justify-between w-full gap-16 p-8 md:p-16 bg-cover bg-center bg-no-repeat relative bg-[url(/images/slide_1.jpg)] before:absolute before:inset-0 before:bg-black/50 shadow-block hover:shadow-stone-300"
    :class="{
      'h-[calc(100vh-2rem)]': isHomePage,
      'h-[400px]': !isHomePage,
    }"
  >
    <HeaderNav />

    <div class="relative z-10">
      <h1 class="text-center text-3xl md:text-4xl font-serif font-bold tracking-wide text-white">
        {{ $t('company.name.full') }}
      </h1>

      <p class="text-center text-lg font-serif tracking-wide text-white italic">
        {{ $t('company.description') }}
      </p>
    </div>
  </header>
</template>

<script lang="ts" setup>
  const route = useRoute();
  const isHomePage = computed(() => route.path === '/' || route.path === '/en');

  interface Props {
    backgroundImage?: string;
  }

  withDefaults(defineProps<Props>(), {
    backgroundImage: '/images/slide_1.jpg',
  });
</script>

<style lang="scss"></style>
