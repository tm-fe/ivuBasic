import Vue from 'vue';

export { Group } from './group';
export { Emoji } from './emoji';
export { Password } from './password';
export { Loading, vLoading } from './loading';
export { vClipboard } from './clipboard';

interface ChildGlobalOptions {

}

interface ChildInstallOptions extends ChildGlobalOptions {
}

declare const API: {
    version: string;
    install: (
        Vue: Vue,
        opts: ChildInstallOptions
    ) => void;
};

export default API;

declare module 'vue/types/vue' {
    interface Vue {
        $CHILD: ChildGlobalOptions;
    }
}