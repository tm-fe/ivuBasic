import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('examples/views/Home.vue')
        },
        {
            path: '/loading',
            name: 'loading',
            component: () => import('examples/views/Loading.vue')
        },
        {
            path: '/copy',
            name: 'copy',
            component: () => import('examples/views/Copy.vue')
        }
    ]
});

export default router;
