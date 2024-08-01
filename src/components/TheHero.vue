<template>
  <main>
    <section class="w-screen flex flex-col h-screen pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-3 col-start-1 mt-16 border">
          <TheHeadline />
        </div>
        <div class="col-span-3 col-start-6 mt-16 self-center">
          <user-card />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import TheHeadline from './TheHeadline.vue'
import UserCard from '@/components/UserCard.vue'

export default {
  name: 'TheHero',
  components: {
    TheHeadline,
    UserCard
  }
}
</script>
