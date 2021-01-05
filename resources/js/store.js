import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isAuth: false,
        isCompletedGame: false,
        isStarted: false,
        isActive: false,
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

        isStarted: state => {
            return state.isStarted;
        },

        isActive: state => {
            return state.isActive;
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

        changeStatusStarted(context) {
            context.commit('changeStatusStarted');
        },

        changeStatusActive(context) {
            context.commit('changeStatusActive');
        },
    },

    mutations: {
        changeStatusAuth(state) {
            return state.isAuth = !state.isAuth;
        },

        changeStatusCompleted(state) {
            return state.isCompletedGame = !state.isCompletedGame;
        },

        changeStatusStarted(state) {
            return state.isStarted = !state.isStarted;
        },

        changeStatusActive(state) {
            return state.isActive = !state.isActive;
        },
    }
})

export default store;
