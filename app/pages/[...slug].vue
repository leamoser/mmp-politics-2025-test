<script setup>
const config = useRuntimeConfig()
const route = useRoute();

const { slug } = route.params;
const extendables = ['overviewTestimonials.testimonials'];

const { story } = await useAsyncStoryblok(slug && slug.length > 0 ? slug.join('/') : 'home', {
  lazy: false,
  deep: true,
  api: {
    version: config.public.storyblok_version,
    resolve_relations: extendables.toString()
  },
  bridge: {
    resolveRelations: extendables,
    forceReload: true,
  }
});
</script>

<template>
  <Header />
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
