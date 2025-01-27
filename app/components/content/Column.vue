<template>
  <div
    class="flex flex-col"
    :class="columnClass"
  >
    <slot unwrap="p" />
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  const props = defineProps<{
    span?: number;
  }>();

  const SPAN_CLASSES = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
    5: 'col-span-5',
    6: 'col-span-6',
  } as const;

  const columnClass = computed(() => {
    const spanValue = props.span && props.span >= 1 && props.span <= 6 ? props.span : 1;
    return SPAN_CLASSES[spanValue as keyof typeof SPAN_CLASSES];
  });
</script>

<style lang="scss"></style>
