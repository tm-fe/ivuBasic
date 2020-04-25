import iView from 'tm-iview';
import Vue from 'vue';
import App from 'examples/App.vue';
import router from 'examples/router';
import { vLoading, vClipboard } from '@/index';
import 'examples/styles/index.less';


Vue.config.productionTip = false;

Vue.use(iView);

Vue.directive('loading', vLoading)
Vue.directive('copy', vClipboard)
Vue.use(iView, {
    initPopper: true
});


new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
