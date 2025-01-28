<template>
  <footer
    id="contacts"
    class="flex flex-col md:flex-row gap-4"
  >
    <div class="w-full md:w-1/2">
      <YaMap />
    </div>

    <div
      class="w-full md:w-1/2 flex flex-col items-center justify-center min-h-[600px] p-4 md:p-10 bg-stone-100 hover:bg-gold-100 transition-colors duration-300 text-center"
    >
      <h2 class="font-serif font-extrabold text-4xl mt-12 mx-auto text-center">Контакты</h2>
      <p class="font-sans-display font-light italic text-lg text-gold-500 mb-8 mx-auto text-center">
        Нас легко найти и мы умеем общаться любым удобным вам способом
      </p>

      <div class="space-y-4">
        <p>
          Мы находимся в 2 минутах ходьбы от м. Волоколамская: <br />
          Пятницкое ш., д. 3, ТЦ "Пятница", 2 этаж
        </p>

        <p>
          <NuxtLink
            to="tel:+79166244545"
            class="hover:text-gold-500 transition-colors"
          >
            +7 916 624 4545
          </NuxtLink>
        </p>

        <p>
          ПН - ЧТ 12:00 - 02:00 <br />
          ПТ - ВС 12:00 - 06:00
        </p>

        <div class="space-y-1">
          <NuxtLink
            v-for="link in socials"
            :key="link.name"
            :to="link.url"
            class="block hover:text-gold-500 transition-colors"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
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
</script>
