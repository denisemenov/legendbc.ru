<template>
  <main class="">
    <ContentRenderer v-if="page" :value="page" />
  </main>
</template>

<script setup lang="ts">
import type { Collections } from '@nuxt/content';

const { locale } = useI18n();

const { data: page } = await useAsyncData(
  async () => {
    const collection = ('content_' + locale.value) as keyof Collections;
    const content = await queryCollection(collection).path('/').first();

    return content;
  },
  {
    watch: [locale],
  },
);

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true });
}
</script>

<style> 

@source "../content/**/*";
</style>
