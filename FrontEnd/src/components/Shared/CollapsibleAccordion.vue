<template>
  <div class="border-b border-solid border-b-slate-300 border-brand-gray-2 py-5">
    <div class="flex cursor-pointer flex-wrap items-center justify-between" @click="open">
      <h3 class="text-base font-semibold">{{ header }}</h3>

      <font-awesome-icon :icon="caretIcon" />
    </div>

    <div v-if="isOpen" class="mt-5 w-full p-2 border-t border-slate-300">
      <slot>
        <p>Whoops, somebody forgotto populated me!</p>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

defineProps({
  header: {
    type: String,
    required: true
  }
})
const isOpen = ref(false)

const open = () => {
  isOpen.value = !isOpen.value
}

const caretIcon = computed(() => (isOpen.value ? ['fas', 'angle-up'] : ['fas', 'angle-down']))
</script>
