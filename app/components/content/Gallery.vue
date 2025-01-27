<template>
  <div
    :id="galleryId"
    ref="galleryRef"
    class="grid grid-cols-2 md:grid-cols-3 gap-4"
  >
    <template v-if="images && images.length">
      <NuxtLink
        v-for="(image, i) in images"
        :key="i"
        :href="image.src"
        :data-pswp-width="image.width"
        :data-pswp-height="image.height"
        class="block relative w-full aspect-square cursor-pointer"
      >
        <div class="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div class="h-[calc(100%-1rem)] border-2 border-white m-2" />
        </div>
        <NuxtImg
          :src="image.src"
          :alt="image.description"
          class="inset-0 w-full h-full object-cover m-0"
        />
      </NuxtLink>
    </template>

    <template v-else>
      <NuxtLink
        v-for="(image, i) in slotImages"
        :key="i"
        :href="image.src"
        :data-pswp-width="image.width"
        :data-pswp-height="image.height"
        class="block relative w-full aspect-square"
      >
        <div class="block relative w-full h-full">
          <div class="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div class="h-[calc(100%-1rem)] border-2 border-white m-2" />
          </div>
          <NuxtImg
            :src="image.src"
            :alt="image.description"
            class="absolute inset-0 w-full h-full object-cover m-0"
          />
        </div>
      </NuxtLink>
    </template>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import PhotoSwipeLightbox from 'photoswipe/lightbox';
  import 'photoswipe/style.css';

  interface GalleryImage {
    src: string;
    description?: string;
    width?: number;
    height?: number;
  }

  const props = defineProps<{
    images?: GalleryImage[];
  }>();

  const galleryId = `gallery-${Math.random().toString(36).substring(2)}`;
  const galleryRef = ref<HTMLElement | null>(null);
  const slotImages = ref<GalleryImage[]>([]);
  let lightbox: any = null;

  onMounted(async () => {
    if (import.meta.client && galleryRef.value) {
      const imgs = galleryRef.value.querySelectorAll('img');
      for (const img of Array.from(imgs)) {
        const imgData: GalleryImage = {
          src: img.getAttribute('src') || '',
          description: img.getAttribute('alt') || '',
        };

        const loadImg = new Image();
        await new Promise((resolve) => {
          loadImg.onload = () => {
            imgData.width = loadImg.width;
            imgData.height = loadImg.height;
            resolve(true);
          };
          loadImg.src = imgData.src;
        });

        slotImages.value.push(imgData);
      }

      const paragraph = galleryRef.value.querySelector('p');
      if (paragraph) paragraph.remove();

      lightbox = new PhotoSwipeLightbox({
        gallery: '#' + galleryId,
        children: 'a',
        pswpModule: () => import('photoswipe'),
      });
      lightbox.init();
    }
  });

  onUnmounted(() => {
    if (lightbox) {
      lightbox.destroy();
      lightbox = null;
    }
  });
</script>

<style>
  :root {
    --pswp-bg: #000000;
  }
</style>
