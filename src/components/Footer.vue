<script setup>
import NavLinks from "./NavLinks.vue";
import { ref } from "vue";
import { Icon } from '@iconify/vue';

const date = ref(new Date().getFullYear());

</script>
<template>
  <footer class="footer footer-center p-10 text-base-content gap-5 flex-shrink-0" role="contentinfo">
    <nav class="grid grid-flow-col gap-4" role="navigation">
      <NavLinks />
    </nav>
    <nav role="navigation">
      <div class="grid grid-flow-col gap-4">
        <a aria-label="instagram" rel="noreferrer noopener" target="_blank" href="https://www.instagram.com/yieogainam">
          <Icon icon="line-md:instagram" class="text-xl text-[#3A4350] dark:text-[#C4CBD4]" />
        </a>
        <a aria-label="linkedin" rel="noreferrer noopener" target="_blank" href="https://www.linkedin.com/in/ayie">
          <Icon icon="line-md:linkedin" class="text-xl text-[#3A4350] dark:text-[#C4CBD4]" />
        </a>
        <a aria-label="github" rel="noreferrer noopener" target="_blank" href="https://github.com/ayiezac78">
          <Icon icon="line-md:github-loop" class="text-xl text-[#3A4350] dark:text-[#C4CBD4]" />
        </a>
        <a aria-label="email to gmail" rel="noreferrer noopener" target="_blank" href="mailto:admaniago01@gmail.com">
          <Icon icon="line-md:email" class="text-xl text-[#3A4350] dark:text-[#C4CBD4]" />
        </a>
      </div>
    </nav>
    <aside role="complementary">
      <p class="text-xs">designed & crafted by ayie © {{ date }}</p>
    </aside>
  </footer>
</template>

<style scoped>
#logo {
  font-family: "Space Grotesk", sans-serif;
}
</style>
