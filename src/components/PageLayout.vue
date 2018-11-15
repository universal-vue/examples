<template>
  <div class="page">
    <h1>{{ title }}</h1>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss">
.page {
  max-width: 65rem;
  margin: auto;
  padding: 3rem 0;

  h1 {
    font-weight: 100;

    &::after {
      content: '';
      display: block;
      height: 2px;
      background: #00ab6c;
      border-radius: 4px;
      width: 10rem;

      margin: 1rem 0;
    }
  }
}
</style>
