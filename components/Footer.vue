<template>
  <footer class="flex flex-col md:flex-row gap-5" id="contacts">
    <div class="w-full md:w-1/2">
      <ClientOnly>
        <div id="yamap" ref="mapContainer" class="w-full min-h-[400px] sm:min-h-[600px] relative"></div>
      </ClientOnly>
    </div>

    <div
      class="w-full md:w-1/2 flex flex-col items-center justify-center min-h-[600px] p-5 md:p-10 bg-stone-100 hover:bg-gold-100 transition-colors duration-300 text-center"
    >
      <h2 class="text-4xl font-serif font-bold tracking-wide mb-1">Контакты</h2>
      <h5 class="text-gold-500 font-serif italic mb-8">
        Нас легко найти и мы умеем общаться любым удобным вам способом
      </h5>

      <div class="space-y-4">
        <p>
          Мы находимся в 2 минутах ходьбы от м. Волоколамская: <br />
          Пятницкое ш., д. 3, ТЦ "Пятница", 2 этаж
        </p>

        <p>
          <a href="tel:+79166244545" class="text-gold-500 font-bold"> +7 916 624 4545 </a>
        </p>

        <p>
          ПН - ЧТ 12:00 - 02:00 <br />
          ПТ - ВС 12:00 - 06:00
        </p>

        <div class="space-y-1">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            target="_blank"
            class="block text-gold-500 font-bold hover:text-gold-700"
          >
            {{ social.name }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

declare global {
  interface Window {
    ymaps: typeof ymaps;
  }
}

interface YMaps {
  Map: any;
  Placemark: any;
  ready: (callback: () => void) => void;
}

declare const ymaps: YMaps;

const mapContainer = ref(null);

const socials = [
  {
    name: 'Vk',
    url: 'https://vk.com/legendbcru',
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/legendbcru',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/legendbcru',
  },
];

onMounted(() => {
  // Wait for Yandex Maps API to load
  if (window.ymaps) {
    window.ymaps.ready(initMap);
  }
});

function initMap() {
  const myMap = new ymaps.Map('yamap', {
    center: [55.835863, 37.385587],
    zoom: 16,
    controls: [],
  });

  const placemark = new ymaps.Placemark(
    myMap.getCenter(),
    {
      balloonContentHeader:
        '<a href="https://legendbc.ru/" target="_blank" rel="nofollow noopener">Легенда</a><br>' +
        '<span class="description">Бильярдный клуб</span>',
      balloonContentBody:
        '<a href="tel:+79166244545">+7 916 624 4545</a><br/>' +
        'Москва, Митино, Пятницкое ш., д. 3,<br/> ТЦ "Пятница", 2 этаж',
      balloonContentFooter: 'ПН - ЧТ 12:00 - 02:00<br/>' + 'ПТ - ВС 12:00 - 06:00',
      hintContent: 'Бильярдный клуб "Легенда"',
    },
    {
      iconLayout: 'default#image',
      iconImageHref: '/assets/placeholder.svg',
      iconImageSize: [56, 56],
      iconImageOffset: [-28, -56],
    },
  );

  myMap.geoObjects.add(placemark);
  placemark.balloon.open();

  // Add zoom control
  myMap.controls.add('zoomControl', {
    float: 'right',
  });
}
</script>

<style lang="scss">
/* Custom styles for the map */
#yamap {
  @apply overflow-hidden;
}

:deep(.ymaps-2-1-79-balloon__content) {
  @apply p-4 text-sm leading-relaxed;
}

:deep(.ymaps-2-1-79-balloon__content) a {
  @apply text-gold-500 font-bold hover:text-gold-700;
}
</style>
