<template>
  <header class="main-menu">
    <ul>
      <li>
        <router-link
          :class="{
            'logo-hover': $route.path != '/',
          }"
          to="/"
          exact
        >
          <template v-if="$route.path == '/'">
            Home
          </template>
          <template v-else>
            <img alt="UVue" src="../assets/logo.png" />
          </template>
        </router-link>
      </li>
      <li><router-link to="/async-data"> AsyncData </router-link></li>
      <li><router-link to="/vuex"> Vuex </router-link></li>
      <li><router-link to="/spa"> SPA page </router-link></li>
      <li><router-link to="/not-found"> Not found </router-link></li>
      <li><router-link to="/server-error"> Server error </router-link></li>
      <li><router-link to="/error"> Error </router-link></li>
      <li><router-link to="/private"> Private </router-link></li>
      <li>
        <router-link to="/profile"> {{ isLogged ? 'My profile' : 'Login' }} </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  computed: {
    isLogged() {
      return this.$store.state.user.logged;
    },
  },
};
</script>

<style lang="scss">
body {
  padding-top: 12rem !important;
}

.main-menu {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  height: 11rem;

  background: #fff;
  padding: 3rem;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.1);

  img {
    max-height: 6rem;
    margin-top: -2rem;
  }

  ul {
    list-style: none;
    list-style-image: none;
    padding: 0;
    margin: 0;

    display: flex;
    justify-content: center;

    li {
      list-style: none;
      list-style-image: none;
      padding: 0;
      margin: 0;

      a {
        font-size: 1.8rem;
        color: #999;
        text-decoration: none;

        display: inline-block;
        padding: 0.5rem 1rem;
        margin: 0.5rem;

        transition: all 0.2s ease-out;
        transition-property: color, opacity;

        &::after {
          content: '';
          display: block;
          height: 2px;
          background: #00ab6c;

          transform: scaleX(0);
          transform-origin: 0 100%;

          transition: transform 0.2s ease-out;
        }

        &.logo-hover:hover,
        a.logo-hover:focus,
        &.logo-hover:active {
          opacity: 0.8;
        }

        &:hover:not(.logo-hover),
        a:focus:not(.logo-hover),
        &:active:not(.logo-hover),
        &.router-link-exact-active,
        &.router-link-active {
          color: #444;

          &::after {
            transform: scaleX(1);
          }
        }
      }
    }
  }
}
</style>
