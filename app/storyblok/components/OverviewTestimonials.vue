<script setup>
const props = defineProps({
  blok: { required: true, type: Object }
})
</script>

<template>
  <section v-editable="blok" class="bg-yellow-300 py-20 px-12 flex flex-col gap-14">
    <h1 class="text-center text-black font-black italic font-inter uppercase text-5xl">
      {{ blok.title }}
    </h1>
    <div class="flex items-center gap-10">
      <StoryblokComponent v-for="blok in blok.testimonials" :key="blok._uid" :blok="blok.content"/>
    </div>
  </section>
</template>
