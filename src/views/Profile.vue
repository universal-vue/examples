<template>
  <PageLayout :title="title">
    <!-- If user is not logged: display a login form -->
    <form v-if="!user.logged" @submit.prevent="onSubmit">
      <div v-if="redirected" class="notif info">You have been redirected by a middleware !</div>
      <div v-if="error" class="notif error">{{ error }}</div>

      <div class="txtcenter">
        <label for="username"> Enter you username: </label> <br />
        <input id="username" v-model="form.username" type="text" /> <br />
        <button class="btn" type="submit">Login</button>
      </div>
    </form>
    <!-- Otherwise: display a simple welcome page with some links -->
    <div v-else>
      <p>You are now logged!</p>
      <router-link class="btn" to="/private">Go to private page</router-link>
      <button class="btn" @click="onLogout">Logout</button>
    </div>
  </PageLayout>
</template>

<script>
import PageLayout from '@/components/PageLayout';
import { pageEnterEffect } from '@/effects';

export default {
  mixins: [pageEnterEffect],

  components: {
    PageLayout,
  },

  data() {
    return {
      error: null,
      form: {
        username: '',
      },
    };
  },

  computed: {
    user() {
      return this.$store.state.user;
    },

    title() {
      return this.user.logged ? `Welcome ${this.user.username}!` : 'Login';
    },

    redirected() {
      return this.$route.query.from ? true : false;
    },
  },

  methods: {
    async onSubmit() {
      try {
        this.error = null;
        await this.$store.dispatch('login', this.form.username);

        if (this.$route.query.from) {
          this.$router.push(this.$route.query.from);
        }
      } catch (err) {
        this.error = err.message;
      }
    },

    async onLogout() {
      await this.$store.dispatch('logout');
    },
  },
};
</script>

<style lang="scss">
form {
  .txtcenter {
    text-align: center;
  }

  label {
    font-weight: 700;
    padding: 2rem;
    display: inline-block;
  }

  input {
    padding: 1rem 2rem;
    border: 1px solid #ccc;
    border-radius: 0.8rem;
  }
}
</style>
