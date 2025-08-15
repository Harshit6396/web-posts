<template>
<fixedheader />
  <!-- Page Title Banner (for Industries page) -->
  <section class="bg-red-500 text-white py-8">
    <div class="container mx-auto px-4">
      <h1 class="text-3xl font-bold text-center">INDUSTRIES</h1>
    </div>
  </section>
    <!-- Industries Content -->
    <main class="py-16">
      <div class="container mx-auto px-4">
        <!-- Engineering & Technical -->
        <div class="mb-16">
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div class="order-2 lg:order-1">
              <img
                  :src="'https://i.ibb.co/fz4rLBkW/Technology.png'"
                  alt="Legal Services"
                  class="w-full h-64 object-cover rounded-lg shadow-lg"
                  :style="{ width: '400px', height: '300px' }"
              />
            </div>
            <div class="order-1 lg:order-2">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Engineering & Technical</h2>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Our technical translation services cover engineering documentation, technical manuals, software localization, and specialized technical content. We work with certified technical translators who understand complex engineering terminology and industry standards across multiple disciplines.
              </p>
              <button class="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors font-semibold">
                READ MORE
              </button>
            </div>
          </div>
        </div>

        <!-- Legal -->
        <div class="mb-16">
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div class="order-2 lg:order-1">
              <img
                  :src="'https://i.ibb.co/xSxbGmWp/Legal.png'"
                  alt="Legal Services"
                  class="w-full h-64 object-cover rounded-lg shadow-lg"
                  :style="{ width: '400px', height: '300px' }"
              />
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Legal</h2>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Legal translation requires precision and expertise in legal terminology. Our certified legal translators handle contracts, court documents, patents, compliance materials, and other legal documentation with the highest accuracy and confidentiality standards.
              </p>
              <button class="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors font-semibold">
                READ MORE
              </button>
            </div>
          </div>
        </div>

        <!-- Healthcare -->
        <div class="mb-16">
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div class="order-2 lg:order-1">
              <img
                  :src="'https://i.ibb.co/Tx79sXm4/healthcare2.png'"
                  alt="Legal Services"
                  class="w-full h-64 object-cover rounded-lg shadow-lg"
                  :style="{ width: '400px', height: '300px' }"
              />
            </div>
            <div class="order-1 lg:order-2">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Healthcare</h2>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Medical translation services for pharmaceutical companies, medical device manufacturers, hospitals, and healthcare organizations. Our medical translators are specialized in clinical research, regulatory submissions, patient information, and medical device documentation.
              </p>
              <button class="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors font-semibold">
                READ MORE
              </button>
            </div>
          </div>
        </div>

        <!-- Education -->
        <div class="mb-16">
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div class="order-2 lg:order-1">
            <img
                :src="'https://i.ibb.co/d4kHXhqg/education.png'"
                alt="Legal Services"
                class="w-full h-64 object-cover rounded-lg shadow-lg"
                :style="{ width: '400px', height: '300px' }"
            />
          </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Education</h2>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Educational content translation and e-learning localization services. We help educational institutions, e-learning platforms, and training organizations reach global audiences through accurate translation of curricula, training materials, and educational resources.
              </p>
              <button class="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors font-semibold">
                READ MORE
              </button>
            </div>
          </div>
        </div>

        <!-- Marketing & Advertising -->
        <div class="mb-16">
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div class="order-2 lg:order-1">
              <img
                  :src="'https://i.ibb.co/cSLmT2mn/Marketing-Advertising.png'"
                  alt="Legal Services"
                  class="w-full h-64 object-cover rounded-lg shadow-lg"
                  :style="{ width: '400px', height: '300px' }"
              />
            </div>
            <div class="order-1 lg:order-2">
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Marketing & Advertising</h2>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Creative translation and transcreation services for marketing campaigns, advertising materials, brand messaging, and promotional content. We ensure your brand voice resonates authentically across different cultures and markets while maintaining impact and engagement.
              </p>
              <button class="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors font-semibold">
                READ MORE
              </button>
            </div>
          </div>
        </div>

        <!-- Consumer Goods & Retail -->
        <div class="mb-16">
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div class="order-2 lg:order-1">
              <img
                  :src="'https://i.ibb.co/tM5Vg0sQ/Consumer-Goods-Retail2.png'"
                  alt="Legal Services"
                  class="w-full h-64 object-cover rounded-lg shadow-lg"
                  :style="{ width: '400px', height: '300px' }"
              />
            </div>
            <div>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Consumer Goods & Retail</h2>
              <p class="text-gray-600 mb-6 leading-relaxed">
                Product descriptions, packaging translation, user manuals, and retail content localization. We help consumer goods companies and retailers expand into new markets with culturally appropriate and compelling product information that drives sales and customer satisfaction.
              </p>
              <button class="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors font-semibold">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Call to Action Section -->
    <section class="bg-red-500 text-white py-12">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-2xl font-bold mb-4">Ready to Expand Your Business Globally?</h2>
        <p class="text-lg mb-6 opacity-90">
          Get professional translation services tailored to your industry needs.
        </p>
        <button class="bg-white text-red-500 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
          GET QUOTE
        </button>
      </div>
    </section>

</template>

<script setup>
import PlaceholderImage from '~/components/PlaceholderImage.vue'
import { useHead } from '#app'

useHead({
  title: 'Industries - KnowledgeTrans Translation Services',
  meta: [
    { name: 'description', content: 'Professional translation services across multiple industries including Engineering, Legal, Healthcare, Education, Marketing, and Consumer Goods.' }
  ]
})
</script>