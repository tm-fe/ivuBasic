<template>
    <div >
        <p v-copy copy-success="复制成功">点击文字自动复制，快试一下吧</p>
        <p v-copy="'世事漫随流水，算来一梦浮生。'" copy-success="复制成功">也支持自定义复制内容，惊讶吗</p>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Loading } from '@/index';

@Component({
    components: {
        Loading
    }
})
export default class LoadingExamPle extends Vue {
    private loading = true;

    mounted() {
        setTimeout(() => {
            this.loading = false;
        }, 3000)
    }
}
</script>
