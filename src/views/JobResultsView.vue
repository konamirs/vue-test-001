<template>
  <div class="grid grid-cols-8 w-full">
    <div class="col-span-2 col-start-1">
      <job-filters-sidebar />
    </div>
    <div class="col-span-6 col-start-3">
      <job-listings />

      <end-nav />
    </div>
  </div>
</template>

<script setup lang="ts">
import JobFiltersSidebar from '@/components/JobResults/JobFilterSidebar/JobFiltersSidebar.vue'
import JobListings from '@/components/JobResults/JobListings.vue'
import EndNav from '@/components/Shared/EndNav.vue'
</script>
