<template>
    <div class="wrapper">
      <div class="information">
        <div class="information-text">
          <h1>Hello! I'm Kai,</h1>
          <h2>Welcome to my Portfolio.</h2>
          <div class="social-media">
            <a href="https://www.linkedin.com/in/kai-hemming/"
                target="_blank"
                class="button">
              LinkedIn
            </a> 
            <a href="https://www.instagram.com/kaixhemming/"
                target="_blank"
                class="button">
              Instagram
            </a>
            <!-- <button> GitHub </button> -->
          </div>
        </div>
      </div>
      <div class="view-cv">
        <h2>My CV</h2> 
        <i class="arrow"></i>
      </div>
      <div class="cv">

      </div>
      <div class="options">
        <body> 
          Hello World!
          I’m a soon-to-be Computer Science Graduate (06/24) from St. Andrews, especially interested in web development, game development, cybersecurity, and general software engineering. I would love to connect with people who are in the tech industry and share my passion for software development. Outside work, I enjoy exploring the world through art, photography, and an active lifestyle.
        </body>
        <h2>Contents</h2>
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