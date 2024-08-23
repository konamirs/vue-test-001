<template>
  <div>
    <main-nav />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import MainNav from '@/components/Navigation/MainNav.vue'
import { RouterView } from 'vue-router';
</script>
