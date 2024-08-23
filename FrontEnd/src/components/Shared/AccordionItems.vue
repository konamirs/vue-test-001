<template>
  <collapsible-accordion
    v-for="(accordion, index) in accordions"
    :key="index"
    :header="accordion.header"
  >
    <div class="grid grid-cols-3 justify-center items-center">
      <div class="col-span-1 col-start-1 mx-12">
        <h2 class="text-xl flex flex-nowrap">
          <font-awesome-icon
            :icon="accordion.icon"
            :class="['text-blue-500', 'w-14', 'h-14', 'mr-5', niceClass(accordion.title)]"
          />

          {{ accordion.title }}
        </h2>
      </div>

      <div class="col-span-1 col-start-2 mx-12 mt-4">
        <h2
          v-for="(benefit, benefitIndex) in accordion.benefits"
          :key="benefitIndex"
          class="text-sm flex flex-nowrap mb-3"
        >
          <font-awesome-icon
            :icon="['fas', 'check']"
            :class="['text-blue-500', 'w-5', 'h-5', 'mr-3', niceClass(benefit)]"
          />

          {{ benefit }}
        </h2>
      </div>

      <div class="col-span-1 col-start-3 mx-12 mt-4">
        <h2
          v-for="(benefit, benefitIndex) in accordion.moreBenefits"
          :key="benefitIndex"
          class="text-sm flex flex-nowrap mb-3"
        >
          <font-awesome-icon
            :icon="['fas', 'check']"
            :class="['text-blue-500', 'w-5', 'h-5', 'mr-3', niceClass(benefit)]"
          />

          {{ benefit }}
        </h2>
      </div>
    </div>
  </collapsible-accordion>
</template>

<script setup lang="ts">
import CollapsibleAccordion from '@/components/Shared/CollapsibleAccordion.vue'
import { ref } from 'vue'

interface Accordion {
  header: string
  icon: string
  title: string
  benefits: string[]
  moreBenefits: string[]
}

const accordions = ref<Accordion[]>([])

fetch(`http://localhost:8000/api/accordion`)
  .then((response) => response.json())
  .then((data) => {
    accordions.value = data[0].accordions
  })

const niceClass = (benefit: string) => {
  const long = benefit.length
  return long > 70 ? 'mt-5' : long > 43 ? 'mt-2' : ''
}
</script>
