<template>
  <div class="w-full h-16 border-b border-solid border-brand-gray-1 bg-white"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { useJobsStore } from '@/Stores/Jobs'

const route = useRoute()
const onJobResultsPage = computed(() => route.name === 'JobResults')

const jobStore = useJobsStore()
const FILTERED_JOBS = computed(() => jobStore.FILTERED_JOBS)
</script>
