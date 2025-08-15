<template>
  <div>
    <fixedheader />

    <!-- Page Title Banner -->
    <section class="bg-red-500 text-white py-8">
      <div class="container mx-auto px-4">
        <h1 class="text-3xl font-bold text-center">LANGUAGES</h1>
      </div>
    </section>

    <!-- World Map Section -->
    <section class="py-12 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-8">
          <img
              src="https://i.ibb.co/dw5CwrQV/world-red-1480x475.jpg"
              alt="World Map with Languages"
              class="w-full max-w-6xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <!-- Introduction -->
        <div class="bg-white p-8 rounded-lg shadow-sm mb-8 max-w-8xl mx-auto">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Language Translation Agency</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            KnowledgeTrans assists clients with language translation for their various needs. We have a team of trained professionals who form the core of our Language Translation Services. Our Language translation team is trained to provide translation in most of the languages spoken globally.
          </p>
          <p class="text-gray-700 leading-relaxed">
            If the language or dialect you require is not listed below, please contact us at <a href="mailto:info@coralknowledgeservices.in" class="text-red-500 hover:text-red-600">info@coralknowledgeservices.in</a>.
          </p>
        </div>

        <!-- African Languages -->
        <div class="bg-white p-8 rounded-lg shadow-sm mb-8">
          <h3 class="text-xl font-bold text-gray-900 mb-6">African Languages</h3>
          <div class="flex flex-wrap gap-3">
            <span v-for="language in africanLanguages" :key="language"
                  class="px-4 py-2 text-sm font-medium rounded"
                  :class="getLanguageClass()">
              {{ language }}
            </span>
          </div>
        </div>

        <!-- Asia Pacific Languages -->
        <div class="bg-white p-8 rounded-lg shadow-sm mb-8">
          <h3 class="text-xl font-bold text-gray-900 mb-6">Asia Pacific Languages</h3>
          <div class="flex flex-wrap gap-3">
            <span v-for="language in asiaPacificLanguages" :key="language"
                  class="px-4 py-2 text-sm font-medium rounded"
                  :class="getLanguageClass()">
              {{ language }}
            </span>
          </div>
        </div>

        <!-- European Languages -->
        <div class="bg-white p-8 rounded-lg shadow-sm mb-8">
          <h3 class="text-xl font-bold text-gray-900 mb-6">European Languages</h3>
          <div class="flex flex-wrap gap-3">
            <span v-for="language in europeanLanguages" :key="language"
                  class="px-4 py-2 text-sm font-medium rounded"
                  :class="getLanguageClass()">
              {{ language }}
            </span>
          </div>
        </div>

        <!-- Indian Languages -->
        <div class="bg-white p-8 rounded-lg shadow-sm mb-8">
          <h3 class="text-xl font-bold text-gray-900 mb-6">Indian Languages</h3>
          <div class="flex flex-wrap gap-3">
            <span v-for="language in indianLanguages" :key="language"
                  class="px-4 py-2 text-sm font-medium rounded"
                  :class="getLanguageClass()">
              {{ language }}
            </span>
          </div>
        </div>

        <!-- Middle Eastern Languages -->
        <div class="bg-white p-8 rounded-lg shadow-sm mb-8">
          <h3 class="text-xl font-bold text-gray-900 mb-6">Middle Eastern Languages</h3>
          <div class="flex flex-wrap gap-3">
            <span v-for="language in middleEasternLanguages" :key="language"
                  class="px-4 py-2 text-sm font-medium rounded"
                  :class="getLanguageClass()">
              {{ language }}
            </span>
          </div>
        </div>

        <!-- Language Statistics Section -->
        <div class="bg-white p-8 rounded-lg shadow-sm mb-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">Our Language Coverage</h3>
          <div class="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div class="text-4xl font-bold text-red-500 mb-2">100+</div>
              <div class="text-gray-700 font-medium">Total Languages</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-red-500 mb-2">500+</div>
              <div class="text-gray-700 font-medium">Native Translators</div>
            </div>
            <div>
              <div class="text-4xl font-bold text-red-500 mb-2">50+</div>
              <div class="text-gray-700 font-medium">Countries Served</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="bg-red-500 text-white py-12">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-2xl font-bold mb-4">Need Translation in Your Language?</h2>
        <p class="text-lg mb-6 opacity-90">
          Contact us today for professional translation services in over 100 languages.
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
            <h4 class="font-semibold mb-4">Popular Languages</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">Spanish</a></li>
              <li><a href="#" class="hover:text-white transition-colors">French</a></li>
              <li><a href="#" class="hover:text-white transition-colors">German</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Chinese</a></li>
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
import fixedheader from '~/components/fixedheader.vue'
import { useHead } from '#app'

// Language arrays
const africanLanguages = [
  'AFRIKAANS', 'AMHARIC', 'SWAHILI', 'YORUBA', 'ZULU'
]

const asiaPacificLanguages = [
  'CHINESE (SIMPLIFIED)', 'CHINESE (TRADITIONAL)', 'INDONESIAN BAHASA', 'JAPANESE',
  'KOREAN', 'MALAY', 'CHINESE', 'BURMESE', 'HINDI', 'VIETNAMESE'
]

const europeanLanguages = [
  'ALBANIAN', 'ARMENIAN', 'BELARUSIAN', 'BOSNIAN', 'BULGARIAN', 'CROATIAN',
  'CZECK', 'DANISH', 'DUTCH', 'ESTONIAN', 'FINNISH', 'FRENCH', 'GERMAN',
  'GREEK', 'HUNGARIAN', 'ICELANDIC', 'ITALIAN', 'LATVIAN', 'LITHUANIAN',
  'MACEDONIAN', 'NORWEGIAN', 'POLISH', 'PORTUGUESE', 'ROMANIAN', 'RUSSIAN',
  'SERBIAN', 'SLOVAK', 'SLOVENIAN', 'SPANISH', 'SWEDISH', 'TURKISH', 'UKRAINIAN'
]

const indianLanguages = [
  'ASSAMESE', 'BENGALI', 'GUJARATI', 'HINDI', 'KANNADA', 'KONKANI',
  'MALAYALAM', 'MARATHI', 'ORIYA', 'PUNJABI', 'SANSKRIT', 'TAMIL', 'TELUGU'
]

const middleEasternLanguages = [
  'ARABIC', 'AZERBAIJANI', 'FARSI', 'HEBREW', 'KURDISH', 'TURKISH', 'URDU', 'YIDDISH'
]

// Function to randomly assign colors to language tags
const getLanguageClass = () => {
  const classes = [
    'bg-red-500 text-white',
    'bg-gray-700 text-white',
    'bg-red-600 text-white',
    'bg-gray-600 text-white'
  ]
  return classes[Math.floor(Math.random() * classes.length)]
}

useHead({
  title: 'Languages - KnowledgeTrans Translation Services',
  meta: [
    { name: 'description', content: 'Professional translation services in over 100 languages including European, Asian, African, Indian, and Middle Eastern languages. Native translators available.' }
  ]
})
</script>