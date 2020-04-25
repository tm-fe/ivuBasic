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
    minLength?: number | string;
    /**
     * 强度展示类型[progress, text]
     */
    type?: string;
    /**
     * 自定义密码强度名称, 默认 ['Weak', 'Medium', 'Strong']
     */
    strengtIntro?: string[];
    /**
     * 是否自动默认开启键盘，默认 false
     */
    isCapsLock?: boolean;
    /**
     * 自动开启键盘大写文字提示
     */
    capsLockLabel?: string;
    /**
     * 大写开启回调
     */
    $emit(
        eventName: "on-caps-lock",
        option: boolean
    ): this;
}
