<template>
  <div>
    <main-nav />
    <router-view />
  </div>
</template>

<script>
import MainNav from '@/components/Nagivation/MainNav.vue'

export default {
  name: 'App',
  components: {
    MainNav
  }
}
</script>
