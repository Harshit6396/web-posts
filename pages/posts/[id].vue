<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const postId = route.params.id

const post = ref<{ id: number; title: string; body: string } | null>(null)

onMounted(async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  post.value = await response.json()
})
</script>

<template>
  <div class="p-6">
    <NuxtLink href="/posts" class="text-blue-500 underline mb-4 inline-block">← Back to Posts</NuxtLink>
    <div v-if="post">
      <h1 class="text-2xl font-bold mb-2">{{ post.title }}</h1>
      <p class="text-gray-700">{{ post.body }}</p>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>
