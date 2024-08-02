import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import JobResultsView from '@/views/JobResultsView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/jobs/results',
    name: 'JobResults',
    component: JobResultsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
