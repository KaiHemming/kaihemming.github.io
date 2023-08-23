<template>
  <div v-if="$route.fullPath!='/'">
    <router-link class="homeButton" to="/">Home</router-link> <br/>
  </div>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
  @import './css/App.css';
</style>
