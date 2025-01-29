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
    }
  );

  const classes = computed(() => ({
    'gap-4 flex flex-col w-full': true,
    'prose prose-stone mx-auto max-w-3xl mt-8 mb-24': slug.value !== '/',
  }));

  if (!page.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Page not found',
      fatal: true,
    });
  }
</script>

<template>
  <div class="flex flex-col min-h-screen gap-4 p-4">
    <SiteHeader />
    <ContentRenderer
      v-if="page"
      tag="main"
      :value="page"
      :class="classes"
    />
    <SiteFooter />
  </div>
</template>
