<template>
  <div class="about">
    <h2 class="result">result for " <b id="result"></b> "</h2>
    <br>
    <br>
    Nothing was found ...
  </div>
</template>

<script>
export default {
  mounted() {
    const { query } = this.$route.query
    document.getElementById('result').innerHTML = query
  }
}
</script>
