<template>
  <div class="about">
    <h2 class="result">
      result for " <b id="result">{{ querySearch }}</b> "
    </h2>
    <br>
    <br>
    Nothing was found ...
  </div>
</template>

<script>
export default {
  data: () => ({
    querySearch: ''
  }),
  mounted() {
    const { query } = this.$route.query
    this.querySearch = query
  }
}
</script>
