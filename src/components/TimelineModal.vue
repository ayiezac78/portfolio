<template>
  <dialog id="my_modal_1" class="modal">
    <div class="modal-box">
      <div class="flex justify-between items-center">
        <h3 class="font-bold text-lg">Other Events</h3>
        <div class="modal-action mt-0">
          <form method="dialog">
            <button @click="handleClose" class="btn btn-sm">ESC</button>
          </form>
        </div>
      </div>

      <div class="mt-5">

        <div class="ps-2 my-2 first:mt-0">
          <h3 class="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">
            Jan 2021 - Feb 2023
          </h3>
        </div>

        <div class="flex gap-x-3">

          <div
            class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div class="relative z-10 size-7 flex justify-center items-center">
              <div class="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
            </div>
          </div>



          <div class="grow pt-0.5 pb-8">
            <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              Medical Encoder
            </h3>
            <p class="mt-1 text-xs text-gray-600 dark:text-neutral-400">
              Safeguard DNA Diagnostics Inc.
            </p>
          </div>

        </div>

        <div class="ps-2 my-2 first:mt-0">
          <h3 class="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">
            Jun 2019 - Mar 2020
          </h3>
        </div>


        <div class="flex gap-x-3">

          <div
            class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div class="relative z-10 size-7 flex justify-center items-center">
              <div class="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
            </div>
          </div>

          <div class="grow pt-0.5 pb-8">
            <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              Field Auditor
            </h3>
            <p class="mt-1 text-xs text-gray-600 dark:text-neutral-400">
              GNP1 Marketing Inc.
            </p>
          </div>

        </div>

        <div class="ps-2 my-2 first:mt-0">
          <h3 class="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">
            Jan 2019 - Apr 2019
          </h3>
        </div>

        <div class="flex gap-x-3">

          <div
            class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div class="relative z-10 size-7 flex justify-center items-center">
              <div class="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
            </div>
          </div>

          <div class="grow pt-0.5 pb-8">
            <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              Videographer
            </h3>
            <p class="mt-1 text-xs text-gray-600 dark:text-neutral-400">
              Island Living Channel
            </p>
          </div>

        </div>

        <div class="ps-2 my-2 first:mt-0">
          <h3 class="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">
            Sep 2016 - Jan 2019
          </h3>
        </div>

        <div class="flex gap-x-3">
          <div
            class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div class="relative z-10 size-7 flex justify-center items-center">
              <div class="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
            </div>
          </div>

          <div class="grow pt-0.5 pb-8">
            <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
              Senior Loan Officer
            </h3>
            <p class="mt-1 text-xs text-gray-600 dark:text-neutral-400">
              <a class="link link-hover" href="https://nwtf.org.ph/" target="_blank" rel="noreferrer noopener">Negros
                Women for Tomorrow
                Foundation</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </dialog>
</template>

<script setup>

const emit = defineEmits(['closeModal']);
const handleClose = () => {
  emit('closeModal');
};
</script>