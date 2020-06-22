<template>
    <div :class="customClass">
        <div v-if="isCapsLock"
             class="tm-capslock">
            <Tooltip :disabled="!openCapsLock"
                     style="width: 100%;"
                     :always="openCapsLock"
                     :content="capsLockLabel">
                <slot name="input"> </slot>
            </Tooltip>
        </div>
        <slot name="input"
              v-else></slot>
        <div v-if="currentStrength">
            <div v-if="type === 'text'"
                 class="tm-align-l tm-mt tm-flex-start">
                <span class="tm-mr8">{{strengthLabel}}</span>
                <Tag :color="currentStrength=== 1 ? 'default':currentStrength === 2?'primary':'success'">{{strengthIntro[currentStrength - 1]}} </Tag>
            </div>
            <div v-else
                 class="tm-flex-center">
                <ButtonGroup size="small"
                             class="tm-progress"
                             :class="`strength${currentStrength}`"
                             shape="circle">
                    <Button v-for="item in strengthArr"
                            :type="getBtnType(item)"
                            :key="item">{{strengthIntro[item - 1]}}</Button>
                </ButtonGroup>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop, Model, Watch } from 'vue-property-decorator';

@Component
export default class Password extends Vue {
    @Model('change') value!: string; // slot input v-model

    @Prop(String) customClass?: string; // 自定义class

    @Prop({ type: [String, Number], default: 8 }) minLength!: string | number; // 密码最小长度，默认8位

    @Prop({
        type: String,
        default: 'progress',
        validator: (val: string) => {
            return ['progress', 'text'].includes(val);
        }
    }) type!: string; // 展示模式，进度、文字

    @Prop({
        type: Array,
        default: () => ['Weak', 'Medium', 'Strong']
    }) strengthIntro!: string[]; // 自定义密码强度显示

    @Prop({ type: String, default: 'Password strength' }) strengthLabel!: string; // 文字展示时，自定义密码强度label

    @Prop({ type: Boolean, default: false }) isCapsLock!: boolean; // 是否自动开启键盘大写提示

    @Prop({ type: String, default: 'CapsLock' }) capsLockLabel?: string; // 自动开启键盘大写文字提示

    private currentStrength = 0;

    private strengthArr = [1, 2, 3];

    private openCapsLock = false;

    /**
     * 匹配到规则
     */
    private matchRule = {
        number: false,
        letter: false,
        symbol: false
    };

    @Watch('value')
    changeVal() {
        this.calculateStrength();
    }

    @Watch('matchRule')
    private onMatchRuleChange() {
        this.$emit('on-change', this.matchRule);
    }

    private calculateStrength() {
        let strength: number = 0;
        let matchNumber: boolean = false;
        let matchSymbol: boolean = false;
        let matchLetter: boolean = false;
        const minLength = parseInt((this.minLength).toString(), 10);
        if (this.value.length < minLength) {
            this.currentStrength = 0;
            return -1;
        }

        if (this.value.match(/[0-9]/)) { // 匹配数字
            strength += 1;
            matchNumber = true;
        }

        if (this.value.match(/[.,!,@,#,$,%,^,&,*,?,_,~]/)) { // 匹配特殊符号
            strength += 1;
            matchSymbol = true;
        }

        if (this.value.match(/[a-z]/)) { // 匹配小写字母
            strength += 1;
            matchLetter = true;
        }

        if (this.value.match(/[A-Z]/)) { // 匹配大写字母
            strength += 1;
            matchLetter = true;
        }
        if (strength < 3) {
            this.currentStrength = this.strengthArr.find((x: any) => x === strength) || 0;
        } else {
            this.currentStrength = this.strengthArr.find((x: any) => x === 3) || 3;
        }

        this.matchRule = {
            number: matchNumber,
            letter: matchLetter,
            symbol: matchSymbol
        };
    }

    private getBtnType(item: number) {
        const currentStrength = this.currentStrength;
        if (currentStrength < item) { 
            return 'default';
        }

        if (item === 1) {
            return 'info';
        }

        if (item === 2) {
            return 'primary';
        }

        return 'success';
    }

    private checkCapsLock(e: KeyboardEvent) {
        const upperReg = /^[A-Z]+$/;
        const capsLockKey = e.keyCode ? e.keyCode : e.which;
        const shifKey = e.shiftKey ? e.shiftKey : ((capsLockKey == 16) ? true : false); // shift键是否按住
        if (upperReg.test(e.key) && !shifKey || (!this.openCapsLock && shifKey && capsLockKey === 20)) {
            this.openCapsLock = true;
            this.$emit('on-caps-lock', true);
        } else if (!upperReg.test(e.key) && !shifKey || (this.openCapsLock && shifKey && capsLockKey === 20)) {
            this.openCapsLock = false;
            this.$emit('on-caps-lock', false);
        }
    }

    mounted() {
        this.currentStrength = 0;
        this.calculateStrength();
        window.addEventListener('keydown', this.checkCapsLock, false);
    }

    beforeDestroy() {
        window.removeEventListener('keydown', this.checkCapsLock, false);
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
.tm-ml8 {
    margin-left: 8px;
}
</style>
