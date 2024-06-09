<template>
  <div>
    <div v-if="isLoading">Loading..</div>
    <div v-if="error">{{ error }}</div>
    <div v-else class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
      <template v-for="(repo, index) in repoData" :key="index">
        <div class="card shadow card-compact card-bordered">
          <div class="card-body">
            <div class="flex items-center justify-between">
              <div class="grid gap-y-1">
                <h3 class="font-semibold leading-none tracking-tight text-base">
                  {{ repo.repoData.name }}
                </h3>
                <div>
                  <small class="text-slate-500">Updated {{ formattedDate(repo.repoData.updated_at) }}</small>
                </div>
              </div>
              <div class="flex items-center gap-x-1">
                <span>
                  <a v-if="repo.repoData.html_url" rel="noreferrer noopener" target="_blank" class="flex"
                    :href="repo.repoData.html_url">
                    <Icon icon="mdi:github" class="text-lg" />
                  </a>
                </span>
                <span>
                  <a v-if="repo.repoData.homepage" rel="noreferrer noopener" target="_blank" class="flex"
                    :href="repo.repoData.homepage">
                    <Icon icon="material-symbols:link-rounded" class="text-lg" />
                  </a>
                </span>

              </div>
            </div>
            <p class="text-xs flex items-center">{{ repo.repoData.description }}</p>
            <div class="flex justify-between items-center">
              <div class="flex items-center gap-x-2 text-slate-500">
                <template v-for="(language, index) in repo.languagesData" :key="index">
                  <small class="flex items-center">
                    <Icon icon="octicon:dot-24" class="text-xl"
                      :class="{ 'text-orange-500': language === 'HTML', 'text-yellow-400': language === 'JavaScript', 'text-green-500': language === 'Vue', 'text-blue-500': language === 'CSS' }" />
                    {{ language }}
                  </small>
                </template>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
// import CardLayout from './CardLayout.vue';
// import { useRepoData } from '@/stores/RepoData';

// const repoData = useRepoData();
import { Octokit } from "@octokit/core";
import { watchEffect, ref } from 'vue';
import { Icon } from '@iconify/vue';
import { format } from 'date-fns';

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

watchEffect(fetchData);
console.log(repoData);

const formattedDate = (date) => format(new Date(date), 'MMMM dd, yyyy');
</script>

<style lang="css" scoped></style>
