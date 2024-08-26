import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import type { Degree } from '@/api/type'

export const useDegreesStore = defineStore('degrees', () => {
  const degrees = ref<Degree[]>([])
  const baseUrl = import.meta.env.VITE_APP_API_URL

  const FETCH_DEGREES = () => fetch(`${baseUrl}/api/degrees`)
  .then((response) => response.json())
  .then((data) => {
    degrees.value = data[0].degrees
  })

  const UNIQUE_DEGREES = computed(() => degrees.value.map((degree) => degree.degree))

  return { degrees, FETCH_DEGREES, UNIQUE_DEGREES }
})
