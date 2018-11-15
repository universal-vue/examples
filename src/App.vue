<template>
  <div id="app">
    <MainMenu />
    <router-view v-if="!$errorHandler.error" />
    <ErrorPage v-else />
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue';
import ErrorPage from './components/ErrorPage.vue';

export default {
  components: {
    MainMenu,
    ErrorPage,
  },

  head: {
    title: 'UVue',
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
</style>
