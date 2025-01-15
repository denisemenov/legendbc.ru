<!-- components/content/Column.vue -->
<template>
  <div class="flex flex-col" :class="columnClass">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ContentSlot } from '#components'

const props = defineProps<{
  span?: number
}>()

// Маппинг span -> классы Tailwind
const SPAN_CLASSES = {
  1: 'col-span-1',
  2: 'col-span-2',
  3: 'col-span-3',
  4: 'col-span-4',
  5: 'col-span-5',
  6: 'col-span-6'
} as const

const columnClass = computed(() => {
  // Безопасно подстрахуемся, что span по умолчанию = 1
  const spanValue = props.span && props.span >= 1 && props.span <= 6 ? props.span : 1
  return SPAN_CLASSES[spanValue]
})
</script>

<style lang="scss">
/* Дополнительные стили, если необходимо */
</style>
