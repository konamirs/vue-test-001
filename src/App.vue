<template>
  <div>
    <main-nav />
    <the-hero />
  </div>
</template>

<script>
import MainNav from '@/components/Nagivation/MainNav.vue'
import TheHero from '@/components/MainSearch/TheHero.vue'

export default {
  name: 'App',
  components: {
    MainNav,
    TheHero
  }
}
</script>
