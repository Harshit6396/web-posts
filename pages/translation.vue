<template>
  <div>
    <!-- Fixed Header Component -->
    <fixedheader />

    <!-- Red Header Bar -->
    <section class="bg-red-500 text-white py-8">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold text-center">TRANSLATION</h1>
    </div>
  </section>

    <!-- Main Content Area -->
    <div class="bg-gray-50 min-h-screen">
      <div class="container mx-auto px-4 py-8">
        <div class="flex flex-col lg:flex-row gap-8">

          <!-- Main Content -->
          <div class="lg:w-2/3">
            <div class="bg-white rounded-lg shadow-sm p-8">

              <!-- Main Heading -->
              <h1 class="text-3xl font-bold text-gray-900 mb-6">
                Expert Translation Services in Close to Every Subject
              </h1>

              <!-- Introduction Text -->
              <div class="text-gray-700 mb-8 leading-relaxed">
                <p class="mb-4">
                  Our translation services offer you the opportunity to expand globally in today's economy, reaching out to global clients. Our team consists of expert translators who are native speakers of the target language and have extensive knowledge of the subject matter they are translating. We provide accurate, culturally appropriate translations that maintain the original meaning and tone of your content.
                </p>
              </div>

              <!-- Most Common Products Section -->
              <div class="mb-8">
                <h2 class="text-xl font-semibold text-gray-900 mb-4">
                  Our most common products are
                </h2>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start">
                    <span class="text-red-500 mr-2">•</span>
                    <span>Document translation</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-500 mr-2">•</span>
                    <span>Website localization</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-500 mr-2">•</span>
                    <span>Technical translation</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-500 mr-2">•</span>
                    <span>Legal translation</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-500 mr-2">•</span>
                    <span>Medical translation</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-500 mr-2">•</span>
                    <span>Marketing translation</span>
                  </li>
                </ul>
                <p class="text-gray-600 text-sm mt-4">
                  We also provide certified translations that are legally recognized worldwide. All our translations go through rigorous quality checks.
                </p>
              </div>

              <!-- Translation Team Section -->
              <div class="mb-8">
                <h2 class="text-xl font-semibold text-gray-900 mb-4">
                  Our Translation Team
                </h2>
                <p class="text-gray-700 leading-relaxed mb-4">
                  Our team is made up of native speakers. Our translators have years of experience and are experts in their respective fields. Each translator specializes in specific subject areas and language pairs, ensuring that your content is translated with the highest level of accuracy and cultural sensitivity. We maintain strict quality standards and employ a rigorous selection process for our translation professionals.
                </p>
              </div>

              <!-- Quality and Turnaround Section -->
              <div class="mb-8">
                <h2 class="text-xl font-semibold text-gray-900 mb-4">
                  Guaranteed Quality and Fast Turnaround
                </h2>
                <p class="text-gray-700 leading-relaxed mb-4">
                  We understand that time is crucial in business, which is why we offer fast turnaround times without compromising on quality. Our streamlined process ensures that your translations are delivered on time, every time. We also provide:
                </p>
                <ul class="space-y-2 text-gray-700 mb-4">
                  <li class="flex items-start">
                    <span class="text-red-500 mr-2">•</span>
                    <span>24/7 customer support</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-500 mr-2">•</span>
                    <span>Quality assurance checks</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-500 mr-2">•</span>
                    <span>Proofreading and editing services</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-500 mr-2">•</span>
                    <span>Confidentiality agreements</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-500 mr-2">•</span>
                    <span>Competitive pricing with no hidden costs</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-500 mr-2">•</span>
                    <span>Multiple file format support</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-red-500 mr-2">•</span>
                    <span>Rush delivery options available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:w-1/3">
            <div class="space-y-6">

              <!-- Services Section -->
              <div class="bg-white rounded-lg shadow-sm p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">Services</h3>
                <ul class="space-y-2">
                  <li>
                    <NuxtLink to="/services/translation" class="text-red-500 hover:text-red-600 text-sm">
                      Translation Services
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/services/interpretation" class="text-gray-600 hover:text-red-500 text-sm">
                      Interpretation Services
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/services/transcription" class="text-gray-600 hover:text-red-500 text-sm">
                      Transcription Services
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/services/audio-visual" class="text-gray-600 hover:text-red-500 text-sm">
                      Audio Visual Services
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/services/localization" class="text-gray-600 hover:text-red-500 text-sm">
                      Localization Services
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/services/desktop-publishing" class="text-gray-600 hover:text-red-500 text-sm">
                      Desktop Publishing
                    </NuxtLink>
                  </li>
                </ul>
              </div>

              <!-- About KnowledgeTrans Section -->
              <div class="bg-white rounded-lg shadow-sm p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">ABOUT KNOWLEDGETRANS</h3>
                <p class="text-gray-600 text-sm leading-relaxed mb-4">
                  KnowledgeTrans is a leading provider of language services, offering comprehensive translation, interpretation, and localization solutions to businesses worldwide. With years of experience and a team of expert linguists, we help organizations communicate effectively across language barriers.
                </p>
                <p class="text-gray-600 text-sm leading-relaxed">
                  Our commitment to quality, accuracy, and customer satisfaction has made us a trusted partner for companies of all sizes, from startups to Fortune 500 enterprises.
                </p>
              </div>

              <!-- Support Center Section -->
              <div class="bg-white rounded-lg shadow-sm p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-4">SUPPORT CENTER</h3>
                <ul class="space-y-2 text-sm">
                  <li>
                    <NuxtLink to="/support/faq" class="text-gray-600 hover:text-red-500">
                      Frequently Asked Questions
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/support/contact" class="text-gray-600 hover:text-red-500">
                      Contact Support
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/support/quote" class="text-gray-600 hover:text-red-500">
                      Get a Quote
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/support/file-upload" class="text-gray-600 hover:text-red-500">
                      File Upload Portal
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/support/quality-policy" class="text-gray-600 hover:text-red-500">
                      Quality Policy
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/support/privacy-policy" class="text-gray-600 hover:text-red-500">
                      Privacy Policy
                    </NuxtLink>
                  </li>
                  <li>
                    <NuxtLink to="/support/terms" class="text-gray-600 hover:text-red-500">
                      Terms of Service
                    </NuxtLink>
                  </li>
                </ul>
              </div>

              <!-- Newsletter Signup -->
              <div class="bg-white rounded-lg shadow-sm p-6">
                <div class="text-center mb-4">
                  <div class="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                </div>
                <h4 class="text-center font-semibold text-gray-900 mb-2">Sign up for our newsletter</h4>
                <p class="text-center text-gray-600 text-sm mb-4">Get updates on our latest services and industry insights.</p>
                <form @submit.prevent="subscribeNewsletter" class="space-y-3">
                  <input
                      v-model="email"
                      type="email"
                      placeholder="Enter your email"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      required
                  >
                  <button
                      type="submit"
                      class="w-full bg-red-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-red-600 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <Footer/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useHead } from '#app'

// SEO Meta
useHead({
  title: 'Translation Services - KnowledgeTrans',
  meta: [
    { name: 'description', content: 'Expert translation services in close to every subject. Professional document translation, website localization, and more with guaranteed quality and fast turnaround.' }
  ]
})

// Newsletter subscription
const email = ref('')

const subscribeNewsletter = () => {
  // Handle newsletter subscription
  console.log('Newsletter subscription:', email.value)
  // Add your newsletter subscription logic here
  alert('Thank you for subscribing to our newsletter!')
  email.value = ''
}
</script>

<style scoped>
/* Custom styles if needed */
</style>
