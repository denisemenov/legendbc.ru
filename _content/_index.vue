<template>
  <div>
    <main>
      <!-- About Section -->
      <section id="about" class="flex flex-col gap-4">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="w-full md:w-1/2">
            <!-- Photo box 1 -->
            <div class="h-[600px] bg-cover bg-center" style="background-image: url('/images/IMG_0962.jpg')"></div>
          </div>
          <div class="w-full md:w-1/2">
            <div
              class="flex flex-col items-center justify-center min-h-[600px] p-4 md:p-[50px] bg-stone-100 hover:bg-gold-100 transition-colors duration-300 text-center"
            >
              <h2 class="text-4xl font-serif font-bold tracking-wide mb-1">Клуб легендарных игроков</h2>
              <h5 class="text-gold-500 font-serif italic mb-8">Наш многолетний опыт для вашего наслаждения игрой</h5>
              <p class="mb-1">
                Бильярдный клуб "Легенда" создан легендарными в бильярдном мире личностями, которые вложили все свои
                знания и весь накопленный опыт в создание по-настоящему профессионального клуба! За созданием клуба
                стоят знаковые фигуры бильярдного спорта: <strong>Евгений Сталев,</strong>
                <strong>Сергей Бауров и Сергей Крыжановский</strong>. Окажитесь в обществе чемпионов мира по русскому
                бильярду, играя за соседним с ними столом.
              </p>
              <NuxtLink
                to="#contacts"
                class="inline-block mt-8 px-8 py-4 border-2 border-gold-500 text-gold-500 font-bold hover:bg-gold-500 hover:text-white transition duration-500"
              >
                Как нас найти
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="flex flex-col md:flex-row gap-4">
          <div class="w-full md:w-1/2">
            <div
              class="flex flex-col items-center justify-center min-h-[600px] p-4 md:p-[50px] bg-stone-100 hover:bg-gold-100 transition-colors duration-300 text-center"
            >
              <h2 class="text-4xl font-serif font-bold tracking-wide mb-1">Легендарное качество</h2>
              <h5 class="text-gold-500 font-serif italic mb-8">Бескомпромиссный высший класс</h5>
              <p class="mb-1"
                >Оцените игровые качества столов высшего класса, изготовленные легендарной компанией E.St:</p
              >
              <ul class="list-square pl-10 text-left">
                <li>Усовершенствованная металлоконстурукция</li>
                <li>Итальянские плиты Carlo Jufra 45mm</li>
                <li>Сукно Iwan Simonis 760 от мирового лидера</li>
                <li>Шары Aramith Premier 280g от мирового лидера</li>
                <li>Лузы 70,5 -71mm</li>
              </ul>
              <NuxtLink
                to="/about"
                class="inline-block mt-8 px-8 py-4 border-2 border-gold-500 text-gold-500 font-bold hover:bg-gold-500 hover:text-white transition duration-500"
              >
                Наше оборудование
              </NuxtLink>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <!-- Photo box 2 -->
            <div class="h-[600px] bg-cover bg-center" style="background-image: url('/images/l2.jpg')"></div>
          </div>
        </div>
      </section>

      <!-- Numbers Section -->
      <section id="numbers" class="py-12 px-4 text-center">
        <div class="flex flex-wrap justify-center gap-8">
          <div class="w-full sm:w-1/2 md:w-1/4">
            <h2 class="text-4xl font-serif font-bold">15</h2>
            <h5 class="text-gold-500 font-serif italic">столов для русского бильярда</h5>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/4">
            <h2 class="text-4xl font-serif font-bold">2</h2>
            <h5 class="text-gold-500 font-serif italic">стола для американского пула</h5>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/4">
            <h2 class="text-4xl font-serif font-bold">2</h2>
            <h5 class="text-gold-500 font-serif italic">VIP-зала</h5>
          </div>
          <div class="w-full sm:w-1/2 md:w-1/4">
            <h2 class="text-4xl font-serif font-bold">1</h2>
            <h5 class="text-gold-500 font-serif italic">TV-зона</h5>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section id="services" class="p-4">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="w-full md:w-1/2">
            <div class="h-[600px] bg-cover bg-center" style="background-image: url('/images/IMG_0832.jpg')"></div>
          </div>
          <div class="w-full md:w-1/2">
            <div
              class="flex flex-col items-center justify-center min-h-[600px] p-4 md:p-[50px] bg-stone-100 hover:bg-gold-100 transition-colors duration-300 text-center"
            >
              <h2 class="text-4xl font-serif font-bold tracking-wide mb-1">Легендарный сервис</h2>
              <h5 class="text-gold-500 font-serif italic mb-8">Всё для вашего комфорта</h5>
              <p
                >Отдыхайте в VIP-зале, наблюдайте за онлайн-трансляциями в TV-зоне с двухуровневыми трибунами для
                просмотра спортивных матчей на большом проекционном экране, наслаждайтесь нашим бомбическим баром,
                вкуснейшими блюдами от нашего шеф-повара и эксклюзивным пивом Хамовники.</p
              >
              <NuxtLink
                to="/price"
                class="inline-block mt-8 px-8 py-4 border-2 border-gold-500 text-gold-500 font-bold hover:bg-gold-500 hover:text-white transition duration-500"
              >
                Посмотреть меню
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="w-full">
          <div class="service-box text-center p-8 bg-stone-100 hover:bg-gold-100 transition-colors duration-300 my-4">
            <img src="/images/party.svg" width="80" class="mx-auto mb-6" />
            <h2 class="text-3xl font-serif font-bold mb-4">Мероприятия</h2>
            <p class="mb-6"
              >Планируете проведение корпоратива или турнира? Хотите отметить день рождения, юбилей, встречу старых
              друзей или любой другой праздник? <br />
              Welcome!</p
            >
            <NuxtLink
              to="/events"
              class="inline-block px-8 py-4 border-2 border-gold-500 text-gold-500 font-bold hover:bg-gold-500 hover:text-white transition duration-500"
            >
              Запланировать мероприятие
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Reviews Section -->
      <section id="reviews" class="py-20 px-4 md:px-20">
        <h2 class="text-4xl font-serif font-bold tracking-wide mb-1">Наши клиенты любят "Легенду"</h2>
        <h5 class="text-gold-500 font-serif italic mb-12">И не могут об этом молчать...</h5>

        <!-- Review Slider Component -->
        <ReviewSlider />
      </section>

      <!-- Gallery Section -->
      <section id="gallery" class="px-2.5 mb-10">
        <div class="flex flex-wrap">
          <div class="w-full md:w-1/4 p-2.5">
            <h2 class="text-4xl font-serif font-bold tracking-wide mb-1">Галерея</h2>
            <h5 class="text-gold-500 font-serif italic mb-8">Мы любим играть красиво</h5>
            <p class="hidden md:block">
              Ещё больше фотографий и информации в
              <a href="#" class="text-gold-500 hover:text-gold-700">Instagram</a>,
              <a href="#" class="text-gold-500 hover:text-gold-700">Facebook</a>,
              <a href="#" class="text-gold-500 hover:text-gold-700">ВКонтакте</a>,
              <a href="#" class="text-gold-500 hover:text-gold-700">Twitter</a>. Подписывайтесь и следите за нашими
              новостями.
            </p>
          </div>

          <!-- <GalleryGrid class="w-full md:w-3/4" /> -->
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup>
// Additional logic if needed can be added here
</script>

<style lang="scss">
.list-square {
  list-style-type: square;
}
</style>
