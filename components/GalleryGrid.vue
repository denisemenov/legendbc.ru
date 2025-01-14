<template>
  <div class="flex flex-wrap">
    <div v-for="(image, i) in images" :key="i" class="w-1/2 md:w-1/3 p-2.5">
      <a
        href="#"
        class="gallery-lightbox block relative overflow-hidden"
        @click.prevent="openLightbox(i)"
      >
        <div class="gallery-hover absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div class="h-[calc(100%-2rem)] border-2 border-white m-4"></div>
        </div>
        <img :src="image.thumbnail" :alt="'Gallery image ' + (i + 1)" class="w-full">
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const images = [
  {
    thumbnail: '/images/legend_crop_01.jpg',
    full: '/images/legend_01.jpg',
    description: 'Основной зал'
  },
  {
    thumbnail: '/images/legend_crop_02.jpg',
    full: '/images/legend_02.jpg',
    description: 'VIP зал'
  },
  {
    thumbnail: '/images/legend_crop_03.jpg',
    full: '/images/legend_03.jpg',
    description: 'Турнирная зона'
  },
  {
    thumbnail: '/images/legend_crop_04.jpg',
    full: '/images/legend_04.jpg',
    description: 'Бильярдный стол'
  },
  {
    thumbnail: '/images/legend_crop_05.jpg',
    full: '/images/legend_05.jpg',
    description: 'TV зона'
  },
  {
    thumbnail: '/images/legend_crop_06.jpg',
    full: '/images/legend_06.jpg',
    description: 'Игровая зона'
  },
  {
    thumbnail: '/images/legend_crop_07.jpg',
    full: '/images/legend_07.jpg',
    description: 'Интерьер клуба'
  },
  {
    thumbnail: '/images/legend_crop_08.jpg',
    full: '/images/legend_08.jpg',
    description: 'Бар'
  },
  {
    thumbnail: '/images/legend_crop_09.jpg',
    full: '/images/legend_09.jpg',
    description: 'Ресторанная зона'
  },
  {
    thumbnail: '/images/legend_crop_10.jpg',
    full: '/images/legend_10.jpg',
    description: 'VIP комната'
  },
  {
    thumbnail: '/images/legend_crop_11.jpg',
    full: '/images/legend_11.jpg',
    description: 'Турнирный зал'
  }
];

function openLightbox(index: number) {
  const lightbox = document.createElement('div');
  lightbox.className = 'fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center';
  
  const img = document.createElement('img');
  img.src = images[index].full;
  img.className = 'max-w-[90vw] max-h-[90vh] object-contain';
  
  const caption = document.createElement('div');
  caption.className = 'absolute bottom-4 left-0 right-0 text-center text-white font-serif italic';
  caption.textContent = images[index].description;
  
  lightbox.appendChild(img);
  lightbox.appendChild(caption);
  
  lightbox.addEventListener('click', () => {
    lightbox.remove();
  });
  
  document.body.appendChild(lightbox);
}
</script>

<style scoped>
.gallery-hover {
  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4));
}
</style>
