<script setup>
import { RouterLink } from "vue-router";
import { useNavLinks } from "../stores/NavLinks.js";

const navLinks = useNavLinks();
</script>

<template>
  <ul class="flex gap-x-2">
    <li class="flex" v-for="(navLink, index) in navLinks.links" :key="index">
      <RouterLink class="text-sm font-semibold flex items-center text-[#3A4350] dark:text-[#C4CBD4]" :to="navLink.path">
        {{ navLink.name }}
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped>
a {
  font-family: 'Space Grotesk',
    "Space Grotesk fallback",
    sans-serif;
}
</style>
