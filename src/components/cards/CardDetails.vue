<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
    <template v-if="isLoading">
      <div>Loading...</div>
    </template>
    <template v-if="error">
      <div>Error fetching data. Please try again.</div>
    </template>
    <template v-else>
      <template v-for="(repo, index) in repoData" :key="index">
        <div
          class="card w-full border rounded-lg dark:border-gray-800 shadow dark:hover:bg-gray-800 hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-100 delay-100 duration-200 card-compact h-full">
          <div class="card-body justify-between">
            <h2 class="text-lg font-medium flex items-center justify-between">
              <span>
                {{ repo.repoData.name }}
              </span>
              <div class="flex gap-x-2">
                <div>
                  <span v-if="!repo.repoData.homepage"></span>
                  <span v-else>
                    <a :href="repo.repoData.homepage">
                      <Icon icon="material-symbols:link-rounded" class="text-xl" />
                    </a>
                  </span>
                </div>
                <div>
                  <a :href="repo.repoData.html_url">
                    <Icon icon="mdi:github" class="text-xl" />
                  </a>
                </div>
              </div>
            </h2>
            <div class="text-xs dark:text-gray-400 text-gray-500 mt-3">
              <p v-if="!repo.repoData.description">No Description</p>
              <p v-else>
                {{ repo.repoData.description }}
              </p>
            </div>
            <div class="flex justify-between items-center mt-3">
              <div class="flex gap-x-2">
                <template v-for="(repo, index) in repo.languagesData" :key="index">
                  <span class="text-xs text-slate-500 flex items-center">
                    <Icon v-if="repo === 'HTML'" icon="ri:html5-line" class="text-orange-500 text-lg" />
                    <Icon v-if="repo === 'CSS'" icon="tabler:brand-css3" class="text-blue-500 text-lg" />
                    <Icon v-if="repo === 'JavaScript'" icon="ri:javascript-line" class="text-yellow-500 text-lg" />
                    <Icon v-if="repo === 'Vue'" icon="uit:vuejs-alt" class="text-green-600 text-lg" />
                  </span>
                </template>
              </div>
              <span class="text-xs text-slate-500">Updated {{ formatDate(repo.repoData.updated_at) }}</span>
            </div>
          </div>
        </div>
        <!-- </a> -->
      </template>
    </template>

  </div>
</template>

<script setup>
import { Octokit } from "@octokit/core";
import { ref } from 'vue';
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

const token = "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";

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const fetchData = async () => {
  isLoading.value = true;
  const octokit = new Octokit({
    auth: token
  });

  try {
    for (const repo of repos.value) {
      // Check rate limit status
      const rateLimit = await octokit.request('GET /rate_limit');
      const remaining = rateLimit.data.rate.remaining;
      const resetTime = rateLimit.data.rate.reset * 1000;

      if (remaining === 0) {
        const waitTime = resetTime - Date.now();
        console.log(`Rate limit exceeded. Waiting for ${waitTime / 1000} seconds`);
        await wait(waitTime);
      }

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

const formatDate = (date) => {
  return format(new Date(date), 'MMMM dd, yyyy');
};

</script>

<style lang="css" scoped></style>
