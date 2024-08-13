<template>
  <li class="mb-7">
    <div
      class="ml-96 block rounded-2xl border border-solid border-gray-300 p-2 drop-shadow-lg bg-white hover:shadow-gray"
    >
      <div class="mx-8 border-b border-solid border-brand-gray-2 pt-5 pb-2">
        <h2 class="mb-2 text-2xl font-semibold">{{ job.title }}</h2>

        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <font-awesome-icon :icon="['fas', 'building']" />
            <span><span></span> {{ job.organization }}</span>
          </div>

          <div>
            <ul>
              <li v-for="location in job.locations" :key="location" class="mr-5 inline-block">
                <font-awesome-icon :icon="['fas', 'location-dot']" />
                <span><span></span> {{ location }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="px-8 py-4 border-t-2 border-solid border-gray-300">
        <div>
          <h3 class="mt-1 mb-2 text-lg font-semibold">Minimum qualifications:</h3>
          <div>
            <ul class="list-disc pl-8">
              <li v-for="qualification in job.minimumQualifications" :key="qualification">
                {{ qualification }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-2 mb-3 text-center">
        <router-link :to="jobPageLink" class="text-brand-blue-1">
          <button
            class="cursor-pointer font-semibold overflow-hidden relative z-30 rounded-3xl border border-blue-500 group px-8 py-2"
          >
            <span class="relative z-10 text-blue-500 group-hover:text-white text-sm duration-500"
              >Learn more</span
            >
            <span
              class="absolute w-full rounded-3xl h-full bg-blue-500 -left-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:left-0 duration-500"
            ></span>
            <span
              class="absolute w-full rounded-3xl h-full bg-blue-500 -right-32 top-0 -rotate-45 group-hover:rotate-0 group-hover:right-0 duration-500"
            ></span>
          </button>
        </router-link>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'

import type { Job } from '@/api/type'

const props = defineProps({
  job: {
    type: Object as PropType<Job>,
    required: true
  }
})
const jobPageLink = computed(() => `/jobs/results/${props.job.id}`)
</script>
