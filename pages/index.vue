<template>
  <div class="max-w-4xl mx-auto mt-10">
    <h1 class="text-10xl font-bold text-center text-red-600 mb-6 bg-gray-200 p-4 rounded-lg">
      Posts
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <postcard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { usePostsStore } from '@/stores/posts'
import postcard from '@/components/postcard.vue'
import { storeToRefs } from 'pinia'

const postsStore = usePostsStore()
const { posts } = storeToRefs(postsStore)

// Fetch posts when the component is mounted
await postsStore.fetchPosts()
</script>

<style scoped>
/* Optional custom styles */
</style>
