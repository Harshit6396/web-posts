<!-- components/Footer.vue -->
<template>
  <div class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div class="text-2xl font-bold mb-4">
            <span class="text-red-500">KNOWLEDGE</span><span>TRANS</span>
          </div>
          <p class="text-gray-400 text-sm">
            Professional language services for global communication.
          </p>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Services</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><NuxtLink to="/translation" class="hover:text-white">Translation</NuxtLink></li>
            <li><NuxtLink to="/interpretation" class="hover:text-white">Interpretation</NuxtLink></li>
            <li><NuxtLink to="/transcription" class="hover:text-white">Transcription</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Company</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><NuxtLink to="/about-us" class="hover:text-white">About Us</NuxtLink></li>
            <li><NuxtLink to="/join-our-team" class="hover:text-white">Careers</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-white">Contact</NuxtLink></li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold mb-4">Contact Info</h4>
          <div class="text-sm text-gray-400 space-y-2">
            <p>+911147006458</p>
            <p>info@coralknowledgeservices.in</p>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">

        <p class="mt-2">&copy; 2016 Your Company. All rights reserved.</p>
        <ul class="flex justify-center gap-4 mt-2">
          <li><a href="#" class="hover:text-white">Privacy Policy</a></li>
          <li><a href="#" class="hover:text-white">Terms of Service</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
}

.footer-links {
  list-style: none;
  display: flex;
  gap: 20px;
  justify-content: center;
}

.footer-links a {
  color: white;
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}
</style>
