<template>
  <div class="card">
    <div class="card-body p-1">
      <div class="card border-2 dark:border-slate-900 h-full card-compact">
        <div class="card-body justify-center">
          <!-- Content -->
          <!-- Timeline -->
          <div>
            <!-- Heading -->
            <div class="ps-2 my-2 first:mt-0">
              <h3 class="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">
                7 June, 2023 - Present
              </h3>
            </div>
            <!-- End Heading -->

            <!-- Item -->
            <div class="flex gap-x-3">
              <!-- Icon -->
              <div
                class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <div class="relative z-10 size-7 flex justify-center items-center">
                  <div class="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                </div>
              </div>
              <!-- End Icon -->

              <!-- Right Content -->
              <div class="grow pt-0.5 pb-8">
                <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                  Joined as Front-end Web Developer
                </h3>
                <p class="mt-1 text-xs text-gray-600 dark:text-neutral-400">
                  <a href="https://cenixweb.com/" rel="noreferrer noopener" target="_blank" class="link link-hover">
                    Cenix
                  </a>
                </p>
              </div>
              <!-- End Right Content -->
            </div>
            <!-- End Item -->

            <!-- Item -->
            <div class="flex gap-x-3">
              <!-- Icon -->
              <div
                class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <div class="relative z-10 size-7 flex justify-center items-center">
                  <Icon icon="ic:baseline-timeline" class="text-xl" />
                </div>
              </div>
              <!-- End Icon -->

              <!-- Right Content -->
              <div class="grow pt-0.5 pb-8">
                <button type="button" @click="openModal" class="btn btn-xs btn-nuetral">
                  <Icon icon="ic:outline-remove-red-eye" class="text-xl" />
                  View Other Events
                </button>
              </div>
              <!-- End Right Content -->
            </div>
            <!-- End Item -->

            <!-- Heading -->
            <div class="ps-2 my-2 first:mt-0">
              <h3 class="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">
                May 2015
              </h3>
            </div>
            <!-- End Heading -->

            <!-- Item -->
            <div class="flex gap-x-3">
              <!-- Icon -->
              <div
                class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <div class="relative z-10 size-7 flex justify-center items-center">
                  <div class="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                </div>
              </div>
              <!-- End Icon -->

              <!-- Right Content -->
              <div class="grow pt-0.5 pb-8">
                <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                  Graduated as BS in Information Technology
                </h3>
                <!-- <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                  Just chill for now... 😉
                </p> -->
              </div>
              <!-- End Right Content -->
            </div>
            <!-- End Item -->
          </div>
          <!-- End Timeline -->


        </div>
      </div>
    </div>
    <ModalTimeLine :show="isOpen" @close="closeModal" />
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import ModalTimeLine from './TimelineModal.vue';
import { ref } from 'vue';
// import { useToggle } from '@vueuse/core';

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}

function openModal() {
  isOpen.value = true
}
</script>

<style scoped></style>