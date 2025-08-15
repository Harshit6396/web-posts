<template>
  <div>
    <!-- About Section with Background -->
    <section class="relative py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
        <BackgroundPlaceholder text="Business Handshake" class="w-full h-full object-cover" />
      </div>

      <div class="relative z-10 container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center text-white">
          <p class="text-lg leading-relaxed">
            <strong>KnowledgeTrans</strong>, a division of <strong>Coral Knowledge Services Pvt. Ltd.</strong>, is a leading service provider of translation, e-learning, and localization engineering. Headquartered in New Delhi, India, we have seven years of experience in executing full life cycle projects in over <strong>100 languages</strong>.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { definePageMeta, useHead } from '#imports'

definePageMeta({
  layout: 'default'
})

useHead({
  title: 'KnowledgeTrans - Professional Translation Services',
  meta: [
    { name: 'description', content: 'Professional translation services worldwide in over 100 languages. Expert e-learning and localization engineering solutions.' }
  ]
})
</script>