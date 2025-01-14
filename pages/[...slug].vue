<template>
  <main class="prose prose-stone max-w-3xl mx-auto my-8">
    <ContentDoc />
  </main>
</template>

<script setup> 
const pageTitle = usePageTitle()
const title = await useMarkdownTitle()

// Устанавливаем заголовок только если страница существует
if (title) {
  pageTitle.value = title
  
  useHead({
    title: `${title} - Бильярдный клуб Легенда`
  })
}
</script>
