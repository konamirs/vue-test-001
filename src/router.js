import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import JobResultsView from '@/views/JobResultsView.vue'
import JobListings from './components/JobResults/JobListings.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/jobs/results',
    name: 'JobResults',
    component: JobListings
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: 'smooth' }
  }
})

export default router
