import iView from 'tm-iview';
import Vue from 'vue';
import App from 'examples/App.vue';
import router from 'examples/router';
import 'tm-iview/dist/styles/iview.css';
import { vLoading, vClipboard } from '@/index';


Vue.config.productionTip = false;

Vue.use(iView);

Vue.directive('loading', vLoading)
Vue.directive('copy', vClipboard)


new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
