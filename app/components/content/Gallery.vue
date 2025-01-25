<template>
  <div ref="galleryRef" class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <template v-if="images && images.length">
      <div
v-for="(image, i) in images" :key="i" class="block relative w-full aspect-square cursor-pointer"
        @click.prevent="openLightbox(i)">
        <div class="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div class="h-[calc(100%-1rem)] border-2 border-white m-2"/>
        </div>
        <NuxtImg :src="image.src" :alt="image.description" class="inset-0 w-full h-full object-cover m-0" />
      </div>
    </template>

    <template v-else>
      <div v-for="(image, i) in slotImages" :key="i" class="block relative w-full aspect-square">
        <div class="block relative w-full h-full" @click.prevent="openLightboxForSlot(i)">
          <div class="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div class="h-[calc(100%-1rem)] border-2 border-white m-2"/>
          </div>
          <NuxtImg :src="image.src" :alt="image.description" class="absolute inset-0 w-full h-full object-cover m-0" />
        </div>

      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

interface GalleryImage {
  src: string;
  description?: string;
}

const props = defineProps<{
  images?: GalleryImage[];
}>();

const galleryRef = ref<HTMLElement | null>(null)
const slotImages = ref<GalleryImage[]>([])

onMounted(async () => {
  // Дождемся следующего тика для уверенности, что DOM обновлен
  await nextTick()

  if (import.meta.client && galleryRef.value) {
    // Ищем все img элементы внутри слота
    const imgs = galleryRef.value.querySelectorAll('img')
    slotImages.value = Array.from(imgs).map(img => ({
      src: img.getAttribute('src') || '',
      description: img.getAttribute('alt') || ''
    }))

    // Удаляем оригинальные img элементы из параграфа
    const paragraph = galleryRef.value.querySelector('p')
    if (paragraph) {
      paragraph.remove()
    }
  }
})

function openLightbox(index: number) {
  const lightbox = document.createElement('div');
  lightbox.className = 'fixed inset-0 bg-black/90 z-50 flex items-center justify-center';

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

function openLightboxForSlot(index: number) {
  const lightbox = document.createElement('div');
  lightbox.className = 'fixed inset-0 bg-black/90 z-50 flex items-center justify-center';

  const img = document.createElement('img');
  img.src = slotImages.value[index].src;
  img.className = 'max-w-[90vw] max-h-[90vh] object-contain';

  if (slotImages.value[index].description) {
    const caption = document.createElement('div');
    caption.className = 'absolute bottom-4 left-0 right-0 text-center text-white font-serif italic';
    caption.textContent = slotImages.value[index].description;
    lightbox.appendChild(caption);
  }

  lightbox.appendChild(img);
  lightbox.addEventListener('click', () => lightbox.remove());
  document.body.appendChild(lightbox);
}
</script>

<style lang="scss"></style>
