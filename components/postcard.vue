<template>
  <div class="border p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer">
    <h2 class="text-xl font-semibold">{{ post.title }}</h2>
    <p class="text-gray-700 mt-2">{{ post.body }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

// Define the type for the post prop
interface Post {
  id: number
  title: string
  body: string
}

defineProps<{
  post: Post
}>()
</script>
