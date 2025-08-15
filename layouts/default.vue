<template>
  <div class="min-h-screen bg-white">
    <!-- Top Contact Bar -->
    <div class="bg-gray-900 text-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between items-center py-2">
          <!-- Address -->
          <div class="mb-2 md:mb-0">
            <span class="text-gray-300">
              Unit 215 & 309, Aggarwal Prestige Mall, Road No. 44, Pitampura, New Delhi-110034
            </span>
          </div>

          <!-- Contact Info & Social Links -->
          <div class="flex items-center space-x-4">
            <!-- Phone -->
            <div class="flex items-center space-x-1">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>+911147006458</span>
            </div>

            <!-- Email -->
            <div class="flex items-center space-x-1">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>info@coralknowledgeservices.in</span>
            </div>

            <!-- Social Links -->
            <div class="flex items-center space-x-2 ml-4">
              <!-- Facebook -->
              <a href="#" class="text-gray-300 hover:text-white transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <!-- Twitter -->
              <a href="#" class="text-gray-300 hover:text-white transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>

              <!-- LinkedIn -->
              <a href="#" class="text-gray-300 hover:text-white transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v11.452zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Navigation -->
    <header class="bg-white shadow-sm border-b">
      <div class="container mx-auto px-4">
        <nav class="flex items-center justify-between py-4">
          <!-- Logo -->
          <NuxtLink to="/" class="text-3xl font-bold">
            <span class="text-red-500">KNOWLEDGE</span><span class="text-gray-900">TRANS</span>
          </NuxtLink>

          <!-- Desktop Navigation -->
          <ul class="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-700 uppercase tracking-wide">
            <li class="relative group">
              <NuxtLink
                  to="/services"
                  class="flex items-center hover:text-red-500 transition-colors py-2"
                  :class="{ 'text-red-500': $route.path.startsWith('/services') }"
              >
                SERVICES
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink
                  to="/industries"
                  class="hover:text-red-500 transition-colors py-2"
                  :class="{ 'text-red-500': $route.path === '/industries' }"
              >
                INDUSTRIES
              </NuxtLink>
            </li>

            <li>
              <NuxtLink
                  to="/languages"
                  class="hover:text-red-500 transition-colors py-2"
                  :class="{ 'text-red-500': $route.path === '/languages' }"
              >
                LANGUAGES
              </NuxtLink>
            </li>

            <li class="relative group">
              <NuxtLink
                  to="/company"
                  class="flex items-center hover:text-red-500 transition-colors py-2"
                  :class="{ 'text-red-500': $route.path.startsWith('/company') }"
              >
                COMPANY
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </NuxtLink>
            </li>

            <li>
              <NuxtLink
                  to="/blog"
                  class="hover:text-red-500 transition-colors py-2"
                  :class="{ 'text-red-500': $route.path === '/blog' }"
              >
                BLOG
              </NuxtLink>
            </li>

            <li>
              <NuxtLink
                  to="/contact"
                  class="hover:text-red-500 transition-colors py-2"
                  :class="{ 'text-red-500': $route.path === '/contact' }"
              >
                CONTACT
              </NuxtLink>
            </li>
          </ul>

          <!-- Mobile Menu Button -->
          <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="lg:hidden text-gray-700 hover:text-red-500 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                  v-if="!mobileMenuOpen"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
              ></path>
              <path
                  v-else
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </nav>

        <!-- Mobile Navigation -->
        <div
            v-show="mobileMenuOpen"
            class="lg:hidden border-t bg-white py-4"
        >
          <ul class="space-y-4 text-sm font-medium text-gray-700 uppercase tracking-wide">
            <li>
              <NuxtLink
                  to="/services"
                  class="block hover:text-red-500 transition-colors"
                  :class="{ 'text-red-500': $route.path.startsWith('/services') }"
                  @click="mobileMenuOpen = false"
              >
                SERVICES
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                  to="/industries"
                  class="block hover:text-red-500 transition-colors"
                  :class="{ 'text-red-500': $route.path === '/industries' }"
                  @click="mobileMenuOpen = false"
              >
                INDUSTRIES
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                  to="/languages"
                  class="block hover:text-red-500 transition-colors"
                  :class="{ 'text-red-500': $route.path === '/languages' }"
                  @click="mobileMenuOpen = false"
              >
                LANGUAGES
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                  to="/company"
                  class="block hover:text-red-500 transition-colors"
                  :class="{ 'text-red-500': $route.path.startsWith('/company') }"
                  @click="mobileMenuOpen = false"
              >
                COMPANY
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                  to="/blog"
                  class="block hover:text-red-500 transition-colors"
                  :class="{ 'text-red-500': $route.path === '/blog' }"
                  @click="mobileMenuOpen = false"
              >
                BLOG
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                  to="/contact"
                  class="block hover:text-red-500 transition-colors"
                  :class="{ 'text-red-500': $route.path === '/contact' }"
                  @click="mobileMenuOpen = false"
              >
                CONTACT
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <!-- Page Content -->
    <main>
      <slot />
    </main>

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
              <li><NuxtLink to="/services/translation" class="hover:text-white transition-colors">Translation</NuxtLink></li>
              <li><NuxtLink to="/services/localization" class="hover:text-white transition-colors">Localization</NuxtLink></li>
              <li><NuxtLink to="/services/transcreation" class="hover:text-white transition-colors">Transcreation</NuxtLink></li>
              <li><NuxtLink to="/services/elearning" class="hover:text-white transition-colors">E-Learning</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Industries</h4>
            <ul class="space-y-2 text-sm text-gray-400">
              <li><NuxtLink to="/industries#engineering" class="hover:text-white transition-colors">Engineering & Technical</NuxtLink></li>
              <li><NuxtLink to="/industries#legal" class="hover:text-white transition-colors">Legal</NuxtLink></li>
              <li><NuxtLink to="/industries#healthcare" class="hover:text-white transition-colors">Healthcare</NuxtLink></li>
              <li><NuxtLink to="/industries#education" class="hover:text-white transition-colors">Education</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Contact</h4>
            <div class="space-y-2 text-sm text-gray-400">
              <p>Unit 215 & 309, Aggarwal Prestige Mall</p>
              <p>Road No. 44, Pitampura</p>
              <p>New Delhi-110034</p>
              <p>+911147006458</p>
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
import { ref, watch } from 'vue'
import { useRoute } from '#app'

const mobileMenuOpen = ref(false)
const route = useRoute()

// Close mobile menu when route changes
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>