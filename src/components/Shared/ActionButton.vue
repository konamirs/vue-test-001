<template>
  <button :class="buttonClass">{{ text }}</button>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue'

const props = defineProps({
  text: {
    type: String,
    require: true
  },
  type: {
    type: String,
    require: false,
    default: 'primary',
    validator(value: string) {
      return ['primary', 'secondary'].includes(value)
    }
  }
})

const { type } = toRefs(props)
const buttonClass = computed(() => {
  return {
    [props.type]: true
  }
})
</script>

<style scoped>
button {
  @apply px-5 py-3 font-medium;
}

.primary {
  @apply rounded-lg text-white bg-brand-blue-1 hover:shadow;
}

.secondary {
  @apply text-brand-blue-1 bg-transparent hover:bg-brand-blue-2 hover:text-white rounded-xl;
}
</style>
