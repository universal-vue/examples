import Vue from 'vue';
import App from './App.vue';
import createRouter from './router';
import createStore from './store';
import './registerServiceWorker';
import VueMeta from 'vue-meta';

Vue.config.productionTip = false;

Vue.use(VueMeta, {
  keyName: 'head',
});

export default () => {
  const store = createStore();
  const router = createRouter();
  return new Vue({
    router,
    store,
    render: h => h(App),
  });
};
