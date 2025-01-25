<template>
  <div class="w-full md:w-1/2">
    <div
      class="flex flex-col items-center justify-center min-h-[600px] p-4 md:p-[50px] bg-stone-100 hover:bg-gold-100 transition-colors duration-300 text-center"
    >
      <h2 class="text-4xl font-serif font-bold tracking-wide mb-1">
        <slot
          name="title"
          mdc-unwrap="p"
        />
      </h2>

      <h5 class="text-gold-500 font-serif italic mb-8">
        <slot
          name="subtitle"
          mdc-unwrap="p"
        />
      </h5>

      <div class="mb-1">
        <slot mdc-unwrap="p" />
      </div>
      <!-- <NuxtLinkLocale
        v-if="$slots.buttonLink"
        :to="$slots.buttonLink"
        class="inline-block mt-8 px-8 py-4 border-2 border-gold-500 text-gold-500 font-bold hover:bg-gold-500 hover:text-white transition duration-500"
      >
        <slot name="buttonText" mdc-unwrap="p" />
      </NuxtLinkLocale> -->
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss"></style>
