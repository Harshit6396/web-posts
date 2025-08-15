<script setup lang="ts">
import { usePostsStore } from '@/stores/posts'
import { storeToRefs } from 'pinia'

const postsStore = usePostsStore()
const { posts } = storeToRefs(postsStore)

onMounted(async () => {
  await postsStore.fetchPosts()
})
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Posts</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <NuxtLink
          v-for="post in posts"
          :key="post.id"
          :to="`/posts/${post.id}`"
          class="p-4 border rounded hover:bg-gray-100 transition"
      >
        <h2 class="font-semibold">{{ post.title }}</h2>
        <p class="text-gray-600">{{ post.body.substring(0, 50) }}...</p>
      </NuxtLink>
    </div>
  </div>
</template>
