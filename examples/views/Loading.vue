<template>
    <div style="width: 500px; margin: 0 auto;">
        <div style="width:100px; height: 100px;">
            <Loading></Loading>
        </div>

        <div style="width:100px; height: 100px;">
            <Loading loadingText="加载中"></Loading>
        </div>

        <div v-loading="loading"
             tm-loading-text="指令加载中, 3秒消失"
             style="width:100px; height: 100px;"></div>
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
            this.loading = true;
        }, 2000)
        setTimeout(() => {
            this.loading = false;
        }, 4000)
    }
}
</script>
