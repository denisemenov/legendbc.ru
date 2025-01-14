<template>
  <div class="flex flex-col min-h-screen gap-5 p-5"> 
    <Header :title="pageTitle" />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup>
const pageTitle = usePageTitle();

useHead({ 
  script: [
    {
      src: 'https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY&lang=ru_RU',
      async: true,
    },
  ],
});
</script>
