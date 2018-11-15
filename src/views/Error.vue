<template>
  <div />
</template>

<script>
export default {
  async asyncData({ error }) {
    error(`I'm a teapot`, 418);
  },
};
</script>
