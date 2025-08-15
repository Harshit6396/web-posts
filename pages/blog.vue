<template>
  <div>
    <fixedheader />

    <!-- Page Title Banner -->
    <section class="bg-red-500 text-white py-8">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold text-center">BLOG</h1>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Main Content Area -->
          <div class="lg:col-span-2">
            <!-- Blog Post 1 -->
            <article class="bg-white rounded-lg shadow-sm mb-8 overflow-hidden">
              <div class="p-2">
                <span class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">August 25, 2024</span>
              </div>
              <img
                  src="https://i.ibb.co/NgVs5f6X/Backing-off-back-translations-600x360.jpg"
                  alt="Backing off back translations"
                  class="w-full h-64 object-cover"
              />
              <div class="p-6">
                <h2 class="text-xl font-bold text-gray-900 mb-3">Backing off back translations</h2>
                <p class="text-gray-600 leading-relaxed mb-4">
                  Back translation is a quality assurance technique used in translation where a translated text is translated back into the original language by a different translator. This process helps identify potential errors, ambiguities, or cultural misunderstandings in the initial translation.
                </p>
                <button class="bg-red-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-red-600 transition-colors">
                  READ MORE
                </button>
              </div>
            </article>

            <!-- Blog Post 2 -->
            <article class="bg-white rounded-lg shadow-sm mb-8 overflow-hidden">
              <div class="p-2">
                <span class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">August 18, 2024</span>
              </div>
              <img
                  src="https://i.ibb.co/bRFbvPFX/Best-Practices-in-Audio-Localization-540x360.jpg"
                  alt="Best Practices in Audio Localization"
                  class="w-full h-64 object-cover"
              />
              <div class="p-6">
                <h2 class="text-xl font-bold text-gray-900 mb-3">Best Practices in Audio Localization</h2>
                <p class="text-gray-600 leading-relaxed mb-4">
                  Audio localization involves adapting audio content for different markets and cultures. This comprehensive guide covers the essential best practices for successful audio localization projects, including voice talent selection, cultural adaptation, and technical considerations for optimal results.
                </p>
                <button class="bg-red-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-red-600 transition-colors">
                  READ MORE
                </button>
              </div>
            </article>

            <!-- Blog Post 3 -->
            <article class="bg-white rounded-lg shadow-sm mb-8 overflow-hidden">
              <div class="p-2">
                <span class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">August 12, 2024</span>
              </div>
              <img
                  src="https://i.ibb.co/zhhkdSX7/Translation-Memory-700x360.jpg"
                  alt="Translation Memory"
                  class="w-full h-64 object-cover"
              />
              <div class="p-6">
                <h2 class="text-xl font-bold text-gray-900 mb-3">Translation Memory</h2>
                <p class="text-gray-600 leading-relaxed mb-4">
                  Translation Memory (TM) is a database that stores previously translated segments of text. This powerful tool helps translators maintain consistency, reduce costs, and improve efficiency by leveraging past translations for new projects. Learn how TM can revolutionize your translation workflow.
                </p>
                <button class="bg-red-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-red-600 transition-colors">
                  READ MORE
                </button>
              </div>
            </article>

            <!-- Blog Post 4 -->
            <article class="bg-white rounded-lg shadow-sm mb-8 overflow-hidden">
              <div class="p-2">
                <span class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">August 05, 2024</span>
              </div>
              <img
                  src="https://i.ibb.co/2VTdzMX/blog3-700x360.jpg"
                  alt="Tips for Translation and Regulatory Compliance"
                  class="w-full h-64 object-cover"
              />
              <div class="p-6">
                <h2 class="text-xl font-bold text-gray-900 mb-3">Tips for Translation and Regulatory Compliance in the Pharmaceutical and Medical Device Industries</h2>
                <p class="text-gray-600 leading-relaxed mb-4">
                  Pharmaceutical and medical device companies face unique challenges when translating regulatory documents. This article provides essential tips for ensuring compliance while maintaining accuracy and meeting strict regulatory requirements across different markets and jurisdictions.
                </p>
                <button class="bg-red-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-red-600 transition-colors">
                  READ MORE
                </button>
              </div>
            </article>

            <!-- Pagination -->
            <div class="flex justify-center mt-8">
              <nav class="flex space-x-2">
                <button class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  Previous
                </button>
                <button class="px-3 py-2 text-sm font-medium text-white bg-red-500 border border-red-500 rounded-md">
                  1
                </button>
                <button class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  2
                </button>
                <button class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  3
                </button>
                <button class="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <!-- About KnowledgeTrans -->
            <div class="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 class="text-lg font-bold text-gray-900 mb-4">ABOUT KNOWLEDGETRANS</h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                KnowledgeTrans, a division of Coral Knowledge Services Pvt. Ltd., is a leading service provider of translation, e-learning, and localization engineering. Headquartered in New Delhi, India, we have seven years of experience in executing full life cycle projects in over 100 languages.
              </p>
            </div>

            <!-- Support Center -->
            <div class="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 class="text-lg font-bold text-gray-900 mb-4">SUPPORT CENTER</h3>
              <div class="space-y-2 text-sm text-gray-700">
                <p><strong>Coral Knowledge Services Pvt. Ltd.</strong></p>
                <p>Unit 215 & 309,</p>
                <p>Aggarwal Prestige Mall,</p>
                <p>Road No. 44, Pitampura,</p>
                <p>New Delhi-110034, India</p>
                <p><strong>Mobile:</strong> +91-9811241170,</p>
                <p class="ml-16">+91-9811244179</p>
                <p><strong>Phone:</strong> +91-11-47006458</p>
                <p><strong>Email:</strong></p>
                <p><a href="mailto:info@coralknowledgeservices.in" class="text-red-500 hover:text-red-600">info@coralknowledgeservices.in</a></p>
              </div>
            </div>

            <!-- Social Media Widget -->
            <div class="bg-white p-4 rounded-lg shadow-sm mb-8">
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div class="text-sm">
                  <p class="font-semibold">Coral Knowl...</p>
                  <p class="text-gray-500">Follow Page</p>
                </div>
              </div>
            </div>

            <!-- Newsletter Signup -->
            <div class="bg-white p-6 rounded-lg shadow-sm">
              <h3 class="text-lg font-bold text-gray-900 mb-4">Sign up for our newsletter!</h3>
              <form @submit.prevent="subscribeNewsletter" class="space-y-4">
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                      type="email"
                      id="email"
                      v-model="newsletterEmail"
                      required
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                      placeholder="Enter your email"
                  />
                </div>
                <button
                    type="submit"
                    class="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors font-semibold"
                >
                  SIGN UP
                </button>
              </form>
            </div>

            <!-- Recent Posts -->
            <div class="bg-white p-6 rounded-lg shadow-sm mt-8">
              <h3 class="text-lg font-bold text-gray-900 mb-4">RECENT POSTS</h3>
              <div class="space-y-4">
                <div class="flex space-x-3">
                  <img src="https://i.ibb.co/NgVs5f6X/Backing-off-back-translations-600x360.jpg" alt="Recent post" class="w-16 h-12 object-cover rounded">
                  <div>
                    <h4 class="text-sm font-medium text-gray-900 line-clamp-2">Backing off back translations</h4>
                    <p class="text-xs text-gray-500 mt-1">August 25, 2024</p>
                  </div>
                </div>
                <div class="flex space-x-3">
                  <img src="https://i.ibb.co/bRFbvPFX/Best-Practices-in-Audio-Localization-540x360.jpg" alt="Recent post" class="w-16 h-12 object-cover rounded">
                  <div>
                    <h4 class="text-sm font-medium text-gray-900 line-clamp-2">Best Practices in Audio Localization</h4>
                    <p class="text-xs text-gray-500 mt-1">August 18, 2024</p>
                  </div>
                </div>
                <div class="flex space-x-3">
                  <img src="https://i.ibb.co/zhhkdSX7/Translation-Memory-700x360.jpg" alt="Recent post" class="w-16 h-12 object-cover rounded">
                  <div>
                    <h4 class="text-sm font-medium text-gray-900 line-clamp-2">Translation Memory</h4>
                    <p class="text-xs text-gray-500 mt-1">August 12, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="bg-red-500 text-white py-12">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-2xl font-bold mb-4">Stay Updated with Translation Industry Insights</h2>
        <p class="text-lg mb-6 opacity-90">
          Subscribe to our blog for the latest trends, tips, and best practices in translation and localization.
        </p>
        <button class="bg-white text-red-500 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          SUBSCRIBE NOW
        </button>
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
              Professional translation and localization services for global businesses across all industries.
            </p>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Blog Categories</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">Translation Tips</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Industry Insights</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Technology</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Best Practices</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Services</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">Translation</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Localization</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Interpretation</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Transcription</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Contact</h4>
            <div class="space-y-2 text-sm text-gray-400">
              <p>New Delhi, India</p>
              <p>+91-11-47006458</p>
              <p>info@coralknowledgeservices.in</p>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 KnowledgeTrans. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import fixedheader from '~/components/fixedheader.vue'
import { useHead } from '#app'

const newsletterEmail = ref('')

const subscribeNewsletter = () => {
  console.log('Newsletter subscription:', newsletterEmail.value)
  newsletterEmail.value = ''
  alert('Thank you for subscribing to our newsletter!')
}

useHead({
  title: 'Blog - KnowledgeTrans Translation Services',
  meta: [
    { name: 'description', content: 'Stay updated with the latest insights, tips, and best practices in translation, localization, and language services from KnowledgeTrans experts.' }
  ]
})
</script>