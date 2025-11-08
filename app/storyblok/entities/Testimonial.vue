<script setup>
const props = defineProps({
  blok: { required: true, type: Object }
})
</script>

<template>
  <article class="w-full flex flex-col gap-4 items-center">
    <img class="rounded-full size-60" :src="blok.image.filename" :alt="blok.image.alt" />
    <div class="flex flex-col gap-2 *:text-center *:text-black *:font-inter *:font-normal">
      <h2 class="text-2xl">{{ blok.name }}</h2>
      <p class="text-base">{{ blok.text }}</p>
    </div>
  </article>
</template>
