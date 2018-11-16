<template>
  <div />
</template>

<script>
export default {
  /**
   * Simple page to demonsrate how to trigger an error
   * in UVue plugins methods. When this error is catched the component
   * `src/components/ErrorPage` is used to display current error.
   */
  async asyncData({ error }) {
    error(`I'm a teapot`, 418);
  },
};
</script>
