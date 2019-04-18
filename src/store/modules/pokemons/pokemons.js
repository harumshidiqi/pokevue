import { http } from '@/api/http'

const state = {
  pokemons : [],
  loadingPokemons: false,
}

const actions = {
  fetchPokemons: (context) => {
    context.commit('LOADING_DATA', true)
    http({
      methods : 'get',
      url     : 'pokemon'
    })
    .then(res => {
      if(res.status === 200) {
        context.commit('LOADING_DATA', false)
        context.commit('SHOW_POKEMONS', res.data.results)
      }
    })
    .catch(err => {
      context.commit('LOADING_DATA', false)
    })
  }
}

const mutations = {
  SHOW_POKEMONS: (state, pokemons) => {
    state.pokemons = pokemons
  },

  LOADING_DATA: (state, status) => {
    state.loadingPokemons = status
  }
}

const getters = {
  pokemons: state => state.pokemons,
  loadingPokemons: state => state.loadingPokemons
}

export default {
  state,
  actions,
  mutations,
  getters
}