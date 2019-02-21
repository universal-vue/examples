<template>
  <div class="page">
    <h1>{{ title }}</h1>
    <div class="page__content"><slot /></div>
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
  box-sizing: content-box;
  max-width: 65rem;
  margin: auto;
  padding: 3rem 6rem;

  h1 {
    font-weight: 100;

    &::after {
      content: '';
      display: block;
      height: 2px;
      background: #00ab6c;
      border-radius: 4px;
      width: 10rem;

      margin: 1rem 0 3rem 0;
      transform-origin: 0 50%;
      transform: scaleX(0);
      transition: transform 0.3s ease-out;
    }

    &.shown {
      &::after {
        transform: scaleX(1);
      }
    }
  }
}
</style>
