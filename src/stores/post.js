import { defineStore } from 'pinia'

export const usePostStore = defineStore({
  id: 'post',
  state: () => ({
    posts: [
      {
        name: 'demo_1',
        content: `
        <div class="post">
          <h2>Pinia a good friend</h2>
          <p>
            Today we going to learn about <strong>pinia</strong>!
          </p>
        <div>
        `
      },
      {
        name: 'demo_1',
        content: `
        <div class="post">
          <h2>Breaking the Vue Store</h2>
          <p>
            For a long time vuex was a powerful tool for data storage...
          </p>
          <br>
          <div class="center">
            <img src="https://s3.amazonaws.com/coursetro/posts/144-full.png" width="30%">
          </div>
        <div>
        `
      }
    ]
  }),
  getters: {
    getPosts: (state) => state.posts
  },
  actions: {
    addPost(name, content) {
      this.posts.push({
        name,
        content: `
        <div class="post">
          ${content}
        </div>
        `
      })
    }
  }
})
