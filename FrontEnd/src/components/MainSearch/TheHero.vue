<template>
  <main class="flex flex-col h-screen">
    <section class="pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-5 col-start-2">
          <TheHeadline />
          <search-form />
        </div>

        <div class="col-span-3 col-start-9 self-center">
          <animated-pic />
        </div>
      </div>
    </section>

    <spot-light class="flex flex-row justify-center pb-16">
      <template #default="{ img, title, description }">
        <router-link
          to="/jobs/results"
          class="mx-5 flex shadow-lg h-80 w-72 flex-col rounded-lg border bg-brand-gray-2 text-center items-center"
        >
          <img :src="img" class="rounded-lg h-52 w-64 mt-3" />

          <div class="h-48 px-6 py-4">
            <h3 class="text-lg font-bold">
              {{ title }}
            </h3>

            <p class="mt-3 text-sm">
              {{ description }}
            </p>
          </div>
        </router-link>
      </template>
    </spot-light>
  </main>

  <div class="bottom-0 left-0 h-52 w-full shadow-lg bg-gray-300"></div>

  <sub-end-nav />
  <end-nav />
</template>

<script setup lang="ts">
import TheHeadline from '@/components/MainSearch/TheHeadline.vue'
import AnimatedPic from '@/components/Shared/AnimatedPic.vue'
import SearchForm from '@/components/MainSearch/SearchForm.vue'
import SpotLight from '@/components/MainSearch/SpotLight.vue'
import EndNav from '@/components/Shared/EndNav.vue'
import SubEndNav from '@/components/Shared/SubEndNav.vue'
</script>
