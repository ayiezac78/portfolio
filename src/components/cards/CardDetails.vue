<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8" v-once>
    <!-- <template v-for="repo in repoData.repos" :key="repo.id">
      <CardLayout :title="repo.title" :description="repo.description" :icon="repo.icon"
        :externalLink="repo.external_link" :last_updated="repo.last_updated" />
    </template> -->
  </div>
</template>

<script setup>
// import CardLayout from './CardLayout.vue';
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

const fetchData = async () => {
  isLoading.value = true;
  const octokit = new Octokit({ auth: token });

  try {
    for (const repo of repos.value) {
      try {
        const [repoDataResponse, languagesResponse] = await Promise.all([
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
        ]);

        repoData.value.push({
          repoData: repoDataResponse.data,
          languagesData: Object.keys(languagesResponse.data)
        });
      } catch (repoError) {
        console.error(`Error fetching data for repo ${repo.repo}:`, repoError);
        error.value = `Failed to fetch data for repo ${repo.repo}`;
      }
    }
  } catch (err) {
    console.error('Error fetching repository data:', err);
    error.value = 'Failed to fetch repository data';
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchData();
});

console.log(repoData.value);

const formattedDate = (date) => format(new Date(date), 'MMMM dd, yyyy');
</script>

<style lang="css" scoped></style>
