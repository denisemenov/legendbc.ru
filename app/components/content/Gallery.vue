<template>
  <div
    ref="galleryRef"
    :id="props.id"
  >
    <Grid
      :cols="cols"
      :class="gridClasses"
    >
      <slot mdc-unwrap="p" />
    </Grid>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted, computed } from 'vue';
  import PhotoSwipeLightbox from 'photoswipe/lightbox';
  import 'photoswipe/style.css';

  type AspectRatioType =
    | 'square' // 1:1
    | 'video' // 16:9
    | 'cinema' // 21:9
    | 'portrait' // 3:4
    | 'landscape' // 4:3
    | 'wide' // 3:2
    | 'ultrawide' // 2:1
    | 'instagram' // 4:5
    | 'pinterest' // 2:3
    | 'auto';

  interface Columns {
    mobile?: 1 | 2 | 3 | 4 | 5 | 6;
    tablet?: 1 | 2 | 3 | 4 | 5 | 6;
    desktop?: 1 | 2 | 3 | 4 | 5 | 6;
  }

  const props = defineProps<{
    id: string;
    aspectRatio?: AspectRatioType;
    cols?: Columns;
  }>();

  const gridClasses = computed(() => {
    if (!props.aspectRatio) return '';

    const ratioClasses: Record<AspectRatioType, string> = {
      square: '[&_a]:aspect-square', // 1:1
      video: '[&_a]:aspect-video', // 16:9
      cinema: '[&_a]:[aspect-ratio:21/9]', // 21:9
      portrait: '[&_a]:[aspect-ratio:3/4]', // 3:4
      landscape: '[&_a]:[aspect-ratio:4/3]', // 4:3
      wide: '[&_a]:[aspect-ratio:3/2]', // 3:2
      ultrawide: '[&_a]:[aspect-ratio:2/1]', // 2:1
      instagram: '[&_a]:[aspect-ratio:4/5]', // 4:5
      pinterest: '[&_a]:[aspect-ratio:2/3]', // 2:3
      auto: '[&_a]:aspect-auto',
    };

    return ratioClasses[props.aspectRatio] || '';
  });

  const galleryRef = ref<HTMLElement | null>(null);
  let lightbox: any = null;

  onMounted(async () => {
    if (!process.client || !galleryRef.value) return;

    const links = galleryRef.value.querySelectorAll('a');
    if (!links.length) return;

    await Promise.all(
      Array.from(links).map((link) => {
        const img = link.querySelector('img');
        if (!img) return Promise.resolve();

        return new Promise((resolve) => {
          const loadImg = new Image();
          loadImg.onload = () => {
            link.setAttribute('data-pswp-width', loadImg.width.toString());
            link.setAttribute('data-pswp-height', loadImg.height.toString());
            resolve(true);
          };
          loadImg.src = img.src;
        });
      })
    );

    lightbox = new PhotoSwipeLightbox({
      gallery: '#' + props.id,
      children: 'a',
      showHideAnimationType: 'fade',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();
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
    --aspect-ratio-video: calc(16 / 9);
  }
</style>
