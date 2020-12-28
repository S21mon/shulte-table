require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

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


