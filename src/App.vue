<script setup>
import { RouterView, useRouter } from "vue-router";
import { getCurrentInstance, onMounted } from "vue";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import { themeChange } from "theme-change";

onMounted(() => {
  themeChange(false);
});

const router = useRouter();
const internalInstance = getCurrentInstance();

router.beforeEach((to, from, next) => {
  internalInstance.appContext.config.globalProperties.$Progress.start();
  next();
});
router.afterEach(() => {
  internalInstance.appContext.config.globalProperties.$Progress.finish();
});
</script>

<template>
  <vue-progress-bar></vue-progress-bar>
  <NavBar />
  <div
    class="flex flex-col min-h-screen lg:mx-auto lg:px-40 md:mx-auto md:px-8 sm:mx-auto sm:px-4 container px-4 mx-auto">
    <main class="py-5 flex-grow place-content-center" role="main">
      <RouterView v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </RouterView>
    </main>
    <Footer />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
