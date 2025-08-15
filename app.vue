<template>
  <div>
  <NuxtPage/>
  </div>
</template>

<script>
import Navbar from '~/components/navbar.vue'
import Hero from '~/components/hero.vue'
import ContentSection from '~/components/contentsection.vue'
import Footer from '~/components/footer.vue'

export default {
  components: {
    Navbar,
    Hero,
    ContentSection,
    Footer,
  },
};
</script>