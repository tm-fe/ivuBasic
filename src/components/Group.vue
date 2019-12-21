<template>
    <div>
        <div v-for="(item, index) in value"
             :key="index"
             :class="groupClasses"
             :style="{ flexWrap: flexWrap }">
            <slot name="leftComponent"
                  :item="item"
                  :index="index"
                  :list="value"
                  :emitInput="emitInput"></slot>
            <div :class="$style.tm_buttons">
                <Button :size="groupSize"
                        type="primary"
                        @click="handleAdd(item, index, value)"
                        icon="md-add"
                        :disabled="value.length >= maxCount"
                        :class="$style.tm_btn_add"></Button>
                <Button :size="groupSize"
                        type="error"
                        @click="handleRemove(item, index, value)"
                        v-if="value.length > 1"
                        icon="md-remove"
                        :class="$style.tm_btn_remove"></Button>
            </div>
            <slot name="rightComponent"
                  :item="item"
                  :index="index"
                  :list="value"
                  :emitInput="emitInput"></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { isObject } from 'lodash';

@Component
export default class Group extends Vue {
    @Prop({ required: true, type: Array })
    private value!: any[];

    @Prop({ required: false })
    private initialItem!: any;

    @Prop({ required: false, type: Number })
    private maxCount!: number;

    @Prop({ required: false, type: String, default: 'no-wrap' })
    private flexWrap?: string;

    @Prop({ type: [String, Array] })
    private groupClass?: string | string[];

    @Prop({ required: false, type: String, default: 'default' })
    private groupSize?: string;

    get groupClasses() {
        const self: any = this;
        if (Array.isArray(this.groupClass)) {
            return this.groupClass.concat([self.$style.tm_item]);
        }
        if (typeof this.groupClass === 'string') {
            return [self.$style.tm_item, this.groupClass];
        }
        return self.$style.tm_item;
    }

    public handleAdd(item: any, index: number, list: any[]) {
        if (isObject(this.initialItem)) {
            list.splice(index + 1, 0, JSON.parse(JSON.stringify(this.initialItem)));
        } else {
            list.splice(index + 1, 0, this.initialItem);
        }

        list = list.slice();

        this.$emit('add', { item, index, list });
        this.$emit('input', list);
    }

    public handleRemove(item: any, index: number, list: any[]) {
        list.splice(index, 1);
        list = list.slice();

        this.$emit('remove', { item, index, list });
        this.$emit('input', list);
    }

    public emitInput() {
        this.$emit('input', this.value);
    }
}
</script>

<style module lang="less">
.tm_item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.tm_btn_add {
    margin-left: 5px;
    font-weight: bolder;
}

.tm_btn_remove {
    .tm_btn_add();
}

.tm_buttons {
    flex-basis: auto;
    flex-shrink: 0;
    width: 100px;
}
</style>
