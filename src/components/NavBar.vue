<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { RouterLink } from "vue-router";
import NavLinks from "./NavLinks.vue";
import { computed } from "vue";
import cv from "../assets/pdf/Maniago_Resume.pdf";
import LogoIcon from "@/assets/svg/LogoIcon.vue";
import { Icon } from '@iconify/vue';

const isDark = useDark({
  selector: "html",
  attribute: "data-theme",
  valueDark: "dark",
  valueLight: "light",
});
const toggleDark = useToggle(isDark);
const mode = computed(() => (isDark.value ? "line-md:moon-filled-alt-to-sunny-filled-loop-transition" : "line-md:sunny-filled-loop-to-moon-alt-filled-loop-transition"));
</script>
<template>
  <header role="banner">
    <nav class="flex justify-between p-4 items-center shadow-sm" role="navigation">
      <div class="flex gap-x-3 items-center">
        <div>
          <RouterLink aria-label="Logo" id="logo" class="text-xl font-bold" to="/">
            <component :is="LogoIcon"></component>
          </RouterLink>
        </div>
        <NavLinks id="header-nav-links" />
      </div>
      <div class="flex gap-x-2 items-center">
        <button type="button" aria-label="Toggle dark mode" v-tooltip="'Toggle Theme'" id="switch__mode"
          @click="toggleDark()">
          <Icon :icon="mode" class="text-xl" />
        </button>
        <!-- <RouterLink to="/media" v-tooltip="'Media'" aria-label="photo and video gallery">
          <Icon icon="line-md:image-twotone" class="text-xl" />
        </RouterLink> -->
        <a v-tooltip="'Email me'" href="mailto:admaniago01@gmail.com" aria-label="Email me">
          <Icon icon="line-md:email" class="text-xl" />
        </a>
        <a class="btn rounded-full btn-sm" :href="cv" v-tooltip="'Download CV'" download="Maniago_Resume"
          aria-label="Download CV">
          Resume
          <Icon icon="line-md:downloading-loop" class="text-xl text-orange-500" />
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
span {
  cursor: pointer;
}
</style>
