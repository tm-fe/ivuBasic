import Vue from 'vue';

export declare class Password extends Vue {
    /**
     * v-model
     */
    value?: any;
    /**
     * 自定义class
     */
    customClass?: string;
    /**
     * 密码最小长度，默认8
     */
    minLength?: number|string;
    /**
     * 强度展示类型[progress, text]
     */
    type?: string;
}