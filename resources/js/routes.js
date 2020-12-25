import VueRouter from 'vue-router';
import Table from './components/Game';
import User from './components/User';
import Home from './components/Home';

const routes = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/game',
            name: 'game',
            component: Table,
        },
        {
            path: '/user',
            name: 'user',
            component: User,
        },
    ],
});

export default routes;
