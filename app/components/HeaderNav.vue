<template>
  <div class="z-50 bg-transparent w-full">
    <div class="max-w-screen-xl mx-auto">
      <div class="flex flex-row items-center justify-between">
        <div class="flex flex-col items-center lg:items-start gap-2">
          <HeaderLogo />

          <NuxtLink
            :to="`tel:${$t('company.contacts.phone')}`"
            class="flex justify-center items-center hover:opacity-80 transition gap-0.5"
          >
            <NuxtImg
              src="/images/phone.svg"
              alt="Телефон"
              class="w-[14px] h-[14px] block"
            />
            <span class="text-white font-bold text-base tracking-tight">{{ $t('company.contacts.phone') }}</span>
          </NuxtLink>
        </div>

        <button
          class="lg:hidden top-10 right-4 border-2 border-white p-2.5 z-[999] transition-colors cursor-pointer"
          :class="{ 'bg-gold-500/70': isMenuOpen }"
          @click="toggleMenu"
        >
          <div class="w-6 h-4 relative flex flex-col justify-between">
            <span
              class="w-full h-0.5 bg-white transition-transform duration-300"
              :class="{ 'rotate-45 translate-y-[7px]': isMenuOpen }"
            />
            <span
              class="w-full h-0.5 bg-white transition-opacity"
              :class="{ 'opacity-0': isMenuOpen }"
            />
            <span
              class="w-full h-0.5 bg-white transition-transform duration-300"
              :class="{ '-rotate-45 -translate-y-[7px]': isMenuOpen }"
            />
          </div>
        </button>

        <nav
          class="fixed lg:relative top-0 left-0 w-full h-screen lg:h-auto bg-white lg:bg-transparent lg:bg-none pt-[200px] lg:pt-0 text-center lg:text-right transform transition-transform duration-300"
          :class="[isMenuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0']"
        >
          <div class="flex flex-col lg:flex-row items-center lg:items-end justify-end gap-4">
            <NuxtLinkLocale
              v-for="link in navLinks"
              :key="link.to"
              :to="localePath(link.to)"
              class="p-2 font-semibold lg:text-white lg:hover:text-slate-200 transition lg:hover:bg-gold-500/80"
              :class="{ 'bg-gold-500/70 text-white rounded-xs': isActiveLink(link.to) }"
              @click="closeMenu"
            >
              {{ $t(link.text) }}
            </NuxtLinkLocale>

            <div class="w-full lg:w-0.5 h-px lg:h-10 bg-gold-200 lg:bg-white my-4 lg:my-0 lg:mx-4"></div>

            <div class="flex flex-row items-center justify-center lg:justify-end gap-4">
              <SwitchLocalePathLink
                v-for="lang of locales"
                :locale="lang.code"
                @click="
                  () => {
                    setLocale(lang.code);
                    closeMenu();
                  }
                "
                class="p-2 font-semibold lg:text-white lg:hover:text-slate-200 transition uppercase"
                :class="{ 'bg-gold-500/70 text-white rounded-xs': currentLocale === lang.code }"
              >
                {{ lang.name }}
              </SwitchLocalePathLink>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue';
  const { setLocale, locales, locale, t } = useI18n();
  const route = useRoute();
  const localePath = useLocalePath();

  const currentLocale = computed(() => locale.value);
  const isMenuOpen = ref(false);

  const navLinks = [
    { to: '/about', text: 'nav.about' },
    { to: '/price', text: 'nav.price' },
    { to: '/events', text: 'nav.events' },
    { to: '/contacts', text: 'nav.contacts' },
  ];

  const isActiveLink = (path: string) => route.path === localePath(path);

  const setBodyScroll = (disable: boolean) => {
    document.body.style.overflow = disable ? 'hidden' : '';
  };

  const closeMenu = () => {
    isMenuOpen.value = false;
    setBodyScroll(false);
  };

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
    setBodyScroll(isMenuOpen.value);
  };
</script>

<style lang="scss"></style>
