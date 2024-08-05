import { defineStore } from 'pinia'

import getJobs from '@/api/getJobs'

export const FETCH_JOBS = 'FETCH_JOBS'

export const useJobsStore = defineStore('Jobs', {
  state: () => ({
    jobs: []
  }),
  actions: {
    async [FETCH_JOBS]() {
      const jobs = await getJobs()
      this.jobs = jobs
    }
  }
})
