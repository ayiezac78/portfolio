<template>
  <div class="card shadow card-compact card-bordered">
    <div class="card-body">
      <div class="flex items-center justify-between">
        <div class="gap-3">
          <h2 class="text-lg font-medium">
            {{ title }}
          </h2>
        </div>
        <a rel="noreferrer noopener" target="_blank" class="flex" :href="externalLink"><i
            class="pi pi-external-link"></i></a>
      </div>
      <p class="text-xs">{{ description }}</p>
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-x-2">
          <Icon v-for="(icon, index) in icon" :key="index" :icon="icon"></Icon>
        </div>
        <div>
          <small>{{ last_updated }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
defineProps({
  title: String,
  description: String,
  icon: Array,
  externalLink: String,
  last_updated: String,
});
</script>

<style scoped>
i.pi-external-link {
  font-size: 0.8rem;
}
</style>
