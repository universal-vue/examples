<template>
  <div class="page">
    <h1>{{ title }}</h1>
    <div class="page__content"><slot /></div>
  </div>
</template>

<script>
import anime from 'animejs';

export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },

  mounted() {
    const title = this.$el.querySelector('h1');
    const content = this.$el.querySelector('.page__content');

    const tl = anime.timeline();

    tl.add({
      targets: title,
      translateX: ['10rem', 0],
      opacity: [0.3, 1],
      duration: 300,
      easing: 'easeOutQuad',
      complete() {
        title.classList.add('shown');
      },
    }).add({
      targets: content,
      translateY: ['10rem', 0],
      opacity: [0, 1],
      duration: 300,
      easing: 'easeOutQuad',
    });
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
