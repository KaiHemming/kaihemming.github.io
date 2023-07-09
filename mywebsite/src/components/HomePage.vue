<template>
    <div class="wrapper">
      <div class="information">
        <h1 class="title">Title Page!</h1>
        <h2 class="subtitle">Placeholder text.</h2>
      </div>
        <div class="options">
          <router-link to="/photography">Photography</router-link> <br/>
          <router-link to="/art">Art</router-link> <br/>
          <router-link to="/writing">Writing</router-link><br/>
          <router-link to="/programming">Programming</router-link><br/>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>
<style>
  @import '../css/HomePage.css';
</style>