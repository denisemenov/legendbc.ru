<template>
  <div class="flex flex-col w-full items-center justify-center">
    <NuxtLinkLocale
      :href="href"
      :target="computedTarget"
      :rel="computedRel"
      :class="[
        'flex items-center justify-center px-8 py-4 no-underline border-2 border-gold-400 text-gold-400 font-bold transition-all duration-300 hover:bg-gold-400 hover:text-white',
        block && 'w-full',
      ]"
    >
      <slot unwrap="p" />
    </NuxtLinkLocale>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  /**
   * Пропы компонента:
   * - href: string | undefined — адрес ссылки
   * - blank: string — если есть хоть что-то в пропе, то target="_blank" и rel="noopener noreferrer string"
   * - block: boolean — если есть хоть что-то в пропе, то занимает 100% ширины w-full
   */
  const props = defineProps<{
    href?: string;
    blank?: string;
    block?: string;
  }>();

  const computedTarget = computed(() => (props.blank ? '_blank' : undefined));
  const computedRel = computed(() => (props.blank ? 'noopener noreferrer nofollow' : undefined));
</script>

<style scoped lang="scss"></style>
