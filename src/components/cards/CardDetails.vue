<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
    <template v-for="repo in repoData.repos" :key="repo.id">
      <CardLayout :title="repo.title" :description="repo.description" :icon="repo.icon"
        :externalLink="repo.external_link" :last_updated="repo.last_updated" />
    </template>
  </div>
</template>

<script setup>
import CardLayout from './CardLayout.vue';
import { useRepoData } from '@/stores/RepoData';

const repoData = useRepoData();
</script>

<style lang="css" scoped></style>
