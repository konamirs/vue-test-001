<template>
  <header-container>
    <template #title>
      <h1 class="w-full text-4xl font-normal self-center">Teams</h1>
    </template>

    <template #subtitle>
      <h2 class="my-4 w-full text-base font-light self-center">
        It's awesome working here. Why don't you come join us?
      </h2>
    </template>
  </header-container>
  <main class="flex flex-col h-screen mt-16">
    <spot-light class="grid grid-cols-4 pb-16 ml-10">
      <template #default="{ img, title, description }">
        <div
          class="mx-5 mb-16 shadow-lg flex h-96 w-72 flex-col rounded-lg border bg-brand-gray-2 text-center items-center"
        >
          <img :src="img" class="rounded-lg h-52 w-64 mt-3" />

          <div class="h-48 px-6 py-4">
            <h3 class="text-lg font-bold">
              {{ title }}
            </h3>

            <p class="mt-3 text-sm">
              {{ description }}
            </p>

            <router-link
              to="/jobs/results"
              class="mt-3 inline-block font-mono text-sm font-bold bg-slate-500 text-white py-2 px-4 rounded-full transition duration-100 transform hover:opacity-75"
              >See jobs</router-link
            >
          </div>
        </div>

        <div
          class="mx-5 mb-16 shadow-lg flex h-96 w-72 flex-col rounded-lg border bg-brand-gray-2 text-center items-center"
        >
          <img :src="img" class="rounded-lg h-52 w-64 mt-3" />

          <div class="h-48 px-6 py-4">
            <h3 class="text-lg font-bold">
              {{ title }}
            </h3>

            <p class="mt-3 text-sm">
              {{ description }}
            </p>

            <router-link
              to="/jobs/results"
              class="mt-3 inline-block font-mono text-sm font-bold bg-slate-500 text-white py-2 px-4 rounded-full transition duration-100 transform hover:opacity-75"
              >See jobs</router-link
            >
          </div>
        </div>
      </template>
    </spot-light>
  </main>
</template>

<script setup lang="ts">
import HeaderContainer from '@/components/Shared/HeaderContainer.vue'
import SpotLight from '@/components/MainSearch/SpotLight.vue'
</script>
