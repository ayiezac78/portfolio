<template>
  <TransitionRoot appear :show="show" as="template">
    <Dialog as="div" @close="onClose" class="relative z-10">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/40" aria-hidden="true" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-slate-50 dark:bg-[#1d232a] p-6 text-left align-middle shadow-xl transition-all">
              <DialogTitle as="h3"
                class="text-lg font-medium leading-6 text-gray-900 dark:text-slate-100 flex justify-between items-center">
                Other Events
                <button type="button" class="btn btn-sm" @click="onClose">
                  <Icon icon="mdi:keyboard-esc" class="text-xl" />
                </button>
              </DialogTitle>
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
                      <a class="link link-hover" href="https://nwtf.org.ph/" target="_blank"
                        rel="noreferrer noopener">Negros
                        Women for Tomorrow
                        Foundation</a>
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue';

defineProps({
  show: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close'])

function onClose() {
  emit('close')
}
</script>