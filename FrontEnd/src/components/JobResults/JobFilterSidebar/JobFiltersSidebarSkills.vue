<template>
  <div class="mt-2 w-full h-12 relative flex rounded-xl">
    <input
      v-model.lazy.trim="skillsSearchTerm"
      required="false"
      type="text"
      id="skillSearch"
      class="peer shadow-gray w-full bg-transparent outline-none p-3 text-base rounded-xl bg-white border border-solid border-brand-gray-1 focus:shadow-md"
    />
    <label
      for="skillSearch"
      class="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150"
      >What do you want to find?</label
    >
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '@/Stores/user'

const userStore = useUserStore()

const skillsSearchTerm = computed({
  get() {
    return userStore.skillsSearchTerm
  },
  set(value: string) {
    userStore.UPDATE_SKILLS_SEARCH_TERM(value)
  }
})
</script>
