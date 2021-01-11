import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        name: '',
        address: '',
        program: '',
        isApproved: true
      },
      {
        name: '',
        address: '',
        program: '',
        isApproved: true
      },
      {
        name: '',
        address: '',
        program: '',
        isApproved: true
      },
      {
        name: '',
        address: '',
        program: '',
        isApproved: true
      }
    ],
    admin: {
      username : 'ikhsan',
      password : '2020',
      authenticated : false
    },
  },
  mutations: {
    addUsers(state, payload) {
      state.users.push(payload)
    },

    loginAdmin(state, payload){
      state.admin = payload
    },
    setAuthentication(state, status) {
      state.authenticated = status
    }
  },
  actions: {
    actionUsers(store, payload) {
      store.commit('addUsers', payload)
    },

    login(store, payload) {
     store.commit('loginAdmin', payload)
    }
  },
})