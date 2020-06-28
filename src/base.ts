import Group from './components/Group.vue';
import Loading from './components/loading/Loading.vue';
import vLoading from './components/loading/directive';
import vClipboard from './directives/clipboard';
import Password from './components/Password.vue';
import './style/index.less';

const components: any = {
    Group,
    Loading,
    Password
};

const install: any = (Vue: any) => {
    if (install.installed) return;

    Object.keys(components).forEach((key: string) => {
        Vue.component(key, components[key]);
    });
};

// auto install
if (typeof window !== 'undefined' && (window as any).Vue) {
    install((window as any).Vue);
}

const API = {
    install,
    ...components
};

export default API;
export {
    install,
    Group,
    Loading,
    vLoading,
    vClipboard,
    Password
};
