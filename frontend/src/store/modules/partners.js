const state = {
  searchQuery: ''
}

const mutations = {
  SET_SEARCH_QUERY(state, query) {
    state.searchQuery = query
  }
}

const actions = {
  setSearchQuery({ commit }, query) {
    commit('SET_SEARCH_QUERY', query)
  }
}

const getters = {
  searchQuery: state => state.searchQuery
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}