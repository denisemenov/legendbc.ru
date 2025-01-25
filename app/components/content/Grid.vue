<template>
  <div
    class="grid gap-4 my-4"
    :class="gridClasses"
  >
    <slot unwrap="p" />
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';

  defineSlots<{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    default(): any;
  }>();

  interface Columns {
    mobile?: 1 | 2 | 3 | 4 | 5 | 6;
    tablet?: 1 | 2 | 3 | 4 | 5 | 6;
    desktop?: 1 | 2 | 3 | 4 | 5 | 6;
  }

  const props = defineProps<{
    cols?: Columns;
  }>();

  const defaultCols = { mobile: 1, tablet: 2, desktop: 3 };

  const GRID_CLASSES = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
  } as const;

  const MD_GRID_CLASSES = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
    5: 'md:grid-cols-5',
    6: 'md:grid-cols-6',
  } as const;

  const LG_GRID_CLASSES = {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    5: 'lg:grid-cols-5',
    6: 'lg:grid-cols-6',
  } as const;

  const gridClasses = computed(() => {
    const { mobile, tablet, desktop } = props.cols || defaultCols;

    return [
      GRID_CLASSES[(mobile || defaultCols.mobile) as keyof typeof GRID_CLASSES],
      MD_GRID_CLASSES[(tablet || defaultCols.tablet) as keyof typeof MD_GRID_CLASSES],
      LG_GRID_CLASSES[(desktop || defaultCols.desktop) as keyof typeof LG_GRID_CLASSES],
    ];
  });
</script>

<style lang="scss"></style>
