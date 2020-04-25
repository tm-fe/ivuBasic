<template>
    <div style="width: 500px; margin: 0 auto;">
        <Form label-position="top">
            <FormItem label="默认模式 - Progress">
                <Password v-model="value">
                    <Input v-model="value"
                           type="password"
                           password
                           placeholder="默认模式"
                           slot="input" />
                </Password>
            </FormItem>
            <FormItem label="文本模式模式 - Text">
                <Password v-model="value1"
                          type="text">
                    <Input v-model="value1"
                           type="password"
                           password
                           placeholder="Text模式"
                           slot="input" />
                </Password>
            </FormItem>
            <FormItem label="自定义强度名称">
                <Password v-model="value2"
                          :strengtIntro="['简单了点', '还行', '很安全']">
                    <Input v-model="value2"
                           password
                           type="password"
                           slot="input" />
                </Password>
            </FormItem>
            <FormItem label="Text密码模式密码强度名称">
                <Password v-model="value3"
                          strengtLabel="您设置的密码安全系数"
                          :strengtIntro="['一颗星', '三颗星', '五颗星']"
                          type="text">
                    <Input v-model="value3"
                           password
                           type="password"
                           slot="input" />
                </Password>
            </FormItem>
            <FormItem label="开启大写提示">
                <Password v-model="value4"
                          :strengtIntro="['一颗星', '三颗星', '五颗星']"
                          isCapsLock>
                    <Input v-model="value4"
                           password
                           type="password"
                           slot="input" />
                </Password>
            </FormItem>
        </Form>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Password } from '@/index';

@Component({
    components: {
        Password
    }
})
export default class PasswordExamPle extends Vue {
    private value = '';
    private value1 = '';
    private value2 = '';
    private value3 = '';
    private value4 = '';

    mounted() { }
}
</script>
