import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
// import Layout from '../views/layout/Layout'
import Layout from '../views/layout/Layout';

const _import = require(`./_import_${process.env.NODE_ENV}`);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: _import('home/index'),
    },
    {
      path: '/work/:id',
      name: 'work',
      component: _import('work/index'),
    },
  ],
});
