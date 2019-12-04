import Vue from 'vue';

export declare class Group extends Vue {
    /**
     * v-model
     */
    value?: any;
    /**
     * 数组属性
     */
    initialItem?: any;
    /**
     * 数组最大长度
     */
    maxCount?: number;
    /**
     * flex 布局
     */
    flexWrap?: string;
    /**
     * 自定义class
     */
    groupClass?: string | string[];
    /**
     * Button size
     */
    groupSize?: string;
}