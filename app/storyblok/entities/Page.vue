<script setup>
const props = defineProps({
  blok: {required: true, type: Object}
})
</script>

<template>
  <main v-editable="blok">
    <StoryblokComponent v-for="blok in blok.components" :key="blok._uid" :blok="blok"/>
  </main>
</template>
