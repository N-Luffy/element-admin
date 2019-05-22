<template>
  <div class="container">
    <h1>{{ msg }} {{ dev }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        dev: process.env.NODE_ENV
      }
    }
  }
</script>

<style scoped>
  .container {
    margin: 10px 20px 0;
  }
</style>
