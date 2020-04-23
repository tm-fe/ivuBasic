import iView from 'tm-iview';
import Vue from 'vue';
import App from 'examples/App.vue';
import router from 'examples/router';
import i18n from './locales';
import { vLoading, vClipboard } from '@/index';
import 'examples/styles/index.less';


Vue.config.productionTip = false;

Vue.use(iView);

Vue.directive('loading', vLoading)
Vue.directive('copy', vClipboard)
Vue.use(iView, {
    i18n: (key: string, value: string) => i18n.t(key, value),
    initPopper: true
});


new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app');
