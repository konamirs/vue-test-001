<template>
  <button :class="buttonClass">{{ text }}</button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    text: {
      type: String,
      require: true
    },
    type: {
      type: String,
      require: false,
      default: 'secondary'
    }
  },

  computed: {
    buttonClass() {
      return {
        [this.type]: true
      }
    }
  }
}
</script>

<style scoped>
button {
  @apply px-5 py-3 font-medium;
}

.primary {
  @apply rounded text-white bg-brand-blue-1 hover:shadow-blue border-r-2;
}

.secondary {
  @apply text-brand-blue-1 bg-transparent hover:bg-brand-blue-2 hover:text-white;
}
</style>
