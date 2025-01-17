<script setup>
const { setLocale, locales, locale } = useI18n();
</script>

<template>
  <main>
    <button v-for="_locale of locales" :key="_locale.code" class="px-4" @click="setLocale(_locale.code)">
      {{ _locale.name }} ({{ _locale.code }})</button
    >
    <NuxtPage />
  </main>
</template>

<style></style>
