<template>
  <img :src="imgLink" class="w-10 h-10 rounded-full" alt="User profile image" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const imgLink = ref(
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI2K58h03rEdQC6vbTQhY3USrZ_FT-peeH4g&s'
)
</script>
