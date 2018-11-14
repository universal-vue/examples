import Vue from 'vue';
import App from './App.vue';
import createRouter from './router';
import createStore from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

export default () => {
  const store = createStore();
  const router = createRouter();
  return new Vue({
    router,
    store,
    render: h => h(App),
  });
};
