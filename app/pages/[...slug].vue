<script setup lang="ts">
  import { withLeadingSlash } from 'ufo';
  import type { Collections } from '@nuxt/content';

  const route = useRoute();
  const { locale, t } = useI18n();
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
    'gap-4 flex flex-col w-full grow': true,
    'prose prose-stone mx-auto max-w-3xl mt-8 mb-24': slug.value !== '/',
  }));

  if (!page.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Page not found',
      fatal: true,
    });
  }

  useSeoMeta({
    title: () => page.value?.title,
    description: () => page.value?.description,
    ogTitle: () => page.value?.title,
    ogDescription: () => page.value?.description,
    ogImage: () => {
      const pageImage = page.value && 'image' in page.value ? page.value.image : null;
      return pageImage || '/images/og-image.jpg';
    }
  });
  
  useSchemaOrg({
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: t('company.name.full'),
    url: 'https://legendbc.ru',
    logo: 'https://legendbc.ru/images/legend-logo-white.svg',
    image: '/images/og-image.jpg',
    telephone: t('company.contacts.phone'),
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${t('company.contacts.address.street')} ${t('company.contacts.address.building')}`,
      addressLocality: t('company.contacts.address.city'),
      addressRegion: t('company.contacts.address.city'),
      addressCountry: 'RU'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '12:00',
        closes: '02:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday', 'Saturday', 'Sunday'],
        opens: '12:00',
        closes: '06:00'
      }
    ],
    priceRange: '$$'
  });
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

<style>
  .page-enter-active,
  .page-leave-active {
    transition: all 0.2s;
  }
  .page-enter-from,
  .page-leave-to {
    opacity: 0;
    filter: blur(1rem);
  }
</style>
