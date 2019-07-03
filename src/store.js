import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/backend/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: {},
    cart: []
  },
  mutations: {
    SET_ITEMS (state, items) {
      Vue.set(state, 'items', items)
    },
    ADD_TO_CART (state, id) {
      state.cart.push(id)
    }
  },
  actions: {
    fetchItems ({ commit }) {
      axios
        .getItems()
        .then(res => {
          commit('SET_ITEMS', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  getters: {
    findById: state => id => {
      return state.items.find(item => item.id === id)
    },
    cartIds: state => {
      return state.cart
    }
  }
})
