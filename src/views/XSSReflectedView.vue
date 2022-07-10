<template>
  <div>Introduce your search:</div>
  <input class="search-bar" type="text" v-model="query" />
  <!-- try with:  <img src="asdasdas" onerror="alert(document.cookie.split(';'))"> -->
  <button class="search-button" @click="search">search</button>
</template>

<script>
export default {
  data: () => ({
    query: ''
  }),
  methods: {
    search() {
      this.$router.push({
        path: '/search',
        query: {
          query: this.query
        }
      })
    }
  }
}
</script>

<style>
.search-bar {
  font-size: 16px;
  border-radius: 20px;
  padding: 4px;
  margin-top: 1rem;
  border-color: transparent;
}
.search-button {
  font-size: 14px;
  padding: 4px 10px 4px 10px;
  margin-left: 8px;
  background-color: rgba(71, 255, 141, 0.637);
  border-color: transparent;
  border-radius: 20px;
  color: white;
}
.search-button:hover {
  cursor: pointer;
  background-color: rgba(19, 126, 60, 0.637);
}
</style>
