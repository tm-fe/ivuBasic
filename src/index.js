import Emoji from './Emoji.vue';
import Group from './Group.vue';

const components = {
    Emoji,
    Group
};

const install = function(Vue, opts = {}) {
    if (install.installed) return;

    Object.keys(components).forEach(key => {
        Vue.component(key, components[key]);
    });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    install,
    ...components
};

module.exports.default = module.exports = API; // eslint-disable-line no-undef
