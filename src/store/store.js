import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'

// Vue加載Plugin
Vue.use(Vuex);

export const store = new Vuex.Store({
    // 定義 state 於此
    state: {
        triggerComponent: 'None'
    },
    // 定義 getters 於此
    getters: {
        currentTrigger: state => {
            return state.triggerComponent;
        }
    },
    // 定義 mutations 於此
    mutations: {
        triggerByMutation: (state, payload) => {
            state.triggerComponent = payload;
        }
    },
    // 定義 actions 於此
    actions: {
        triggerByAction: (context, payload) => {
            console.log(payload);
            context.commit('triggerByMutation', payload);
        }
    }
})