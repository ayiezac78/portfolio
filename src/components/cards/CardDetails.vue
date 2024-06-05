<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
    <CardLayout v-for="(repo, index) in repoData.repos" :key="index" :title="repo.title" :description="repo.description"
      :external-link="repo.external_link" :icon="repo.icon" :last_updated="repo.last_updated" />
  </div>
</template>

<script setup>
import CardLayout from "./CardLayout.vue";
import { useRepoData } from "@/stores/RepoData.js";

const repoData = useRepoData();
</script>

<style lang="css" scoped></style>
