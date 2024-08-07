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
          class="mx-5 flex h-96 w-72 flex-col rounded-lg border bg-brand-gray-2"
        >
          <img :src="img" class="object-contain" />

          <div class="mt-3 h-48 px-6 py-4">
            <h3 class="text-lg font-medium">
              {{ title }}
            </h3>

            <p class="mt-3 text-sm">
              {{ description }}
            </p>

            <router-link to="/jobs/results" class="px-6 pb-4 text-sm text-brand-blue-1"
              >See jobs</router-link
            >
          </div>
        </router-link>
      </template>
    </spot-light>
  </main>
</template>

<script>
import TheHeadline from '@/components/MainSearch/TheHeadline.vue'
import AnimatedPic from '@/components/Shared/AnimatedPic.vue'
import SearchForm from '@/components/MainSearch/SearchForm.vue'
import SpotLight from './SpotLight.vue'

export default {
  name: 'TheHero',
  components: {
    TheHeadline,
    AnimatedPic,
    SearchForm,
    SpotLight
  }
}
</script>
