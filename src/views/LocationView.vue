<template>
  <header-container>
    <template #title>
      <h1 class="w-full text-4xl font-normal self-center">Location</h1>
    </template>

    <template #subtitle>
      <h2 class="my-4 w-full text-base font-light self-center">
        This is the place where you can see the location in the map
      </h2>
    </template>
  </header-container>
  <div ref="map" class="w-10/12 h-[36rem] ml-32 my-8"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import HeaderContainer from '@/components/Shared/HeaderContainer.vue'
const map = ref(null)

onMounted(() => {
  new window.google.maps.Map(map.value, {
    center: { lat: 21.0341701, lng: 105.7963836 },
    zoom: 10
  })
})
</script>
