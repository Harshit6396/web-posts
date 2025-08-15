<template>
  <fixedheader />
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-red-500 text-white text-center py-4">
      <h1 class="text-xl font-semibold">JOIN OUR TEAM</h1>
    </div>

    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Main Form -->
        <div class="lg:col-span-2">
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <p class="text-gray-600 mb-4">
              If translation is your cup of tea and you are looking for avenues to exhibit your translation talent, you can partner with us at Outsourcing Translation. We work with true professionals who have passion for languages and translation.
            </p>
            <p class="text-gray-600 mb-6">
              If you are an experienced translator / translation agency that is dedicated to providing high-quality translation services, we would definitely like to know you better before we start working together. Please fill this form below and we will get back to you within a couple of days.
            </p>

            <form @submit.prevent="submitForm" class="space-y-6">
              <!-- Name Fields -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                  <input
                      v-model="form.firstName"
                      type="text"
                      required
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                  <input
                      v-model="form.lastName"
                      type="text"
                      required
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>

              <!-- Email and Phone -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Email ID*</label>
                  <input
                      v-model="form.email"
                      type="email"
                      required
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                      v-model="form.phone"
                      type="tel"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>

              <!-- Profile Detail -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Profile Detail</label>
                <p class="text-xs text-gray-500 mb-2">(Min, Max, and other details in the text area below)</p>
                <textarea
                    v-model="form.profileDetail"
                    rows="6"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-vertical"
                ></textarea>
              </div>

              <!-- LinkedIn and Address -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">LinkedIn Profile URL</label>
                  <input
                      v-model="form.linkedinUrl"
                      type="url"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input
                      v-model="form.address"
                      type="text"
                      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>

              <!-- Certifications -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Certifications & Qualifications</label>
                <p class="text-xs text-gray-500 mb-2">(Min, Max, and other details)</p>
                <div class="flex items-center space-x-2">
                  <input
                      ref="fileInput"
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx,.jpg,.png"
                      @change="handleFileUpload"
                      class="hidden"
                  />
                  <button
                      type="button"
                      @click="$refs.fileInput.click()"
                      class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                  >
                    Choose file
                  </button>
                  <span class="text-sm text-gray-500">No file chosen</span>
                </div>
              </div>

              <!-- Language Skills -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Language Skills</label>
                <input
                    v-model="form.languageSkills"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <!-- Native Language -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Your Native Language</label>
                <input
                    v-model="form.nativeLanguage"
                    type="text"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>

              <!-- Captcha -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Captcha</label>
                <div class="flex items-center space-x-4">
                  <div class="bg-gray-100 px-4 py-2 rounded border font-mono text-lg">
                    {{ captcha.question }}
                  </div>
                  <input
                      v-model="form.captchaAnswer"
                      type="text"
                      required
                      class="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>

              <!-- Submit Button -->
              <div>
                <button
                    type="submit"
                    :disabled="isSubmitting"
                    class="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {{ isSubmitting ? 'SUBMITTING...' : 'APPLY NOW' }}
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <!-- About Section -->
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">ABOUT KNOWLEDGETRANS</h3>
            <p class="text-sm text-gray-600 leading-relaxed">
              KnowledgeTrans, a division of Coral Knowledge Services Pvt. Ltd., is a leading service provider of translation, e-learning, and localization engineering. Headquartered in New Delhi, India, we have four years of experience in executing full life cycle translation over than languages.
            </p>
          </div>

          <!-- Support Center -->
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">SUPPORT CENTER</h3>
            <div class="space-y-3 text-sm text-gray-600">
              <div>
                <p class="font-medium">Coral Knowledge Services Pvt. Ltd.</p>
                <p>Unit 213 B-3rd</p>
                <p>Spaze iTech Park</p>
                <p>Sohna Rd, Gurgaon</p>
                <p>New Delhi-122001, India</p>
              </div>
              <div>
                <p>Mobile: +91 9711141176,</p>
                <p class="ml-12">+91 9711141176</p>
              </div>
              <div>
                <p>Phone: +91 11 47656508</p>
              </div>
              <div>
                <p>Email:</p>
                <a href="mailto:info@outsourcingtranslation.in" class="text-red-500 hover:underline">
                  info@outsourcingtranslation.in
                </a>
              </div>
            </div>

            <!-- Social Media -->
            <div class="mt-6">
              <div class="bg-blue-600 text-white p-2 rounded text-center text-sm">
                <div class="flex items-center justify-center space-x-2">
                  <span>📘</span>
                  <span>Coral Knowl...</span>
                </div>
                <div class="text-xs mt-1">Follow Page</div>
                <div class="text-xs">2,000 likes</div>
              </div>
            </div>
          </div>

          <!-- Newsletter -->
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">Sign up for our newsletter!</h3>
            <form @submit.prevent="subscribeNewsletter" class="space-y-3">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Email Address:</label>
                <input
                    v-model="newsletter.email"
                    type="email"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <button
                  type="submit"
                  class="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition-colors"
              >
                SIGN UP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

// Form data
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  profileDetail: '',
  linkedinUrl: '',
  address: '',
  languageSkills: '',
  nativeLanguage: '',
  captchaAnswer: ''
})

// Newsletter form
const newsletter = reactive({
  email: ''
})

// Captcha
const captcha = reactive({
  question: '4 + 2 = ?',
  answer: 6
})

// Loading states
const isSubmitting = ref(false)

// Generate random captcha
const generateCaptcha = () => {
  const num1 = Math.floor(Math.random() * 10) + 1
  const num2 = Math.floor(Math.random() * 10) + 1
  captcha.question = `${num1} + ${num2} = ?`
  captcha.answer = num1 + num2
}

// Handle file upload
const handleFileUpload = (event) => {
  const files = event.target.files
  if (files.length > 0) {
    console.log('Files selected:', files)
    // Handle file upload logic here
  }
}

// Submit main form
const submitForm = async () => {
  // Validate captcha
  if (parseInt(form.captchaAnswer) !== captcha.answer) {
    alert('Incorrect captcha answer. Please try again.')
    generateCaptcha()
    form.captchaAnswer = ''
    return
  }

  isSubmitting.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    alert('Application submitted successfully!')

    // Reset form
    Object.keys(form).forEach(key => {
      form[key] = ''
    })
    generateCaptcha()

  } catch (error) {
    alert('Error submitting application. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}

// Subscribe to newsletter
const subscribeNewsletter = async () => {
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    alert('Successfully subscribed to newsletter!')
    newsletter.email = ''

  } catch (error) {
    alert('Error subscribing to newsletter. Please try again.')
  }
}

// Initialize captcha on mount
onMounted(() => {
  generateCaptcha()
})
</script>

<style scoped>
/* Additional custom styles if needed */
.container {
  max-width: 1200px;
}
</style>