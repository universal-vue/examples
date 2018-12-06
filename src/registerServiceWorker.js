/* eslint-disable no-console */

import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production' && process.client) {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        'App is being served from cache by a service worker.\n' +
          'For more details, visit https://goo.gl/AFskqB',
      );
    },
    cached() {
      console.log('Content has been cached for offline use.');
    },
    updated(registration) {
      let worker = registration.waiting;
      worker.postMessage({ action: 'skipWaiting' });
    },
    offline() {
      console.log('No internet connection found. App is running in offline mode.');
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    },
  });

  self.addEventListener('message', e => {
    if (e.data.action == 'skipWaiting') {
      self.skipWaiting();

      /*
      Two possible strategies here:
      - Auto refresh with `window.location.reload(true)` (Bad)
      - Display a popup to user with a button to refresh current page (Good)
      */
    }
  });
}
