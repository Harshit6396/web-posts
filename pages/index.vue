<template>
  <div class="min-h-screen bg-white">
    <!-- Header Navigation -->
   <fixedheader />

    <!-- Red Banner Section -->
    <section class="bg-red-500 text-white py-8">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center justify-between">
          <div class="lg:w-3/4 mb-6 lg:mb-0">
            <p class="text-lg leading-relaxed">
              We offer professional translation services worldwide. Did you know that translating your English content into Mandarin and Spanish – just 2 new languages – will mean your message will be heard by 25% of the world's population? Talk to us today about opening up your business to new markets via our translation services.
            </p>
          </div>
          <div class="lg:w-1/4 flex justify-end">
            <a href="/contact">
              <button class="bg-white text-red-500 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
                GET QUOTE
              </button>
            </a>

          </div>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="bg-gray-900 text-white py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div class="space-y-2">
            <div class="text-4xl font-bold text-red-500">7+</div>
            <div class="text-sm uppercase tracking-wide">Years in Industry</div>
          </div>
          <div class="space-y-2">
            <div class="text-4xl font-bold text-red-500">1M+</div>
            <div class="text-sm uppercase tracking-wide">Million Words Translated</div>
          </div>
          <div class="space-y-2">
            <div class="text-4xl font-bold text-red-500">500+</div>
            <div class="text-sm uppercase tracking-wide">Qualified Native Translators</div>
          </div>
          <div class="space-y-2">
            <div class="text-4xl font-bold text-red-500">1000+</div>
            <div class="text-sm uppercase tracking-wide">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section with Background -->
    <section class="relative py-20 overflow-hidden">
      <!-- Background Image -->
      <div
          class="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"
          style="background-image: url('https://i.ibb.co/LhJ2ZQ23/about-us3.jpg'); background-size: cover; background-position: center;">
      </div>

      <!-- Content Overlay -->
      <div class="relative z-10 container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center text-white">
          <p class="text-lg leading-relaxed">
            <strong>KnowledgeTrans</strong>, a division of <strong>Coral Knowledge Services Pvt. Ltd.</strong>, is a leading service provider of translation, e-learning, and localization engineering. Headquartered in New Delhi, India, we have seven years of experience in executing full life cycle projects in over <strong>100 languages</strong>.
          </p>
        </div>
      </div>
    </section>


    <!-- Services Preview Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive language solutions to help your business reach global markets effectively.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Translation Services</h3>
            <p class="text-gray-600">Professional translation services in over 100 languages with native translators.</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">E-Learning Solutions</h3>
            <p class="text-gray-600">Comprehensive e-learning content development and localization services.</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Localization Engineering</h3>
            <p class="text-gray-600">Technical localization and engineering services for global market adaptation.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <div class="text-2xl font-bold mb-4">
              <span class="text-red-500">KNOWLEDGE</span><span>TRANS</span>
            </div>
            <p class="text-gray-400 text-sm">
              Professional translation and localization services for global businesses.
            </p>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Services</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">Translation</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Localization</a></li>
              <li><a href="#" class="hover:text-white transition-colors">E-Learning</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Company</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Contact</h4>
            <div class="space-y-2 text-sm text-gray-400">
              <p>New Delhi, India</p>
              <p>+91-11-4166-7777</p>
              <p>info@knowledgetrans.com</p>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2016 KnowledgeTrans. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Page meta
useHead({
  title: 'KnowledgeTrans - Professional Translation Services',
  meta: [
    { name: 'description', content: 'Professional translation services worldwide in over 100 languages. Expert e-learning and localization engineering solutions.' }
  ]
})
</script>

<style scoped>
/* Additional custom styles if needed */
</style>