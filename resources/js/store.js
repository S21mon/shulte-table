export default {

    state: {
        isAuth: false,
        isCompleted: false,
    },

    getters: {
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
            return state.isCompleted = !state.isCompleted;
        },
    }
}
