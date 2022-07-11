<template>
  <div class="posts">
    <textarea class="input" type="text" v-model="newPost" rows="20"></textarea>
    <button class="button" @click="addPost">Publish</button>
    <h1 class="title">Feed:</h1>
    <br>
    <div v-for="post in posts" :key="post.name">
      <div v-html="$sanitize(post.content)" class="post"></div>
    </div>
  </div>
</template>

<script>
import { usePostStore } from '../stores/post'
export default {
  data: () => ({
    posts: [],
    newPost: `
<h2>Demo title</h2>
<h3>Demo subtitle</h3>
<p>
  paragraph....
</p>
<img src="a2e2s" onerror="alert(document.cookie.split(';'))">
    `
  }),
  mounted() {
    const postStore = usePostStore()
    this.posts = postStore.posts
  },
  methods: {
    addPost() {
      const postStore = usePostStore()
      postStore.addPost(Math.random.toString(), this.newPost)
    }
  }
}
</script>

<style>
.posts .title {
  margin-top: 6rem;
}
.posts textarea {
  width: 100%;
}
.post {
  border: 1px solid white;
  padding: 2rem;
  margin-bottom: 3rem;
}
.post .center {
  text-align: center;
}
.posts .button {
  font-size: 14px;
  padding: 4px 10px 4px 10px;
  margin: 8px 0px 8px 8px;
  background-color: rgba(71, 255, 141, 0.637);
  border-color: transparent;
  border-radius: 20px;
  color: white;
  float: right;
}
.posts .button:hover {
  cursor: pointer;
  background-color: rgba(19, 126, 60, 0.637);
}
</style>
