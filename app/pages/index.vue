<script setup>
const config = useRuntimeConfig()
const { story } = await useAsyncStoryblok('home', {
  lazy: false,
  api: {
    version: config.public.storyblok_version,
    resolve_relations: 'overviewTestimonials.testimonials'
  },
  bridge: {
    resolveRelations: ['overviewTestimonials.testimonials'],
  }
});
</script>

<template>
  <div>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </div>
</template>
