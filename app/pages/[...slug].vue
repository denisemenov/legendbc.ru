<script setup lang="ts">
import { withLeadingSlash } from 'ufo';
import type { Collections } from '@nuxt/content';

const route = useRoute();
const { locale } = useI18n();
const slug = computed(() => withLeadingSlash(String(route.params.slug)));

const { data: page } = await useAsyncData(
  'page-' + slug.value,
  async () => {
    const collection = ('content_' + locale.value) as keyof Collections;
    const content = await queryCollection(collection).path(slug.value).first();

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

<template>
  <main class="prose prose-stone max-w-3xl mx-auto my-8">
    <ContentRenderer v-if="page" :value="page" />
  </main>
</template>
