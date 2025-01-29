<template>
  <a
    class="cursor-pointer block relative overflow-hidden group"
    :href="props.src"
  >
    <img
      :src="props.src"
      :alt="props.alt"
      :width="props.width"
      :height="props.height"
      class="object-cover w-full h-full"
      @load="handleImageLoad"
    />
    <span class="absolute flex h-full w-full inset-0 bg-black/40 transition-opacity duration-300 opacity-0 hover:opacity-100">
      <span class="flex h-[calc(100%-1rem)] w-[calc(100%-1rem)] border-2 border-white m-2"> </span>
    </span>
  </a>
</template>

<script lang="ts" setup>
  const props = defineProps({
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    width: {
      type: [String, Number],
      default: undefined,
    },
    height: {
      type: [String, Number],
      default: undefined,
    },
  });

  function handleImageLoad(event: Event) {
    const img = event.target as HTMLImageElement;
    const link = img.parentElement;

    if (link) {
      link.setAttribute('data-pswp-width', img.naturalWidth.toString());
      link.setAttribute('data-pswp-height', img.naturalHeight.toString());
    }
  }
</script>

<style lang="scss"></style>
