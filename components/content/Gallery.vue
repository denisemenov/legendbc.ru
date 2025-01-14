<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <a
      v-for="(image, i) in images"
      :key="i"
      href="#"
      class="block relative w-full aspect-square"
      @click.prevent="openLightbox(i)"
    >
      <div class="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div class="h-[calc(100%-1rem)] border-2 border-white m-2"></div>
      </div>

      <img
        :src="image.thumbnail || image.src"
        :alt="image.description || `Gallery image ${i + 1}`"
        class="inset-0 w-full h-full object-cover m-0"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
interface GalleryImage {
  thumbnail?: string;
  src: string;
  description?: string;
}

const props = defineProps<{
  images: GalleryImage[];
}>();

function openLightbox(index: number) {
  const lightbox = document.createElement('div');
  lightbox.className = 'fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center';

  const img = document.createElement('img');
  img.src = props.images[index].src;
  img.className = 'max-w-[90vw] max-h-[90vh] object-contain';

  if (props.images[index].description) {
    const caption = document.createElement('div');
    caption.className = 'absolute bottom-4 left-0 right-0 text-center text-white font-serif italic';
    caption.textContent = props.images[index].description;
    lightbox.appendChild(caption);
  }

  lightbox.appendChild(img);

  lightbox.addEventListener('click', () => {
    lightbox.remove();
  });

  document.body.appendChild(lightbox);
}
</script>

<style scoped></style>
