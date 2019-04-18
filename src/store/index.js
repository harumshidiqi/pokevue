import Vue from 'vue'
import Vuex from 'vuex'
import productsModule from './modules/products/products'
import counterModule from './modules/counter/counter'
import pokemonModule from './modules/pokemons/pokemons'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products: productsModule,
    counter: counterModule,
    pokemons: pokemonModule
  }
})

