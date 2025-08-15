import { defineStore } from 'pinia'

export const usePostsStore = defineStore('posts', {
    state: () => ({
        posts: [] as Array<any>,
        lastFetched: 0
    }),

    actions: {
        async fetchPosts() {
            const now = Date.now()
            // cache for 15 minutes
            if (this.posts.length && now - this.lastFetched < 15 * 60 * 1000) return this.posts

            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            this.posts = await res.json()
            this.lastFetched = now
        },

        async fetchPostById(id: number) {
            // check if post exists in cached posts
            const existing = this.posts.find(p => p.id === id)
            if (existing) return existing

            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            const post = await res.json()
            return post
        }
    }
})
