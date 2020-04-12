<template>
    <div :class="['tm-flex-center', customClass, 'wrap']"
         :style="{background: background}">
        <Spin :size="size"
              v-if="!spinner"></Spin>
        <Icon :type="spinner"
              :size="spinnerSize || 14"></Icon>
        <div v-if="loadingText">{{loadingText}}{{loadingText}}</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Loading extends Vue {
    @Prop(String) size?: string;

    @Prop(String) spinner?: string;

    @Prop(Number) spinnerSize?: number;

    @Prop(String) background?: string;

    @Prop(String) customClass?: string;

    @Prop(String) loadingText?: string;
}
</script>

<style  lang="less" scoped>
.wrap {
    flex-direction: column;
}
</style>
