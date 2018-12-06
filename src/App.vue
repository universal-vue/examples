<template>
  <div id="app">
    <NoSSR> <vue-progress-bar></vue-progress-bar> </NoSSR> <MainMenu />
    <router-view v-if="!$errorHandler.error" />
    <ErrorPage v-else />
  </div>
</template>

<script>
import NoSSR from 'vue-no-ssr';
import MainMenu from './components/MainMenu.vue';
import ErrorPage from './components/ErrorPage.vue';

export default {
  components: {
    NoSSR,
    MainMenu,
    ErrorPage,
  },

  head: {
    titleTemplate(title) {
      return title ? `${title} | UVue` : 'UVue';
    },
    link: [{ rel: 'manifest', href: '/manifest.json' }],
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Nunito:300,400,700');

html {
  font-size: 62.5%;
}

body {
  margin: 0;
  padding: 0;
  background: #fcfcfc;

  font-size: 1.6rem;
  font-family: 'Nunito', sans-serif;

  color: #666;
}

button,
input {
  font-family: 'Nunito', sans-serif;
  font-size: 1.7rem;
}

* {
  box-sizing: border-box;
}

h1 {
  font-size: 4.8rem;
  font-weight: 300;
  margin: 0;
}

h2 {
  font-size: 2.4rem;
  font-weight: 300;
  margin: 0;
}

.btn {
  display: inline-block;
  text-decoration: none;

  background: #00ab6c;
  color: #fff;
  padding: 1rem 2rem;
  margin: 1rem;
  border-radius: 0.7rem;

  border: 0;
  cursor: pointer;
  border-bottom: 0.3rem solid darken(#00ab6c, 10%);

  transition: background-color 0.2s ease-in-out;
  transition-property: background-color, border-color;

  &:hover,
  &:focus,
  &:active {
    outline: none;
    background: darken(#00ab6c, 5%);
    border-bottom-color: darken(#00ab6c, 15%);
  }
}

.notif {
  padding: 2rem 2rem;
  margin-bottom: 1rem;
  background: lighten(#38465e, 60%);
  border-radius: 2rem;

  &.error {
    background: lighten(#c4382c, 40%);
  }
}
</style>
