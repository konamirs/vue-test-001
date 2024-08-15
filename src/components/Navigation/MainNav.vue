<script setup lang="ts">
import { ref, computed } from 'vue'

import { useUserStore } from '@/Stores/user'

import ActionButton from '@/components/Shared/ActionButton.vue'
import ProfileImage from '@/components/Navigation/ProfileImage.vue'

const menuItems = ref([
  { text: 'Teams', url: '/teams' },
  { text: 'Locations', url: '/locations' },
  { text: 'Benefits', url: '/benefits' },
  { text: 'Sign In', url: '/signin' },
  { text: 'Sign Up', url: '/signup' },
  { text: 'Jobs', url: '/jobs/results' }
])

const userStore = useUserStore()
const LOGIN_USER = userStore.LOGIN_USER
const isLoggedIn = computed(() => userStore.isLoggedIn)
</script>

<template>
  <header :class="['w-full', 'text-sm', 'h-16']">
    <div class="fixed top-0 left-0 h-16 w-full shadow-lg z-50">
      <div
        class="mx-auto flex h-full flex-nowrap border-b border-solid bg-zinc-50 border-brand-gray-1 px-8"
      >
        <router-link :to="{ name: 'Home' }" class="flex h-full items-center text-3xl">
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
          <profile-image v-if="isLoggedIn" />
          <action-button
            v-else
            text="Sign in"
            class="rounded-lg border-2 border-blue-200"
            @click="LOGIN_USER"
          />
        </div>
      </div>
    </div>
  </header>
</template>
