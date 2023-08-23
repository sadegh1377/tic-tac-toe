import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        showRules: null
    },
    getters: {
        showRules(state) {
            return state.showRules
        }
    },
    mutations: {
        SET_SHOW_RULES(state, data) {
            state.showRules = data
        }
    },
    actions: {
        changeShowRules(context, payload) {
            context.commit('SET_SHOW_RULES', payload)
        }
    },
    modules: {}
})
