<template>
  <main>
    <section class="relative left-0 -top-0 w-screen flex flex-col h-screen pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-5 col-start-2">
          <TheHeadline />
          <search-form />
        </div>
        <div class="col-span-3 col-start-9 self-center">
          <animated-pic />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import TheHeadline from '@/components/MainSearch/TheHeadline.vue'
import AnimatedPic from '@/components/Shared/AnimatedPic.vue'
import SearchForm from '@/components/MainSearch/SearchForm.vue'

export default {
  name: 'TheHero',
  components: {
    TheHeadline,
    AnimatedPic,
    SearchForm
  }
}
</script>
