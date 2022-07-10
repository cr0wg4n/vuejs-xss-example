<template>
  <div>
    <h1>XSS Examples with Vue</h1>
    <router-link class="url" to="/stored">Stored Example</router-link>
    <br />
    <router-link class="url" to="/reflected">Reflected Example</router-link>
  </div>
</template>

<style scoped>
.url {
  color: rgb(23, 110, 190);
  font-size: 1.2rem;
}
</style>