<template>
    <div>
        <Loading></Loading>
        <Loading loadingText="加载中"></Loading>
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
}
</script>

<style scoped>
</style>