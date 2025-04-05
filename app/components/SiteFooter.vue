<template>
  <footer
    id="contacts"
    class="flex flex-col lg:flex-row-reverse gap-4"
  >
    <div
      class="flex flex-col items-center justify-center w-full lg:w-1/2 p-4 md:p-8 text-center hover:bg-gold-100 shadow-block shadow-stone-400/20 hover:shadow-gold-400/20 transition-colors duration-300"
    >
      <h2 class="font-serif font-extrabold text-4xl mt-12 mx-auto text-center">{{ $t('footer.title') }}</h2>
      <p class="font-sans-display font-light italic text-lg text-gold-500 mb-8 mx-auto text-center">
        {{ $t('footer.subtitle') }}
      </p>

      <div class="gap-4 mb-8">
        <p>
          {{
            $t('footer.findUs', {
              walkTime: $t('company.contacts.walkTime'),
              metro: $t('company.contacts.metro'),
            })
          }}
          <br />
          {{ $t('company.contacts.address.full') }}
        </p>

        <p>
          <NuxtLink
            :to="`tel:${$t('company.contacts.phone')}`"
            class="text-gold-500 font-bold hover:text-gold-600 transition-colors"
          >
            {{ $t('company.contacts.phone') }}
          </NuxtLink>
        </p>

        <p>
          {{ $t('company.schedule.weekdays') }} <br />
          {{ $t('company.schedule.weekend') }}
        </p>

        <div class="flex flex-col">
          <NuxtLink
            :to="$t('company.social.vk.link')"
            target="_blank"
            class="text-gold-500 font-bold hover:text-gold-600 transition-colors capitalize"
          >
            {{ $t('company.social.vk.title') }}
          </NuxtLink>
          <NuxtLink
            :to="$t('company.social.facebook.link')"
            target="_blank"
            class="text-gold-500 font-bold hover:text-gold-600 transition-colors capitalize"
          >
            {{ $t('company.social.facebook.title') }}
          </NuxtLink>
          <NuxtLink
            :to="$t('company.social.instagram.link')"
            target="_blank"
            class="text-gold-500 font-bold hover:text-gold-600 transition-colors capitalize"
          >
            {{ $t('company.social.instagram.title') }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <div
      class="w-full lg:w-1/2 min-h-120 md:min-h-140 lg:min-h-160 3xl:min-h-240 relative shadow-block shadow-stone-400/20 hover:shadow-gold-400/20"
    >
      <YaMap />
    </div>
  </footer>
</template>
