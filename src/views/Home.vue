<template>
  <div class="home">
    <div class="flex">
      <div class="logo"><img alt="UVue" src="../assets/logo.png" /></div>
      <div class="titles">
        <h1>UVue</h1>
        <h2>Create Vue universal applications with ease</h2>
      </div>
    </div>

    <div class="text-links">
      Welcome to the UVue demo website! The purpose of this website is to show some features of this
      Vue package. UVue is a Vue CLI plugin to build server side rendered applications easly.
      <div class="links">
        <a class="btn" href="https://github.com/universal-vue/examples" target="_blank">
          Source code
        </a>
        <a class="btn" href="https://universal-vue.github.io/docs" target="_blank">
          Documentation
        </a>
        <a class="btn" href="https://github.com/universal-vue/uvue" target="_blank">
          Github repo
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { homeEffects } from '@/effects';
export default homeEffects;
</script>

<style lang="scss">
.home {
  max-width: 70rem;
  margin: 6rem auto;

  .flex {
    display: flex;
  }

  h1 {
    margin-top: 4rem;
    color: #00ab6c;
  }

  h2 {
    color: #999;
    margin-bottom: 4rem;
  }

  .text-links {
    padding: 3rem;
    font-size: 1.7rem;
    line-height: 1.6;

    .links {
      padding-top: 6rem;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
