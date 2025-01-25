<template>
  <h1 class="font-serif font-extrabold text-4xl mt-12 mx-auto text-center">
    <slot mdc-unwrap="p" />
  </h1>

  <p class="font-sans-display font-light italic text-lg text-gold-500 mb-8 mx-auto text-center">
    <slot
      mdc-unwrap="p"
      name="description"
    />
  </p>
</template>
