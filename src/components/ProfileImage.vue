<template>
  <img :src="imglink" alt="none" class="w-10 h-10 object-contain rounded-3xl" />
</template>

<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      imglink:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI2K58h03rEdQC6vbTQhY3USrZ_FT-peeH4g&s'
    }
  }
}
</script>
