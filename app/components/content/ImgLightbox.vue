<template>
  <div
    ref="container"
    :id="props.gallery"
  >
    <a
      :class="['cursor-pointer block relative overflow-hidden w-full h-full group', aspectClass]"
      href="#"
    >
      <slot mdc-unwrap="p" />

      <div class="absolute inset-0 bg-black/40 transition-opacity duration-300 opacity-0 hover:opacity-100">
        <div class="h-[calc(100%-1rem)] border-2 border-white m-2" />
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue';
  import PhotoSwipeLightbox from 'photoswipe/lightbox';
  import 'photoswipe/style.css';

  interface ImageInfo {
    width: number;
    height: number;
    src: string;
    alt: string;
    class: string;
  }

  interface Props {
    gallery: string;
    aspectRatio?: string;
  }

  const props = defineProps<Props>();
  const container = ref<HTMLElement | null>(null);
  const imageInfo = ref<ImageInfo | null>(null);
  const aspectClass = computed(() => props.aspectRatio === 'square' ? 'aspect-square' : '');
  let lightbox: any = null;

  onMounted(async () => {
    if (import.meta.client && container.value) {
      await nextTick();
      const img = container.value.querySelector('img') as HTMLImageElement;
      const link = container.value.querySelector('a');
      if (img) {
        const loadImage = new Image();
        loadImage.onload = () => {
          imageInfo.value = {
            width: loadImage.width,
            height: loadImage.height,
            src: img.src,
            alt: img.alt || 'No alt text', 
          };

          if (link) {
            link.href = img.src;
            link.setAttribute('data-pswp-width', loadImage.width.toString());
            link.setAttribute('data-pswp-height', loadImage.height.toString());
          }

          lightbox = new PhotoSwipeLightbox({
            gallery: '#' + props.gallery,
            children: 'a',
            pswpModule: () => import('photoswipe'),
          });
          lightbox.init();
        };
        loadImage.src = img.src;
      }
    }
  });

  onUnmounted(() => {
    if (lightbox) {
      lightbox.destroy();
      lightbox = null;
    }
  });
</script>

<style scoped>
:deep(img) {
  @apply object-cover w-full h-full;
}
</style>
