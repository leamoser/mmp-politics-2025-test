<script setup>
const props = defineProps({
  blok: { required: true, type: Object }
})
</script>

<template>
  <section v-editable="blok" class="bg-red py-52 flex flex-col items-center justify-center px-12 gap-3">
    <h1 class="text-white text-center max-w-3xl typo-h1">
      {{ blok.title }}
    </h1>
    <p class="text-white/60 typo-subline max-w-md text-center">{{ blok.subline }}</p>
  </section>
</template>
