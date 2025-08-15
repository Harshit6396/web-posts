<template>
  <div class="max-w-2xl mx-auto mt-10">
    <h1 class="text-3xl font-bold mb-4 text-red-600">{{ post.title }}</h1>
    <p class="text-gray-700">{{ post.body }}</p>
    <NuxtLink to="/posts" class="mt-6 inline-block text-blue-500 hover:underline">← Back to posts</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { usePostsStore } from '@/stores/posts'

const route = useRoute()
const store = usePostsStore()

// Fetch the post by ID
const post = await store.fetchPostById(Number(route.params.id))
</script>

<style scoped>
/* Optional custom styles */
</style>
