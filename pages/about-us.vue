<template>
  <fixedheader />
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-red-500 text-white py-4">
      <div class="container mx-auto px-4">
        <h1 class="text-right text-sm font-medium tracking-wider">ABOUT US</h1>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Content Area -->
        <div class="lg:col-span-3 space-y-8">
          <!-- About Our Process Section -->
          <section class="bg-white p-6 rounded-lg shadow-sm">
            <h2 class="text-lg font-semibold text-gray-800 mb-4">About Our Process</h2>
            <div class="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                This article lists the ten languages considered most likely to be the next major language.
              </p>
              <p>
                This list is the world's languages is considered one of the largest languages.
              </p>
              <p>
                Many of these languages are used in the business world, and they are also the currency of the translation.
              </p>
            </div>
          </section>

          <!-- Services Section -->
          <section class="bg-gray-800 text-white p-6 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-sm font-medium mb-4 text-gray-300">SERVICES</h3>
                <ul class="space-y-2 text-xs">
                  <li>WEBSITE DEVELOPMENT</li>
                  <li>MOBILE APP DEVELOPMENT</li>
                  <li>QUALITY DIGITAL TRANSLATION</li>
                  <li>PRINT LAYOUTS</li>
                </ul>
              </div>
              <div class="text-xs leading-relaxed text-gray-300">
                <p class="mb-4">
                  Quality Translation is a leading UK "language handling" consultancy. Make sure you have the right content to ensure your clients or "language-focused" handling is right. We have more than 5 years in "Quality Translation" practice, from high-end commercial projects to commercial business translation and localization in the UK.
                </p>
                <p>
                  Quality Translation is a leading UK "language handling" consultancy. Make sure you have the right content to ensure your clients or "language-focused" handling is right. We have more than 5 years in "Quality Translation" practice, from high-end commercial projects to commercial business translation and localization in the UK.
                </p>
              </div>
            </div>
          </section>

          <!-- International Collaboration Section -->
          <section class="bg-white p-6 rounded-lg shadow-sm">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                    src="https://i.ibb.co/vCnFQMN1/why-us-small.jpg"
                    alt="International collaboration with flags from different countries"
                    class="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div class="space-y-4">
                <h3 class="text-lg font-semibold text-gray-800">Why Us?</h3>
                <ul class="space-y-2 text-sm text-gray-600">
                  <li>• Competitive pricing strategy</li>
                  <li>• Content resource utilization</li>
                  <li>• Flexible tools for translation QA</li>
                  <li>• Quality management systems</li>
                  <li>• Localization management</li>
                  <li>• Cultural knowledge management</li>
                  <li>• Dedicated pool of translators</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Bottom Text Section -->
          <section class="text-xs text-gray-500 leading-relaxed space-y-2">
            <p>
              Quality Translation is a leading UK "language handling" consultancy. Make sure you have the right content to ensure your clients or "language-focused" handling is right. We have more than 5 years in "Quality Translation" practice, from high-end commercial projects to commercial business translation and localization in the UK.
            </p>
            <p>
              Quality Translation is a leading UK "language handling" consultancy. Make sure you have the right content to ensure your clients or "language-focused" handling is right. We have more than 5 years in "Quality Translation" practice, from high-end commercial projects to commercial business translation and localization in the UK.
            </p>
          </section>
        </div>

        <!-- Sidebar -->
        <aside class="lg:col-span-1">
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <h3 class="text-sm font-semibold text-gray-800 mb-4">Our Skills</h3>
            <div class="space-y-4">
              <!-- Skill bars -->
              <div>
                <div class="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Planning</span>
                  <span>95%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-1">
                  <div class="bg-blue-500 h-1 rounded-full" style="width: 95%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Consulting</span>
                  <span>80%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-1">
                  <div class="bg-blue-500 h-1 rounded-full" style="width: 80%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Management</span>
                  <span>90%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-1">
                  <div class="bg-blue-500 h-1 rounded-full" style="width: 90%"></div>
                </div>
              </div>

              <div>
                <div class="flex justify-between text-xs text-gray-600 mb-1">
                  <span>Development</span>
                  <span>75%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-1">
                  <div class="bg-blue-500 h-1 rounded-full" style="width: 75%"></div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-red-500 text-white py-8 mt-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
          <div>
            <h4 class="font-semibold mb-3">COMPANY</h4>
            <ul class="space-y-1 text-gray-200">
              <li><a href="#" class="hover:text-white">About Us</a></li>
              <li><a href="#" class="hover:text-white">Our Team</a></li>
              <li><a href="#" class="hover:text-white">Careers</a></li>
              <li><a href="#" class="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold mb-3">SERVICES</h4>
            <ul class="space-y-1 text-gray-200">
              <li><a href="#" class="hover:text-white">Translation</a></li>
              <li><a href="#" class="hover:text-white">Localization</a></li>
              <li><a href="#" class="hover:text-white">Consulting</a></li>
              <li><a href="#" class="hover:text-white">Quality Assurance</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold mb-3">RESOURCES</h4>
            <ul class="space-y-1 text-gray-200">
              <li><a href="#" class="hover:text-white">Blog</a></li>
              <li><a href="#" class="hover:text-white">Case Studies</a></li>
              <li><a href="#" class="hover:text-white">White Papers</a></li>
              <li><a href="#" class="hover:text-white">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold mb-3">SUPPORT</h4>
            <ul class="space-y-1 text-gray-200">
              <li><a href="#" class="hover:text-white">Help Center</a></li>
              <li><a href="#" class="hover:text-white">Documentation</a></li>
              <li><a href="#" class="hover:text-white">API Reference</a></li>
              <li><a href="#" class="hover:text-white">Status</a></li>
            </ul>
          </div>
        </div>

        <div class="border-t border-red-400 mt-8 pt-6 text-center text-xs text-gray-200">
          <p>&copy; 2024 Quality Translation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Set page meta
useHead({
  title: 'About Us - Quality Translation',
  meta: [
    { name: 'description', content: 'Learn about Quality Translation, a leading UK language handling consultancy with over 5 years of experience in translation and localization services.' }
  ]
})
</script>

<style scoped>
/* Additional custom styles if needed */
</style>