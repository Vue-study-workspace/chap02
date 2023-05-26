import { createStore } from 'vuex'

export default createStore({
  strict: true,
  state: {
    name: '',
  },
  getters: {
  },
  mutations: {
    updateName(state, name) {
      state.name = name
    }
  },
  actions: {
  },
  modules: {
  }
})
