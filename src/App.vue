<template>
  <main-nav />
  <br />
  <the-hero />
</template>

<script>
import MainNav from './components/Nagivation/MainNav.vue'
import TheHero from './components/MainSearch/TheHero.vue'

export default {
  name: 'App',
  components: {
    MainNav,
    TheHero
  }
}
</script>
