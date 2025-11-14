<script setup>
const storyblokApi = useStoryblokApi()
const config = useRuntimeConfig()
const { data } = await storyblokApi.get('cdn/stories/globals', {
  version: config.public.storyblok_version
})
const logo = data.story.content.logo;
</script>

<template>
  <header class="w-full fixed p-12 pointer-events-none flex">
    <NuxtLink class="pointer-events-auto" to="/">
      <img class="size-40" :src="logo.filename" :alt="logo.alt">
    </NuxtLink>
  </header>
</template>
