import { defineStore } from 'pinia'

import type { Job } from '@/api/type'

import { useUserStore } from '@/api/Stores/user'

const baseUrl = import.meta.env.VITE_APP_API_URL

export const FETCH_JOBS = 'FETCH_JOBS'
export const UNIQUE_ORGANIZATIONS = 'UNIQUE_ORGANIZATIONS'
export const UNIQUE_JOB_TYPES = 'UNIQUE_JOB_TYPES'
export const FILTERED_JOBS = 'FILTERED_JOBS'

export const INCLUDE_JOB_BY_ORGANIZATION = 'INCLUDE_JOB_BY_ORGANIZATION'
export const INCLUDE_JOB_BY_JOB_TYPE = 'INCLUDE_JOB_BY_JOB_TYPE'
export const INCLUDE_JOB_BY_DEGREE = 'INCLUDE_JOB_BY_DEGREE'
export const INCLUDE_JOB_BY_SKILL = 'INCLUDE_JOB_BY_SKILL'
export const INCLUDE_JOB_BY_LOCATION = 'INCLUDE_JOB_BY_LOCATION'

export interface JobsState {
  jobs: Job[]
}

export const useJobsStore = defineStore('Jobs', {
  state: (): JobsState => ({
    jobs: []
  }),
  actions: {
    async [FETCH_JOBS]() {
      fetch(`${baseUrl}/api/jobs`)
        .then((response) => response.json())
        .then((data) => {
          this.jobs = data[0].jobs
        })
    }
  },
  getters: {
    [UNIQUE_ORGANIZATIONS](state) {
      const uniqueOrganizations = new Set<string>()
      state.jobs.forEach((job) => uniqueOrganizations.add(job.organization))
      return uniqueOrganizations
    },
    [UNIQUE_JOB_TYPES](state) {
      const uniqueJobTypes = new Set<string>()
      state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType))
      return uniqueJobTypes
    },
    [INCLUDE_JOB_BY_ORGANIZATION]: () => (job: Job) => {
      const userStore = useUserStore()

      if (userStore.selectedOrganizations.length === 0) return true
      return userStore.selectedOrganizations.includes(job.organization)
    },
    [INCLUDE_JOB_BY_JOB_TYPE]: () => (job: Job) => {
      const userStore = useUserStore()

      if (userStore.selectedJobTypes.length === 0) return true
      return userStore.selectedJobTypes.includes(job.jobType)
    },
    [INCLUDE_JOB_BY_DEGREE]: () => (job: Job) => {
      const userStore = useUserStore()

      if (userStore.selectedDegrees.length === 0) return true
      return userStore.selectedDegrees.includes(job.degree)
    },
    [INCLUDE_JOB_BY_SKILL]: () => (job: Job) => {
      const userStore = useUserStore()

      return (
        job.title.toLowerCase().includes(userStore.skillsSearchTerm.toLowerCase()) ||
        job.locations.some((locations) =>
          locations.toLowerCase().includes(userStore.skillsSearchTerm.toLocaleLowerCase())
        )
      )
    },
    [INCLUDE_JOB_BY_LOCATION]: () => (job: Job) => {
      const userStore = useUserStore()

      return job.locations.some((locations) =>
        locations.toLowerCase().includes(userStore.locationsSearchTerm.toLocaleLowerCase())
      )
    },
    [FILTERED_JOBS](state): Job[] {
      return state.jobs
        .filter((job) => this.INCLUDE_JOB_BY_ORGANIZATION(job))
        .filter((job) => this.INCLUDE_JOB_BY_JOB_TYPE(job))
        .filter((job) => this.INCLUDE_JOB_BY_DEGREE(job))
        .filter((job) => this.INCLUDE_JOB_BY_SKILL(job))
        .filter((job) => this.INCLUDE_JOB_BY_LOCATION(job))
    }
  }
})
