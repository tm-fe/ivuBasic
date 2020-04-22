import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('examples/views/Home.vue'),
            meta: {
                title: '表情使用',
            }
        },
        {
            path: '/loading',
            name: 'loading',
            component: () => import('examples/views/Loading.vue'),
            meta: {
                title: 'loading指令',
            }
        },
        {
            path: '/copy',
            name: 'copy',
            component: () => import('examples/views/Copy.vue'),
            meta: {
                title: '剪贴板指令',
            }
        },
        {
            path: '/password',
            name: 'password',
            component: () => import('examples/views/Password.vue'),
            meta: {
                title: '密码指令',
            }
        }
    ]
});

export default router;
