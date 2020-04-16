import Vue from 'vue';
import Loading from './Loading.vue';

const Mask = Vue.extend(Loading);

const toggleLoading = (el: any, binding: any, ) => {
    Vue.nextTick(() => {
        const text = el.getAttribute('tm-loading-text');
        const spinner = el.getAttribute('tm-loading-spinner');
        const spinnerSize = el.getAttribute('tm-spinner-size');
        const customClass = el.getAttribute('tm-loading-class');
        const mask = new Mask({
            el: document.createElement('div'),
            propsData: {
                size: binding.arg,
                spinner,
                spinnerSize,
                customClass,
                loadingText: text
            }
        });
        el.instance = mask;
        el.mask = mask.$el;
        el.domInserted = true;
        el.originalPosition = window.getComputedStyle(el, '')['position'];
        el.style.position = 'relative';
        el.appendChild(mask.$el);
    })
}

const removeLoading = (el: any) => {
    if (el.domInserted) {
        el.mask &&
            el.mask.parentNode &&
            el.mask.parentNode.removeChild(el.mask);
        el.style.position = el.originalPosition;
    }
    el.instance && el.instance.$destroy();
}


export default {
    update: (el: any, binding: any) => {
        if (binding.value && !el.domInserted) {
            toggleLoading(el, binding);
        }
        if (!binding.value) {
            removeLoading(el);
        }
    },
    bind: (el: any, binding: any) => {
        if (binding.value) {
            toggleLoading(el, binding)
        }
    },
    unbind: (el: any) => {
        removeLoading(el);
    }
}