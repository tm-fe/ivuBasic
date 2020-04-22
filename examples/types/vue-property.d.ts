import Vue from 'vue';

declare module 'vue/types/vue' {
    interface Vue {
    }
    interface VueConfiguration {
        lang: string;
    }
    interface VueConstructor {
        locale: any;
    }
}
