<template>
  <NuxtLink :to="`/posts/${post.id}`" class="block p-4 border rounded-lg shadow-lg hover:shadow-xl transition">
    <h2 class="text-xl font-bold text-blue-600 mb-2">{{ post.title }}</h2>
    <p class="text-gray-700">{{ post.body.substring(0, 100) }}...</p>
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps<{
  post: { id: number; title: string; body: string }
}>()
</script>

<style scoped>
/* TailwindCSS handles styling, but you can add custom styles here */
</style>
