export default {
  namespaced: true,
  state: {
    isAuthenticated: false,
    APIKey: null,
    user: {
      name: 'Ahmed'
    }
  },
  mutations: {
    setUser (state, apiKey) {
      state.APIKey = apiKey
      state.isAuthenticated = true
    }
  },
  actions: {
    authenticate (context, password) {
      context.commit('setUser', password)
    }

  }
}
