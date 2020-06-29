<template>
    <div :class="['tm-flex-center', customClass, 'tm-wrap']">
        <Spin :size="size"
              v-if="!spinner"></Spin>
        <Icon :type="spinner"
              :size="spinnerSize || 14"></Icon>
        <div v-if="loadingText">{{loadingText}}</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Loading extends Vue {
    @Prop(String) size?: string;

    @Prop(String) spinner?: string;

    @Prop(Number) spinnerSize?: number;

    @Prop(String) customClass?: string;

    @Prop(String) loadingText?: string;

    private originalPosition = '';

    mounted() {
        if (this.$el && this.$el.parentNode) { // 排除指令模式loading
            this.originalPosition = window.getComputedStyle((this.$el.parentNode as any), '')['position'] as string;
            (this.$el.parentNode as any).style.position = 'relative';
        }
    }

    beforeDestroy() {
        if (this.$el && this.$el.parentNode) {
            (this.$el.parentNode as any).style.position = this.originalPosition;
        }
    }
}
</script>

<style  lang="less" scoped>
.tm-wrap {
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
