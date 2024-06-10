<script setup>
import { useRoute } from "vue-router";
import { ref, computed, watch } from "vue"
import { useTimeAgo, useFetch } from '@vueuse/core';
import { Icon } from "@iconify/vue";
import { useHead } from "unhead";

const route = useRoute();
const slug = ref(route.params.slug);
const fullPath = ref(route.fullPath);

const calculateReadingTime = (text) => {
  const wordsPerMinute = 200;
  const words = text.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

const url = ref('https://blog-posts-api-csjv.onrender.com/api/blog-posts');
const { isFetching, data, error } = useFetch(url, { refetch: true }).get().json();

const formattedDate = computed(() => (date) => {
  return useTimeAgo(date).value;
});

const slugToSting = computed(() => {
  if (slug.value) {
    return slug.value.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
  }
  return "";
});

const filteredPost = computed(() => {
  if (data.value) {
    const post = data.value.find(post => post.slug === slug.value);
    if (post) {
      return {
        title: post.title,
        content: post.content,
        createdAt: post.createdAt
      };
    }
    console.log("post not found");
  }
  return null;
});

watch(() => route.params.slug, () => {
  filteredPost.value = null;
});

const readingTime = computed(() => calculateReadingTime(filteredPost.value.content));

useHead({
  title: computed(() => `${slugToSting.value} - Ayie`),
  meta: [
    {
      name: 'description',
      content: 'As a tech starter in the tech industry, creating a portfolio website is an essential step for professionals in various fields to showcase their work and skills.'
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `https://ayiezac.netlify.app${fullPath.value}`
    }

  ]
})
</script>
<template>
  <div class=" md:w-10/12 w-full mx-auto">
    <small v-if="isFetching">
      <div class="flex flex-col gap-4 w-52">
        <div class="skeleton h-4 w-full "></div>
        <div class="skeleton h-3 w-20"></div>
      </div>
    </small>
    <small v-else-if="error">Error fetching date: {{ error }}</small>
    <template v-else-if="filteredPost">
      <h1 class="md:text-5xl sm:text-4xl text-3xl font-bold mb-3 text-cta">{{ filteredPost.title }}</h1>
      <small class="flex items-center">
        <span>{{ readingTime }} min read</span>
        <span>
          <Icon icon="ph:dot-bold" class="text-xl" />
        </span>
        <span>{{ formattedDate(filteredPost.createdAt) }}</span>
      </small>
      <article class="mt-5 prose lg:prose-base text-balance" v-html="filteredPost.content">
      </article>
    </template>
    <template v-else>
      <p>Post not found</p>
    </template>
  </div>
</template>

<style></style>