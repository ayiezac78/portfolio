<template>
  <div class="d-grid">
    <div class="item">
      <div>
        <h1 class="md:text-5xl sm:text-4xl text-3xl font-extrabold mb-3">Hi, I'm <span
            class="underline decoration-dashed decoration-orange-400 underline-offset-4">Ayie</span></h1>
        <h2 class="text-xl font-semibold text-slate-500 dark:text-slate-400 mb-3 text-balance">
          Where Design Meets Functionality
        </h2>
        <div class="max-w-2xl mb-5">
          <p class=" leading-relaxed mb-3 text-balance">
            Hi, I'm Ariel Maniago, Front-end Web Developer at <a class="link link-hover font-semibold"
              rel="noreferrer noopener" aria-label="Cenix Official Site" href="https://cenixweb.com/"
              target="_blank">Cenix</a>. I thrive on
            learning new technologies and embracing
            new challenges, particularly in SEO performance, accessibility, and design.
          </p>
          <p class=" leading-relaxed text-balance">Beyond coding, I'm deeply engaged in Bible study and
            ministry work.
            When
            I'm not immersed in that, you'll find me playing mobile RTS games, strumming my guitar, or indulging in
            music,
            movies and anime.</p>
        </div>
      </div>
    </div>
    <div class="item relative md:mb-0 mb-5">
      <h2
        class="font-medium absolute left-[1.5em] top-[-1ex] badge !border-2 !border-slate-200 dark:!border-slate-800  z-10">
        Events</h2>
      <TimeLine />
    </div>
    <div class="item relative md:mb-0 mb-5">
      <h2
        class="font-medium absolute left-[1.5em] top-[-1ex] badge !border-2 !border-slate-200 dark:!border-slate-800  z-10">
        Tech Stack</h2>
      <Tools />
    </div>
    <div class="item relative md:mb-0 mb-5">
      <h2
        class="font-medium absolute left-[1.5em] top-[-1.3ex] badge !border-2 !border-slate-200 dark:!border-slate-800  z-10">
        Recent Posts
      </h2>
      <PostCard v-once />
    </div>
    <div class="item relative md:mb-0 mb-5">
      <h2
        class="font-medium absolute left-[1.5em] top-[-1.2ex] badge !border-2 !border-slate-200 dark:!border-slate-800  z-10">
        Music</h2>
      <SpotifyCurrentPlaying />
    </div>
  </div>
</template>

<script setup>
import PostCard from '@/components/cards/PostCard.vue'
import { onErrorCaptured, ref } from 'vue';
import Tools from "../components/Tools.vue";
import { useHead } from '@unhead/vue';
import SpotifyCurrentPlaying from '@/components/SpotifyCurrentPlaying.vue';
import TimeLine from '@/components/TimeLine.vue';

const hasError = ref(false);

useHead({
  title: 'Ayie',
  meta: [
    {
      name: 'description',
      content: 'A Front-end Web Developer based in Philippines.'
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://ayiezac.netlify.app/'
    }

  ]
})


onErrorCaptured(() => {
  console.error('Error');
  hasError.value = true
})

</script>

<style scoped>
.d-grid {
  width: 100%;
  max-width: 1500px;
  height: 100%;
  display: grid;
  gap: 1.5vw;
  padding: 1vw;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "hero hero hero hero aside2 aside2"
    "hero hero hero hero aside2 aside2"
    "hero hero hero hero aside2 aside2"
    "hero hero hero hero aside2 aside2"
    "aside3 aside3 aside4 aside4 aside5 aside5 ";

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "hero   hero   hero   hero"
      "hero   hero   hero   hero"
      "aside2 aside2 aside2 aside3"
      "aside4 aside4 aside5 aside5";
  }

  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "hero   hero   hero"
      "hero   hero   hero"
      "aside2 aside2 aside2"
      "aside3 aside3 aside3"
      "aside4 aside4 aside4"
      "aside5 aside5 aside5";
  }
}

.d-grid .item:nth-child(1) {
  grid-area: hero;
}

.d-grid .item:nth-child(2) {
  grid-area: aside2;
}

.d-grid .item:nth-child(3) {
  grid-area: aside3;
}

.d-grid .item:nth-child(4) {
  grid-area: aside4;
}

.d-grid .item:nth-child(5) {
  grid-area: aside5;
}





#after-blink::after {
  content: "|";
  animation: type-cursor 1s infinite;
  display: inline-block;
  transition: linear 0.3s;
}

@keyframes type-cursor {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
