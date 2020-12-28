import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isAuth: false,
        isCompletedGame: false,
        rowQty: 5,
        columnQty: 5,
    },

    getters: {
        isAuth: state => {
            return state.isAuth;
        },

        isCompletedGame: state => {
            return state.isCompletedGame;
        },

        rowQty: state => {
            return state.rowQty;
        },

        columnQty: state => {
            return state.columnQty;
        },
    },

    actions: {
        changeStatusAuth(context) {
            context.commit('changeStatusAuth');
        },

        changeStatusCompleted(context) {
            context.commit('changeStatusCompleted');
        },
    },

    mutations: {
        changeStatusAuth(state) {
            return state.isAuth = !state.isAuth;
        },

        changeStatusCompleted(state) {
            return state.isCompletedGame = !state.isCompletedGame;
        },
    }
})

export default store;
