import Emoji from './components//Emoji.vue';
import Group from './components/Group.vue';
import './style/index.less';

const components: any = {
    Emoji,
    Group
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
    Emoji,
    Group
};
