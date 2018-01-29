// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Notifications from 'vue-notification';
import _ from 'lodash';
import VModal from 'vue-js-modal';
import VueI18n from 'vue-i18n';
import App from './App';
import router from './router';
import store from './store';

Vue.set(Vue.prototype, '_', _);
Vue.use(Notifications);
Vue.use(VueI18n);
Vue.use(VModal, { componentName: 'modalComp' });
Vue.config.productionTip = false;

const i18n = new VueI18n({
  locale: 'en',
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App },
});
