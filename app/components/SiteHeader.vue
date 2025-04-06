<template>
  <header
    class="flex flex-col items-center justify-between w-full gap-8 p-4 lg:gap-16 md:p-8 lg:p-16 bg-cover bg-center bg-no-repeat relative bg-[url(/images/slide_1.jpg)] before:absolute before:inset-0 before:bg-black/50 shadow-block hover:shadow-stone-300 rounded-xs overflow-hidden"
    :class="{
      'h-[calc(100vh-2rem)]': isHomePage,
      'h-[400px]': !isHomePage,
    }"
  >
    <HeaderNav />

    <div class="relative z-10">
      <h1 class="text-center tracking-wide text-white">
        {{ $t('company.name.full') }}
      </h1>

      <p class="text-center text-lg font-serif tracking-wide text-white italic">
        {{ $t('company.description') }}
      </p>
    </div>
  </header>
</template>

<script setup lang="ts">
  const route = useRoute();
  const { locale, locales } = useI18n();
  const localePath = useLocalePath();
  const isHomePage = computed(() => route.path === '/' || route.path === '/en');

  interface Props {
    backgroundImage?: string;
  }

  withDefaults(defineProps<Props>(), {
    backgroundImage: '/images/slide_1.jpg',
  });

  useHead({
    htmlAttrs: {
      lang: locale.value
    },
    link: computed(() => {
      return locales.value
        .filter(loc => loc.code !== locale.value)
        .map(loc => ({
          rel: 'alternate',
          hreflang: loc.code,
          href: `https://legendbc.ru${localePath(route.path, loc.code)}`
        }));
    })
  });
</script>

<style lang="scss"></style>
