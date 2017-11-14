import Vue from 'vue'
import Vuex from 'vuex'
import { states } from './state'
Vue.use(Vuex)

export default new Vuex.Store({
  states,
  mutations: {
    CHANGE_USER (state, payload) {
      state.user = payload
    },
    MODAL_VISIBLE (state, result) {
      state.modal = result
    }
  }
})
