<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>

    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentPage }}</p>

        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
          >
            Previous Page
          </router-link>

          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
          >
            Next Page
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import { useJobsStore } from '@/api/Stores/Jobs'
import { useDegreesStore } from '@/api/Stores/degrees'
import JobListing from '@/components/JobResults/JobListing.vue'

import usePreviousAndNextPages from '@/composables/usePreviousAndNextPages'

const jobsStore = useJobsStore()
onMounted(jobsStore.FETCH_JOBS)

const degreesStore = useDegreesStore()
onMounted(degreesStore.FETCH_DEGREES)

const FILTERED_JOBS = computed(() => jobsStore.FILTERED_JOBS)

const route = useRoute()
const currentPage = computed(() => Number.parseInt((route.query.page as string) || '1'))
const maxPage = computed(() => Math.ceil(FILTERED_JOBS.value.length / 10))

const { previousPage, nextPage } = usePreviousAndNextPages(currentPage, maxPage)

const displayedJobs = computed(() => {
  const pageNumber = currentPage.value
  const firstJobIndex = (pageNumber - 1) * 10
  const lastJobIndex = pageNumber * 10
  return FILTERED_JOBS.value.slice(firstJobIndex, lastJobIndex)
})
</script>
