<template>
    <div>
        <p v-copy="'点击文字自动复制，快试一下吧'" copy-success="复制成功">点击文字自动复制，快试一下吧</p>
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
