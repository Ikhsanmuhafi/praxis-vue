import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [
      {
        name: 'ikhsan',
        address: 'jauh',
        program: 'Frontend',
        isApproved:false
      },
      {
        name: 'jamal',
        address: 'deket',
        program: 'Backend',
        isApproved: false
      },
      {
        name: 'udin',
        address: 'lumayan',
        program: 'Mobile',
        isApproved: false
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
    remove(state, payload){
      for (let i = 0; i < state.users.length; i++){
        if (state.users[i].name === payload){
          state.users.splice(i, 1)
          break;
        }
      }
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
    },

    deleteuser(store, payload){
      store.commit('remove', payload)
    }
  },
})