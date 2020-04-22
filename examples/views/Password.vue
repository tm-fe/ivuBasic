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
                <Password v-model="value"
                          type="text">
                    <Input v-model="value"
                           type="password"
                           password
                           placeholder="Text模式"
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

    mounted() {
    }
}
</script>
