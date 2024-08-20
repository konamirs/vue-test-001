import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import JobResultsView from '@/views/JobResultsView.vue'
import TeamView from '@/views/TeamView.vue'
import JobView from '@/views/JobView.vue'
import BenefitView from '@/views/BenefitView.vue'
import LocationView from '@/views/LocationView.vue'
import LoginForm from '@/components/Authentical/LoginForm.vue'
import SignUpForm from '@/components/Authentical/SignUpForm.vue'
import AddView from '@/views/AddView.vue'

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
  },
  {
    path: '/jobs/results/:id',
    name: 'JobListing',
    component: JobView
  },
  {
    path: '/teams',
    name: 'Teams',
    component: TeamView
  },
  {
    path: '/benefits',
    name: 'Benefits',
    component: BenefitView
  },
  {
    path: '/locations',
    name: 'Locations',
    component: LocationView
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: LoginForm
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpForm
  },
  {
    path: '/jobs/results/add',
    name: 'AddJobs',
    component: AddView
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
