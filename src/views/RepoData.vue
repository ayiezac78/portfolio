<template>
  <div>
    <h1 class="text-xl font-medium text-cta mb-3">{{ $route.path }}</h1>
    <CardDetails />
  </div>
</template>

<script setup>
// import { useRepoData } from "@/stores/RepoData.js";
import CardDetails from '@/components/cards/CardDetails.vue';
import { useHead } from '@unhead/vue'
useHead({
  title: 'Ayie',
  titleTemplate: '%s | Projects',
  meta: [
    {
      name: 'description',
      content: 'Check out the features, code, and live demo of this innovative project. Showcasing my knowledge and skills in web development.'
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://ayiezac.netlify.app/projects'
    }

  ]
})
</script>
<style scoped></style>