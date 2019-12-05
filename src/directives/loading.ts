import Vue from 'vue';
import { Spin } from 'tm-iview';

const Instance = Vue.extend(Spin);
const _loading = new Instance({
    el: document.createElement('div'),
    propsData: {
        size: 'large'
    }
});

export default {
    update: (el: Element, binding: any) => {
        if (!binding.value && _loading.$el) {
            _loading.$destroy();
            if (el.getElementsByClassName('tm-loading').length) {
                el.removeChild(el.getElementsByClassName('tm-loading')[0]);
            }
        }
    },
    bind: (el: Element, binding: any, vnode: any, oldVnode: any) => {
        if (binding.value) {
            const newDiv = document.createElement('div');
            newDiv.className = 'tm-loading';
            const divChild = document.createElement('div');
            const isFullscreen = !!binding.modifiers.fullscreen;  // 是否全屏loading
            const isLock = !!binding.modifiers.lock; // 是否锁定屏幕不滚动
            divChild.className = 'tm-loading-box';
            divChild.appendChild(_loading.$el);
            newDiv.appendChild(divChild);
            if(isFullscreen) {
                document.body.appendChild(newDiv);
            } else {
                el.appendChild(newDiv);
            }
            if(isLock) {
                newDiv.className = 'tm-loading tm-position-fixed';
            }
        }
    }
};
