<script setup>
const config = useRuntimeConfig()
const { story } = await useAsyncStoryblok('home', {
  lazy: false,
  deep: true,
  api: {
    version: config.public.storyblok_version,
    resolve_relations: 'overviewTestimonials.testimonials'
  },
  bridge: {
    resolveRelations: ['overviewTestimonials.testimonials'],
    forceReload: true,
  }
});
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
