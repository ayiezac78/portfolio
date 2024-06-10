<template>
  <div class="card shadow card-compact card-bordered h-full">
    <div class="card-body">
      <div class="flex items-start justify-between">
        <div class="grid gap-y-1">
          <h2 class="font-semibold leading-none tracking-tight text-base flex items-center gap-x-1">
            <Icon icon="octicon:repo-16" class="text-lg" />
            {{ title }}
          </h2>
        </div>
        <div class="flex gap-x-1">
          <span>
            <a aria-label="github repo" v-if="html_url" rel="noreferrer noopener" target="_blank"
              class="flex text-slate-500 hover:text-slate-700 focus:text-slate-700 active:text-slate-700 dark:hover:text-slate-100 dark:focus:text-slate-100 dark:active:text-slate-100 transition-all delay-75 ease-in-out"
              :href="html_url">
              <Icon icon="mdi:github" class="text-xl" />
            </a>
          </span>
          <span>
            <a aria-label="exteral link" v-if="homepage" rel="noreferrer noopener" target="_blank"
              class="flex text-slate-500 hover:text-slate-700 focus:text-slate-700 active:text-slate-700 dark:hover:text-slate-100 dark:focus:text-slate-100 dark:active:text-slate-100 transition-all delay-75 ease-in-out"
              :href="homepage">
              <Icon icon="iconamoon:link-external-bold" class="text-xl" />
            </a>
          </span>

        </div>
      </div>
      <p class="text-xs text-slate-700 dark:text-slate-300 my-3 line-clamp-3">{{ description }}</p>
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-x-2 text-slate-500">
          <small class="flex items-center dark:text-slate-400 text-slate-500">
            <Icon icon="octicon:dot-24" class="text-xl"
              :class="{ 'text-orange-500': language === 'HTML', 'text-yellow-400': language === 'JavaScript', 'text-green-500': language === 'Vue', 'text-blue-500': language === 'CSS' }" />
            {{ language }}
          </small>
        </div>
        <small class="dark:text-slate-400 text-slate-500">Updated {{ updated_at }}</small>
      </div>
    </div>
  </div>
  <!-- <div class="card shadow card-compact card-bordered">
    <div class="card-body">
      <div class="flex items-center justify-between">
        <div class="gap-3">
          <h2 class="text-lg font-medium">
            {{ title }}
          </h2>
        </div>
        <a rel="noreferrer noopener" target="_blank" class="flex" :href="externalLink">
          <Icon icon="material-symbols:link-rounded" class="text-lg" />
        </a>
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
  </div> -->
</template>

<script setup>
import { Icon } from '@iconify/vue'
defineProps({
  title: String,
  description: String,
  html_url: String,
  homepage: String,
  language: [String, Object],
  updated_at: String,
});
</script>

<style scoped>
i.pi-external-link {
  font-size: 0.8rem;
}
</style>
