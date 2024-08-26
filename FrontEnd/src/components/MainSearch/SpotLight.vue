<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot
        :id="spotlight.id"
        :img="spotlight.img"
        :title="spotlight.title"
        :description="spotlight.description"
      ></slot>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Spotlight } from '@/api/type';

const spotlights = ref<Spotlight[]>([])
  const baseUrl = import.meta.env.VITE_APP_API_URL

fetch(`${baseUrl}/api/spotlights`)
  .then((response) => response.json())
  .then((data) => {
    spotlights.value = data[0].spotlights
  })
</script>
