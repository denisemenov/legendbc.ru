<template>
  <ClientOnly>
    <div
      id="yamap"
      ref="mapContainer"
      class="w-full h-full min-h-120 md:min-h-140 lg:min-h-160 3xl:min-h-240 relative"
    />
  </ClientOnly>
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

  onMounted(() => {
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
          '<span class="description">Бильярдный клуб</span>W',
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
      }
    );

    myMap.geoObjects.add(placemark);
    placemark.balloon.open();

    myMap.controls.add('zoomControl', {
      float: 'right',
    });
  }

  useHead({
    script: [
      {
        src: 'https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY&lang=ru_RU',
        async: true,
      },
    ],
  });
</script>

<style lang="scss">
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
