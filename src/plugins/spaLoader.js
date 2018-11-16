/**
 * Simple plugin to remove SPA loader when application is ready
 */
import anime from 'animejs';

export default {
  ready() {
    if (process.client) {
      const loader = document.querySelector('.spa-loading');
      if (loader) {
        anime({
          targets: loader,
          opacity: 0,
          easing: 'easeOutQuad',
          complete() {
            loader.remove();
          },
        });
      }
    }
  },
};
