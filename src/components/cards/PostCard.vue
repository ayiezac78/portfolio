<template>
  <div class="border-2 dark:border-slate-900 card card-compact">
    <div class="card-body h-full justify-center min-h-24">
      <div v-if="isFetching" class="grid grid-cols-1 gap-3 ">
        <div class="flex items-center w-full gap-4">
          <div class="skeleton h-4 w-full"></div>
          <div class="skeleton h-4 w-28"></div>
        </div>
      </div>
      <div v-if="noPostsAvailable">
        <p class="text-sm">No posts available</p>
      </div>
      <div v-if="error">{{ error }}</div>
      <div v-else class="grid grid-cols-1 gap-3">
        <div v-for="post in data" :key="post.slug">
          <RouterLink :to="`/posts/${post.slug}`">
            <PostsCardProp :title="post.title" :date_published=formattedDate(post.createdAt) />
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useTimeAgo, useFetch } from '@vueuse/core';
// import axios from 'axios';
import { RouterLink } from 'vue-router';
import PostsCardProp from '@/components/cards/PostsCardProp.vue';

const url = ref('https://blog-posts-api-csjv.onrender.com/api/blog-posts');
const { data, isFetching, error } = useFetch(url.value).get().json();

const noPostsAvailable = computed(() => {
  return data.value && data.value.length === 0
})


const formattedDate = computed(() => (date) => {
  return useTimeAgo(date).value;
});


</script>

<style scoped></style>