import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import Pokemons from '@/components/Pokemons';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/pokemons',
      name: 'Pokemons',
      component: Pokemons,
    },
  ],
});