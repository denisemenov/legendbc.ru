<template>
  <div
    class="flex flex-col lg:flex-row gap-4"
    :class="{ 'lg:flex-row-reverse': reversed }"
  >
    <div
      class="flex flex-col items-center justify-center w-full p-4 md:p-8 text-center hover:bg-stone-100 shadow-block hover:shadow-stone-300 transition-colors duration-300"
      :class="{ 'lg:w-1/2': image || yamap }"
    >
      <slot
        name="header"
        mdc-unwrap="p"
      />

      <slot />

      <slot
        name="footer"
        mdc-unwrap="p"
      />
    </div>

    <div
      v-if="image || yamap"
      class="w-full lg:w-1/2 min-h-120 md:min-h-140 lg:min-h-160 3xl:min-h-240 relative shadow-block"
    >
      <img
        v-if="image"
        :src="image"
        :alt="image"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <YaMap v-if="yamap" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  defineProps<{
    reversed?: string;
    image?: string;
    yamap?: string;
  }>();
</script>

<style lang="scss">
  .text-center {
    ul {
      text-align: left;
      margin: 0 auto;
      width: fit-content;
    }
  }
</style>
