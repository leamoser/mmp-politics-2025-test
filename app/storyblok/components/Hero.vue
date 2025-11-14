<script setup>
const props = defineProps({
  blok: { required: true, type: Object }
})
</script>

<template>
  <section v-editable="blok" class="bg-red-500 py-52 *:text-center flex flex-col items-center justify-center px-12 gap-3">
    <h1 class="font-inter text-white text-8xl italic font-black uppercase max-w-3xl leading-none">
      {{ blok.title }}
    </h1>
    <p class="font-inter text-red-200 text-3xl font-normal max-w-md">{{ blok.subtitle }}</p>
  </section>
</template>
