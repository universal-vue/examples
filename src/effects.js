import anime from 'animejs';

const pageEnterEffectFunc = ($el, cb) => {
  const title = $el.querySelector('.page h1');
  const content = $el.querySelector('.page .page__content');

  if (title && content) {
    anime
      .timeline()
      .add({
        targets: title,
        translateX: ['10rem', 0],
        opacity: [0.3, 1],
        duration: 300,
        easing: 'easeOutQuad',
        complete() {
          title.classList.add('shown');
        },
      })
      .add({
        targets: content,
        translateY: ['10rem', 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuad',
        complete() {
          if (typeof cb === 'function') {
            cb();
          }
        },
      });
  }
};

export const pageEnterEffect = {
  mounted() {
    pageEnterEffectFunc(this.$el);
  },

  beforeRouteUpdate(to, from, next) {
    pageEnterEffectFunc(this.$el, next);
  },
};

export const pageLeaveEffect = {
  beforeRouteLeave(to, from, next) {
    if (!this.left) {
      this.left = true;
      anime({
        targets: this.$el,
        translateY: [0, '10rem'],
        opacity: [1, 0],
        duration: 300,
        easing: 'easeInQuad',
        complete() {
          next();
        },
      });
    } else {
      next();
    }
  },
};

export const homeEffects = {
  mounted() {
    const logo = this.$el.querySelector('.logo');
    const title = this.$el.querySelector('.titles h1');
    const subTitle = this.$el.querySelector('.titles h2');
    const bottom = this.$el.querySelector('.text-links');

    anime
      .timeline()
      .add({
        targets: logo,
        translateX: ['-20rem', 0],
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutQuad',
      })
      .add({
        targets: title,
        translateX: ['10rem', 0],
        opacity: [0, 1],
        duration: 600,
        easing: 'easeOutQuad',
      })
      .add({
        targets: subTitle,
        translateY: ['6rem', 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuad',
      })
      .add({
        targets: bottom,
        opacity: [0, 1],
        translateY: ['10rem', 0],
        duration: 600,
        easing: 'easeOutQuad',
      });
  },

  beforeRouteLeave(to, from, next) {
    anime({
      targets: this.$el,
      translateY: [0, '10rem'],
      opacity: [1, 0],
      duration: 300,
      easing: 'easeInQuad',
      complete() {
        next();
      },
    });
  },
};
