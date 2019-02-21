<template>
  <header class="main-menu">
    <ul :class="{ active }">
      <li class="page-link">
        <router-link to="/" exact @click.native="onClickLink">
          <span class="text">Home</span>
        </router-link>
      </li>
      <li class="page-link">
        <router-link to="/async-data" @click.native="onClickLink"> AsyncData </router-link>
      </li>
      <li class="page-link">
        <router-link to="/vuex" @click.native="onClickLink"> Vuex </router-link>
      </li>
      <li class="page-link">
        <router-link to="/spa" @click.native="onClickLink"> SPA page </router-link>
      </li>
      <li class="page-link">
        <router-link to="/not-found" @click.native="onClickLink"> Not found </router-link>
      </li>
      <li class="page-link">
        <router-link to="/server-error" @click.native="onClickLink"> Server error </router-link>
      </li>
      <li class="page-link">
        <router-link to="/error" @click.native="onClickLink"> Error </router-link>
      </li>
      <li class="page-link">
        <router-link to="/private" @click.native="onClickLink"> Private </router-link>
      </li>
      <li class="page-link">
        <router-link to="/profile" @click.native="onClickLink">
          {{ isLogged ? 'My profile' : 'Login' }}
        </router-link>
      </li>
    </ul>

    <button class="mobile-menu-button btn" type="button" @click="active = !active">
      Menu
    </button>
  </header>
</template>

<script>
export default {
  data: () => ({
    active: false,
  }),

  computed: {
    isLogged() {
      return this.$store.state.user.logged;
    },
  },

  methods: {
    onClickLink() {
      this.active = false;
    },
  },
};
</script>

<style lang="scss">
body {
  padding: 0;
  padding-top: 12rem;
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

  .mobile-menu-button {
    display: none;
  }

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

@media screen and (max-width: 968px) {
  body {
    padding-top: 8rem;
  }

  .main-menu {
    height: 6rem;
    padding: 0;

    .mobile-menu-button.btn {
      position: absolute;
      top: 1rem;
      right: 1rem;
      display: block;
      margin: 0;
      padding: 0.5rem 1.5rem;
    }

    ul {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 100;
      display: none;
      padding-top: 7rem;
      background: #fff;

      &.active {
        display: block;
      }

      li {
        text-align: center;
        display: block;

        a {
          font-size: 2.4rem;
          display: block;
        }
      }
    }
  }
}
</style>
