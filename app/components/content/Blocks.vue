<template>
  <div
    class="flex flex-col lg:flex-row gap-4"
    :class="{ 'lg:flex-row-reverse': reversed }"
  >
    <div
      class="flex flex-col w-full"
      :class="{ 'lg:w-1/2': image }"
    >
      <div
        class="flex flex-col items-center justify-center h-full p-4 md:p-8 bg-stone-100 hover:bg-gold-100 transition-colors duration-300 text-center"
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
    </div>
    <div
      v-if="image"
      class="w-full lg:w-1/2 min-h-120 md:min-h-140 lg:min-h-160 3xl:min-h-240 relative"
    >
      <img
        :src="image"
        :alt="image"
        class="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  defineProps<{
    reversed?: string;
    image?: string;
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
