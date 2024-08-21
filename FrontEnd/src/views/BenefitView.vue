<template>
  <div
    class="grid grid-cols-12 justify-center items-center border-b border-solid border-brand-gray-1 bg-gray-100"
  >
    <div class="col-span-5 col-start-2 my-16">
      <h1 class="w-full text-5xl font-semibold text-start text-wrap">Benefits at works</h1>

      <h2 class="my-4 w-full text-base font-normal">
        We strive to provide Googlers and their loved ones with a world-class benefits experience,
        focused on supporting their physical, financial, and emotional wellbeing. Our benefits are
        based on data, and centered around our users: Googlers and their families. They’re
        thoughtfully designed to enhance your health and wellbeing, and generous enough to make it
        easy for you to take good care of yourself (now, and in the future). So we can build for
        everyone, together. *
      </h2>
    </div>

    <div class="col-span-4 col-start-8">
      <img
        src="https://www.gstatic.com/marketing-cms/assets/images/ca/e1/8d1e98af4cd6a943c629a1ea36c5/benefitshero.png=n-w1782-h1001"
      />
    </div>
  </div>

  <div class="mx-32">
    <Accordion-items />
  </div>

  <end-nav />
</template>

<script setup lang="ts">
import AccordionItems from '@/components/Shared/AccordionItems.vue'
import EndNav from '@/components/Shared/EndNav.vue'
</script>
