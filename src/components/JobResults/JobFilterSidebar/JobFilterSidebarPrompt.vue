<template>
  <div class="flex flex-row justify-between">
    <h3 class="my-4 text-base font-semibold">
      <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
      <span
        ><span class="text-brand-green-1 text-xl">{{ FILTERED_JOBS.length }}</span> jobs
        matched</span
      >
    </h3>
    <div class="flex items-center text-sm">
      <action-button
        text="Clear Filters"
        type="secondary"
        @click="userStore.CLEAR_USER_JOB_FILTER_SELECTIONS"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ActionButton from '@/components/Shared/ActionButton.vue'

import { useUserStore } from '@/Stores/user'
import { useJobsStore } from '@/Stores/Jobs'
import { computed } from 'vue'

const userStore = useUserStore()
const jobStore = useJobsStore()
const FILTERED_JOBS = computed(() => jobStore.FILTERED_JOBS)
</script>
