<template>
  <div>
    <div v-if="nowPlaying">
      <a target="_blank"
        class="audio-player lg:w-[25rem] md:w-full w-full gap-x-4 border-2 active:border-2 focus:border-2 dark:hover:bg-slate-900 dark:active:bg-slate-900 dark:focus:bg-slate-900 active:border-slate-500 focus:border-slate-500 hover:bg-slate-100 active:bg-slate-100 focus:bg-slate-100 dark:border-slate-900"
        rel="noreferrer noopener" :href="nowPlaying.songUrl">
        <div class="avatar">
          <div class=" w-16 rounded-full">
            <img :src="nowPlaying.albumImageUrl" alt="Album Art" />
          </div>
        </div>
        <div class="player-controls">
          <div class="song-info">
            <div class="song-title">
              <h2 class="font-semibold">{{ nowPlaying.title }}</h2>
            </div>
            <p class="artist">{{ nowPlaying.artist }}</p>
            <p class="text-xs">{{ nowPlaying.duration }}</p>
          </div>
        </div>
      </a>
    </div>
    <div v-else class="audio-player lg:w-[25rem] md:w-full w-full gap-x-4 border-2 dark:border-slate-900">
      <Icon icon="ph:music-notes-simple-fill" class="text-3xl" />
      <p class="flex items-center justify-center text-sm">No song currently playing</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { getNowPlayingItem } from '@/api/spotify-api'
import { Icon } from '@iconify/vue';

const nowPlaying = ref(null);

const fetchNowPlaying = async () => {
  const newNowPlaying = await getNowPlayingItem();
  if (newNowPlaying && (!nowPlaying.value || newNowPlaying.title !== nowPlaying.value.title)) {
    nowPlaying.value = newNowPlaying;
  }
}

onMounted(async () => {
  fetchNowPlaying();
  const interval = setInterval(fetchNowPlaying, 5000);
  onUnmounted(() => clearInterval(interval));
});

</script>

<style scoped>
.audio-player {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 6rem;
  height: 100%;
  border-radius: 1rem;
  padding: 8px;
  box-sizing: border-box;
}

.album-cover {
  width: 64px;
  height: 64px;
  background-color: #fff;
  border-radius: 50%;
  margin-right: 12px;
}

.player-controls {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.song-info {
  margin-bottom: 4px;
}

.song-title {
  font-size: 16px;
  margin: 0;
}

.artist {
  font-size: 12px;
  margin: 0;
}

/* img {
  max-width: 100px;
  max-height: 100px;
} */
</style>
