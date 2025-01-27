<template>
  <NuxtLink
    v-if="isExternal || isSpecialProtocol"
    v-bind="bindProps"
  >
    <slot mdc-unwrap="p" />
  </NuxtLink>
  <NuxtLinkLocale
    v-else
    v-bind="bindProps"
  >
    <slot mdc-unwrap="p" />
  </NuxtLinkLocale>
</template>

<script setup lang="ts">
  import type { PropType } from 'vue';
  import { useRuntimeConfig } from '#app';

  type TargetType = '_blank' | '_parent' | '_self' | '_top';
  interface BindProps {
    to?: string;
    href?: string;
    target?: TargetType | null;
    rel?: string;
  }

  const props = defineProps({
    href: { type: String, default: '' },
    target: { type: String as PropType<TargetType | null>, default: null },
    rel: { type: String, default: '' },
  });

  const isSpecialProtocol = computed(() =>
    ['tel:', 'mailto:', 'sms:'].some((protocol) => props.href.toLowerCase().startsWith(protocol))
  );

  const isExternal = computed(() => {
    if (!props.href || isSpecialProtocol.value) return false;
    return /^(https?:)?\/\//.test(props.href);
  });

  const bindProps = computed<BindProps>(() => {
    const result: BindProps = {
      to: props.href,
    };

    if (isSpecialProtocol.value) {
      return { href: props.href };
    }

    if (isExternal.value) {
      result.target = '_blank';
      result.rel = 'noopener noreferrer nofollow';
    } else {
      if (props.target) result.target = props.target as TargetType;
      if (props.rel) result.rel = props.rel;
    }

    return result;
  });
</script>
