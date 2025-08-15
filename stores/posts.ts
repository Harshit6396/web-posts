import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
    state: () => ({
        posts: [] as Array<{ id: number; title: string; body: string }>,
    }),
    actions: {
        async fetchPosts() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            this.posts = await response.json()
        },
    },
})
