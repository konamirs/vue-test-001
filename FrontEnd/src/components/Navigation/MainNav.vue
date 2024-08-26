<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { AuthenticalStore } from '@/api/Stores/authentical'

import ActionButton from '@/components/Shared/ActionButton.vue'
import { toast } from 'vue3-toastify'

const menuItems = ref([
  { text: 'Teams', url: '/teams' },
  { text: 'Locations', url: '/locations' },
  { text: 'Benefits', url: '/benefits' },
  { text: 'Add Job', url: '/jobs/results/add' },
  { text: 'Jobs', url: '/jobs/results' }
])

const router = useRouter()

const store = AuthenticalStore()

const token = computed(() => store.token)
const logout = () => {
  store.logoutButton()
  toast.success('Logout Sucessfully')
}
</script>

<template>
  <header :class="['w-full', 'text-sm', 'h-16']">
    <div class="fixed top-0 left-0 h-16 w-full shadow-lg z-50">
      <div
        class="mx-auto flex h-full flex-nowrap border-b border-solid bg-zinc-50 border-brand-gray-1 px-8"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex h-full items-center text-3xl font-extrabold text-gray-500"
        >
          Test Trial
        </router-link>

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="menuItem in menuItems" :key="menuItem.text" class="ml-9 h-full first:ml-0">
              <router-link :to="menuItem.url" class="flex h-full items-center py-2.5">
                {{ menuItem.text }}
              </router-link>
            </li>
          </ul>
        </nav>

        <div class="ml-auto flex h-full items-center">
          <action-button
            v-if="token"
            text="Log Out"
            class="rounded-lg border-2 border-blue-200"
            @click="logout"
          />
          <action-button
            v-else
            text="Login"
            class="rounded-lg border-2 border-blue-200"
            @click="router.push({ name: 'Login' })"
          />
        </div>
      </div>
    </div>
  </header>
</template>
