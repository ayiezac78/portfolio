<template>
  <div class="flex items-center justify-between gap-x-3">
    <h2 class="text-md text-balance font-medium">{{ title }}</h2>
    <small class="text-xs text-slate-400">{{ date_published }}</small>
  </div>
  <!-- <p class="mt-2 line-clamp-3 text-xs/relaxed">
        {{ sypnosis }}
      </p> -->
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  title: String,
  // sypnosis: String,
  date_published: {
    type: String,
    default: () => new Date()
  }
})

</script>

<style scoped></style>