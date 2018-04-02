import Vue from 'vue';
import Router from 'vue-router';
import One from '@/components/One';
import Two from '@/components/Two';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/one',
    },
    {
      path: '/',
      redirect: '/one',
    },
    {
      path: '/one',
      name: 'One',
      component: One,
    },
    {
      path: '/two',
      name: 'Two',
      component: Two,
    },
  ],
});

export default router;
