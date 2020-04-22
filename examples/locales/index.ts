import Vue from 'vue';
import VueI18n from 'vue-i18n';
import tmEn from '@/locale/en-US';
import tmZh from '@/locale/zh-CN';
import iviewLocaleEn from 'tm-iview/dist/locale/en-US';
import iviewLocaleZh from 'tm-iview/dist/locale/zh-CN';
Vue.use(VueI18n);

// vue-i18n 6.x+写法
// tslint:disable-next-line: no-empty
Vue.locale = () => { };

const messages = {
    'zh-CN': { ...iviewLocaleZh, ...tmZh },
    'en-US': { ...iviewLocaleEn, ...tmEn }
};
const i18n = new VueI18n({
    locale: 'zh-CN',
    messages
});

export default i18n;
