require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

Vue.use(VueRouter);
Vue.use(Vuex);

window.Vue = require('vue');

import App from './components/App';
import router from './routes';
import store from './store';

const app = new Vue({
    el: '#app',
    components: {
        App,
    },
    router,
    store,
});


