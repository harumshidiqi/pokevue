const namespaced = true
const state = {
  count : 0
}

const actions = {
  increment: ({commit}) => {
    commit('INCREMENT')
  },
  decrement: ({ commit }) => {
    commit('DECREMENT')
  }
}

const mutations = {
  INCREMENT: (state) => {
    state.count++
  },
  DECREMENT: (state) => {
    state.count--
  }
}

const getters = {
  counter: (state) => {
    return state.count
  }
}

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters
}