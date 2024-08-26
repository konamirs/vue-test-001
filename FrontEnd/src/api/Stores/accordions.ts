import { ref } from 'vue'
import { defineStore } from 'pinia'

import type { Accordion } from '@/api/type'

export const useAccordionsStore = defineStore('accordions', () => {
  const accordions = ref<Accordion[]>([])
  const baseUrl = import.meta.env.VITE_APP_API_URL

  const FETCH_ACCORDIONS = async () => {
    try {
      const response = await fetch(`${baseUrl}/api/accordion`)
      const data = await response.json()
      accordions.value = data[0].accordions
    } catch (error) {
      console.error('Error fetching accordions:', error)
    }
  }

  return { accordions, FETCH_ACCORDIONS }
})