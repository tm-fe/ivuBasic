<template>
    <div :class="customClass">
        <slot name="input"></slot>
        <div v-if="currentStrength.id">
            <div v-if="type === 'text'"
                 class="tm-align-l tm-mt tm-flex-start">
                <span class="tm-mr8">{{$t('tm.pwdStrength')}}</span>
                <Tag :color="currentStrength.id === 1 ? 'default':currentStrength.id === 2?'primary':'success'">{{$t(currentStrength.name)}} </Tag>
            </div>
            <div v-else class="tm-flex-center">
                <ButtonGroup size="small"
                             class="tm-progress"
                             shape="circle">
                    <Button :type="currentStrength.id < item.id ? 'default':item.id === 1 ? 'info': item.id === 2?'primary':'success'"
                            v-for="item in strengthArr"
                            :key="item.id">{{$t(item.name)}}</Button>
                </ButtonGroup>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop, Model, Watch } from 'vue-property-decorator';

@Component
export default class Password extends Vue {
    @Model('change') value!: string;

    @Prop(String) customClass?: string;

    @Prop({ type: [String, Number], default: 8 }) minLength!: string | number;

    @Prop({
        type: String,
        default: 'progress',
        validator: (val: string) => {
            return ['progress', 'text'].includes(val);
        }
    }) type!: string;

    private currentStrength: Base.IdName = {
        id: 0,
        name: ''
    };

    private strengthArr: Base.IdName[] = [
        { id: 1, name: 'tm.weak' },
        { id: 2, name: 'tm.medium' },
        { id: 3, name: 'tm.strong' }
    ];

    private calculateStrength() {
        let strength: number = 0;
        const minLength = parseInt((this.minLength).toString(), 10);
        if (this.value.length < minLength) {
            return -1;
        }

        if (this.value.match(/[0-9]/)) { // 匹配数字
            strength += 1;
        }

        if (this.value.match(/[.,!,@,#,$,%,^,&,*,?,_,~]/)) { // 匹配特殊符号
            strength += 1;
        }

        if (this.value.match(/[a-z]/)) { // 匹配小写字母
            strength += 1;
        }

        if (this.value.match(/[A-Z]/)) { // 匹配大写字母
            strength += 1;
        }
        if (strength < 3) {
            this.currentStrength = this.strengthArr.find((x: any) => x.id === strength) as Base.IdName;
        } else {
            this.currentStrength = this.strengthArr.find((x: any) => x.id === 3) as Base.IdName;
        }

    }

    @Watch('value')
    changeVal() {
        this.calculateStrength();
    }
}
</script>

<style scoped lang="less">
.tm-mt {
    margin-top: 4px;
    margin-left: 5px;
}
.tm-progress {
    width: 98%;
    margin-top: 12px;
    /deep/ .ivu-btn {
        width: 33.3%;
    }
}
.tm-mr8 {
    margin-right: 8px;
}
</style>