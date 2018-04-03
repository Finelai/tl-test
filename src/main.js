import Vue from 'vue';
import VeeValidate from 'vee-validate';
import App from './App.vue';
import router from './router';

Vue.use(VeeValidate);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
