<template>
  <ClientOnly>
    <div
      id="yamap"
      ref="mapContainer"
      class="absolute inset-0 w-full h-full object-cover"
    />
  </ClientOnly>
</template>

<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();

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
          `<a href="https://legendbc.ru/" target="_blank" rel="nofollow noopener">${t('company.name.short')}</a><br>` +
          `<span class="description">${t('company.type')}</span>`,
        balloonContentBody:
          `<a href="tel:${t('company.contacts.phone')}">${t('company.contacts.phone')}</a><br/>` +
          `${t('company.contacts.address.full')}`,
        balloonContentFooter: `${t('company.schedule.weekdays')}<br/>${t('company.schedule.weekend')}`,
        hintContent: t('map.hint'),
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
