import { auth, googleAuthProvider } from '@/firebase'



const state = {
  user: null
}

const actions = {
  init({ commit }) {
    auth.onAuthStateChanged(user => {
      commit('SET_USER', user)
    })
  },
  login() {
    auth.signInWithPopup(googleAuthProvider)
  },
  logout() {
    auth.signOut()
  }
}

const mutations = {
  SET_USER(state, user) {
    const { email } = user || {}
    state.user = email
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}
