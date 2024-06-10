<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">

    <div v-if="error">{{ error }}</div>

    <div v-for="(repo, index) in repoData" :key="index">
      <div v-if="isLoading">
        <SkeletonCardPlaceholder />
      </div>
      <CardLayout v-else :title="repo.repoData.name" :description="repo.repoData.description"
        :html_url="repo.repoData.html_url" :homepage="repo.repoData.homepage"
        :updated_at="formattedDate(repo.repoData.pushed_at)" :language="repo.repoData.language" />
    </div>
  </div>
</template>

<script setup>
import { Octokit } from "@octokit/core";
import { onMounted, ref, watchEffect } from 'vue';
import { format } from 'date-fns';
import SkeletonCardPlaceholder from './SkeletonCardPlaceholder.vue';
import CardLayout from "./CardLayout.vue";

const repoData = ref([]);
const repos = [
  { repo: 'blog-editor' },
  { repo: 'mp3-player' },
  { repo: 'clinic' },
  { repo: 'flowerplicity' },
];
const isLoading = ref(true);
const error = ref(null);

const token = import.meta.env.VITE_APP_GITHUB_ACCESS_TOKEN;

const fetchData = async () => {
  isLoading.value = true;
  const octokit = new Octokit({ auth: token });

  try {
    const requests = repos.map(repo =>
      Promise.all([
        octokit.request('GET /repos/{owner}/{repo}', {
          owner: 'ayiezac78',
          repo: repo.repo,
          headers: {
            Accept: "application/vnd.github.v3+json",
            'X-GitHub-Api-Version': '2022-11-28'
          }
        }),
        octokit.request('GET /repos/{owner}/{repo}/languages', {
          owner: 'ayiezac78',
          repo: repo.repo,
          headers: {
            Accept: "application/vnd.github.v3+json",
            'X-GitHub-Api-Version': '2022-11-28'
          }
        })
      ])
    );

    const responses = await Promise.all(requests);
    repoData.value = responses.map(([repoDataResponse, languagesResponse]) => ({
      repoData: repoDataResponse.data,
      languagesData: Object.keys(languagesResponse.data)
    }));
  } catch (err) {
    console.error('Error fetching repository data:', err);
    error.value = 'Failed to fetch repository data';
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  repoData.value = repos.map(() => ({ repoData: {}, languagesData: [] }));
  fetchData()
});

watchEffect(() => {
  repoData.value = repos.map(() => ({ repoData: {}, languagesData: [] }));
  fetchData()
});

console.log(repoData);

const formattedDate = (date) => format(new Date(date), 'MMMM dd, yyyy');
</script>
