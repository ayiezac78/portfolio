<template>
  <div>
    <h1 class="text-xl font-medium text-cta mb-3 flex items-center gap-x-1">{{ $route.path }}
      <Icon icon="line-md:text-box-multiple-to-text-box-transition" />
    </h1>
    <PostCard />
  </div>
</template>
<script setup>
import PostCard from '@/components/cards/PostCard.vue'
import { Icon } from '@iconify/vue';
import { useHead } from '@unhead/vue'
useHead({
  title: 'Ayie',
  titleTemplate: '%s | Posts',
  meta: [
    {
      name: 'description',
      content: 'Check out my latest web development posts and personal updates. Discover my journey as a passionate learner and creative developer.'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://ayiezac.netlify.app/posts'
    }

  ]
})
</script>
