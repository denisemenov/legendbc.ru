<template>
  <div class="flex flex-col w-full items-center justify-center">
    <a
      :href="href"
      :target="computedTarget"
      :rel="computedRel"
      :class="[
        'flex items-center justify-center px-4 py-2 no-underline border-2 border-gold-400 text-gold-400 font-bold transition-all duration-300 hover:bg-gold-400 hover:text-white',
        block && 'w-full',
      ]"
    >
      <!-- Если слот передан, используем слот, иначе используем текст из пропа text -->
      <ContentSlot :use="$slots.default" unwrap="p" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { ContentSlot } from '#components';

/**
 * Слоты:
 * - default: используется для кастомного HTML / Markdown-контента внутри кнопки
 */
defineSlots<{
  default?: any;
}>();

/**
 * Пропы компонента:
 * - href: string | undefined — адрес ссылки
 * - text: string | undefined — если нужен простой текст без слота
 * - blank: boolean — если true, то target="_blank" и rel="noopener noreferrer nofollow"
 * - block: boolean — если true, занимает 100% ширины
 */
const props = defineProps<{
  href?: string;
  text?: string;
  blank?: boolean;
  block?: boolean;
}>();

/**
 * Вычисляем значения target и rel
 * - Если blank === true → target="_blank", rel="noopener noreferrer nofollow"
 * - Иначе, target="_self", rel не задан
 */
const computedTarget = computed(() => (props.blank ? '_blank' : undefined));
const computedRel = computed(() => (props.blank ? 'noopener noreferrer nofollow' : undefined));
</script>

<style scoped lang="scss">
/* При желании можно добавить дополнительные стили */
</style>
