<template>
  <div class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96">
    <section class="pb-5">
      <job-filter-sidebar-prompt />

      <job-filters-sidebar-skills />

      <collapsible-accordion header="Degrees"
        ><job-filter-sidebar-degrees />
      </collapsible-accordion>

      <collapsible-accordion header="Job Types"
        ><job-filter-sidebar-job-types />
      </collapsible-accordion>

      <collapsible-accordion header="Organizations"
        ><job-filter-sidebar-organizations />
      </collapsible-accordion>
    </section>
  </div>
</template>

<script setup lang="ts">
import CollapsibleAccordion from '@/components/Shared/CollapsibleAccordion.vue'
import JobFilterSidebarPrompt from './JobFilterSidebarPrompt.vue'

import JobFilterSidebarDegrees from '@/components/JobResults/JobFilterSidebar/JobFilterSidebarDegrees.vue'
import JobFilterSidebarJobTypes from '@/components/JobResults/JobFilterSidebar/JobFilterSidebarJobTypes.vue'
import JobFilterSidebarOrganizations from '@/components/JobResults/JobFilterSidebar/JobFilterSidebarOrganizations.vue'

import JobFiltersSidebarSkills from '@/components/JobResults/JobFilterSidebar/JobFiltersSidebarSkills.vue'
</script>
