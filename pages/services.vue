<template>
  <div>
    <fixedheader />

    <!-- Page Title Banner -->
    <section class="bg-red-500 text-white py-8">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold text-center">SERVICES</h1>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Main Content Area -->
          <div class="lg:col-span-2">
            <!-- Introduction -->
            <div class="bg-white p-6 rounded-lg shadow-sm mb-8">
              <p class="text-gray-700 leading-relaxed mb-4">
                At KnowledgeTrans, you will find a broad range of accurate translation and other related services. In today's dynamic world, it has become imperative for both private and official organizations to have proper translation services to communicate with their customers and clients in the language that they understand. This is because important to translate your key information such as legal documents, marketing materials, marketing presentations, and all business critical information into other foreign languages.
              </p>
              <p class="text-gray-700 leading-relaxed">
                We also address the need for other services such as interpretation, subtitling / captioning, voiceovers and transcription in foreign languages. Apart from meeting the translation needs of businesses, we also serve individuals who are in need of translation services.
              </p>
            </div>

            <!-- Translation Services -->
            <div class="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 class="text-2xl font-bold text-red-500 mb-4">Translation Services</h2>
              <p class="text-gray-700 leading-relaxed mb-4">
                KnowledgeTrans offers professional translation and proofreading services for a like variety of clients. While most of our customers are large businesses, we often get requests from individuals, small businesses, and non-profit organizations. We have a team of translators and proofreaders who are experienced in different areas of expertise in fields subjects. We only employ native translators who possess excellent writing skills and are familiar with the terminology used in their respective fields. We help you translate the critical information into the language of your choice, associated with verbatim into another country, the native language of which you do not know.
              </p>
              <a href="#" class="text-red-500 hover:text-red-600 font-medium">Read more</a>
            </div>

            <!-- Transcription Services -->
            <div class="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 class="text-2xl font-bold text-red-500 mb-4">Transcription Services</h2>
              <p class="text-gray-700 leading-relaxed mb-4">
                We offer transcription services in different areas such as Legal, Medical, Insurance, Entertainment, Corporate, Government, and Education sectors. We provide an accurate and on-time transcription service, simply upload your audio/video files onto our server and we will do the rest.
              </p>
              <a href="#" class="text-red-500 hover:text-red-600 font-medium">Read more</a>
            </div>

            <!-- Interpretation Services -->
            <div class="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 class="text-2xl font-bold text-red-500 mb-4">Interpretation Services</h2>
              <p class="text-gray-700 leading-relaxed mb-4">
                KnowledgeTrans offers immediate on-demand access to interpreters over the telephone in over 150 languages, 24/7/365.
              </p>
              <p class="text-gray-700 leading-relaxed mb-4">
                Call in any language, anytime, different time zones and availability. We have been handling face-to-face, as well as over phone, from large and small customers, from government agencies and private companies, from medical facilities and insurance carriers, from 911 dispatchers and emergency room staff.
              </p>
              <a href="#" class="text-red-500 hover:text-red-600 font-medium">Read more</a>
            </div>

            <!-- Audio Visual Services -->
            <div class="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h2 class="text-2xl font-bold text-red-500 mb-4">Audio Visual Services</h2>
              <p class="text-gray-700 leading-relaxed mb-4">
                KnowledgeTrans provides audio visual services such as subtitling / captioning and voiceover services in different international and Indian languages in order to break language barriers and reach out to a large non-English populace. We have a team of language professionals who are experienced in providing quality visual services such as subtitling and voiceovers in different languages. Having expertise in over 25 languages (the list is increasing), we are capable of providing audio visual services in various languages, dialects and accents.
              </p>
              <a href="#" class="text-red-500 hover:text-red-600 font-medium">Read more</a>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <!-- About KnowledgeTrans -->
            <div class="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 class="text-lg font-bold text-gray-900 mb-4">ABOUT KNOWLEDGETRANS</h3>
              <p class="text-gray-700 text-sm leading-relaxed">
                KnowledgeTrans, a division of Coral Knowledge Services Pvt. Ltd., is a leading service provider of translation, e-learning, and localization engineering. Headquartered in New Delhi, India, we have five years of experience in executing full life cycle projects in over 100 languages.
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
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="bg-red-500 text-white py-12">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-2xl font-bold mb-4">Need Professional Translation Services?</h2>
        <p class="text-lg mb-6 opacity-90">
          Contact us today for a free quote and consultation.
        </p>
        <button class="bg-white text-red-500 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          GET QUOTE
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
            <h4 class="font-semibold mb-4">Services</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">Translation</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Transcription</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Interpretation</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Audio Visual</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Industries</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">Legal</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Medical</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Technical</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Business</a></li>
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
  // Handle newsletter subscription
  console.log('Newsletter subscription:', newsletterEmail.value)
  // Add your newsletter subscription logic here
  newsletterEmail.value = ''
  alert('Thank you for subscribing to our newsletter!')
}

useHead({
  title: 'Services - KnowledgeTrans Translation Services',
  meta: [
    { name: 'description', content: 'Professional translation, transcription, interpretation, and audio-visual services in over 100 languages. Expert language solutions for businesses and individuals.' }
  ]
})
</script>