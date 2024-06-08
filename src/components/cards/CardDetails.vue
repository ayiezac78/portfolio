<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
    <template v-for="(repo, index) in repoData" :key="index">
      <div class="card shadow card-compact card-bordered">
        <div class="card-body">
          <div class="flex items-center justify-between">
            <div class="gap-3">
              <h2 class="text-lg font-medium">
                {{ repo.repoData.name }}
              </h2>
            </div>
            <a v-if="repo.repoData.homepage" rel="noreferrer noopener" target="_blank" class="flex"
              :href="repo.repoData.homepage">
              <Icon icon="material-symbols:link-rounded" class="text-lg" />
            </a>
          </div>
          <p class="text-xs">{{ repo.repoData.description }}</p>
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-x-2">
              <small>{{ repo.languagesData.join(' ') }}</small>
            </div>
            <div>
              <small>Updated {{ formatDate(repo.repoData.created_at) }}</small>
            </div>
          </div>
        </div>
      </div>
    </template>
    <!-- <div v-for="(repo, index) in repoData" :key="index">
      <h3>{{ repo.repoData.name }}</h3>
      <p>Description: {{ repo.repoData.description }}</p>
      <p>Created At: {{ formatDate(repo.repoData.created_at) }}</p>
      <p>Languages: {{ repo.languagesData.join(', ') }}</p>
    </div> -->
    <!-- <div v-if="repoData">
    </div> -->
    <!-- <div v-else>
      <p>Loading...</p>
    </div> -->
  </div>
</template>

<script setup>
import CardLayout from './CardLayout.vue';
// import { useRepoData } from '@/stores/RepoData';

// const repoData = useRepoData();
import { Octokit } from "@octokit/core";
import { onMounted, ref } from 'vue';
import { Icon } from '@iconify/vue';
import { format } from 'date-fns';

const repoData = ref([]);
const repos = ref([
  { repo: 'blog-posts-api' },
  { repo: 'blog-editor' },
  { repo: 'mp3-player' },
  { repo: 'clinic' },
  { repo: 'flowerplicity' },
]);
const isLoading = ref(true);
const error = ref(null);

const token = import.meta.env.VITE_APP_GITHUB_ACCESS_TOKEN;

// const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const fetchData = async () => {
  isLoading.value = true;
  const octokit = new Octokit({
    auth: token
  });

  try {
    for (const repo of repos.value) {
      // // Check rate limit status
      // const rateLimit = await octokit.request('GET /rate_limit');
      // const remaining = rateLimit.data.rate.remaining;
      // const resetTime = rateLimit.data.rate.reset * 1000;

      // if (remaining === 0) {
      //   const waitTime = resetTime - Date.now();
      //   console.log(`Rate limit exceeded. Waiting for ${waitTime / 1000} seconds`);
      //   await wait(waitTime);
      // }

      // Fetch repository data and languages
      const [repoDataResponse, languagesResponse] = await Promise.all([
        octokit.request('GET /repos/{owner}/{repo}', {
          owner: 'ayiezac78',
          repo: repo.repo,
          headers: {
            Accept: "application/vnd.github.v3+json",
            Authorization: `token ${token}`,
            'X-GitHub-Api-Version': '2022-11-28'
          }
        }),
        octokit.request('GET /repos/{owner}/{repo}/languages', {
          owner: 'ayiezac78',
          repo: repo.repo,
          headers: {
            Accept: "application/vnd.github.v3+json",
            Authorization: `token ${token}`,
            'X-GitHub-Api-Version': '2022-11-28'
          }
        })
      ]);

      repoData.value.push({
        repoData: repoDataResponse.data,
        languagesData: Object.keys(languagesResponse.data)
      });
    }
  } catch (err) {
    console.error('Error fetching repository data:', err);
    error.value = 'Failed to fetch repository data';
  } finally {
    isLoading.value = false;
  }
};

fetchData();
console.log(repoData.value);

const formatDate = (date) => {
  return format(new Date(date), 'MMMM dd, yyyy');
};

</script>

<style lang="css" scoped></style>
