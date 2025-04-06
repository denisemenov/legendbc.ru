<script setup lang="ts">
  import { computed } from 'vue';

  const props = defineProps({
    error: Object,
  });

  const { t } = useI18n();

  const statusCode = computed(() => props.error?.statusCode || 500);
  const is404 = computed(() => statusCode.value === 404);

  const title = computed(() => {
    return is404.value ? t('error.notFound') : t('error.oops');
  });

  const message = computed(() => {
    return is404.value ? t('error.pageNotFound') : props.error?.message || t('error.somethingWrong');
  });
</script>

<template>
  <div class="flex flex-col min-h-screen gap-4 p-4">
    <SiteHeader />
    <main class="flex flex-col items-center justify-center grow gap-4 mb-8 text-center">
      <h1>{{ statusCode }}</h1>
      <h2>{{ title }}</h2>
      <p>{{ message }}</p>
      <Btn href="/">{{ t('error.backToHome') }}</Btn>
    </main>
    <SiteFooter />
  </div>
</template>
