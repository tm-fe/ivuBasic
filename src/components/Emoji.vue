<template>
    <div>
        <Poptip placement="top-start"
                :transfer="true"
                v-model="pickerVisible">
            <div class="tm-emoji-btn">{{ face }}</div>
            <div slot="content">
                <div class="tm-picker">
                    <template v-for="(item, index) in emojiData">
                        <div class="tm-picker-body"
                             :key="index"
                             v-show="selectPanel === index">
                            <div v-for="d in item"
                                 :key="d"
                                 class="tm-item-box"
                                 @click="onSelect(d)">
                                {{ getUnicode(d) }}
                            </div>
                        </div>
                    </template>

                    <div class="tm-toggle-box">
                        <div v-for="(item, index) in emojiData"
                             :key="index"
                             @click="selectPanel = index"
                             :class="{ 'tm-dot': true, 'tm-active': selectPanel === index }"></div>
                    </div>
                </div>
            </div>
        </Poptip>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from 'vue-property-decorator';
import emoji from 'node-emoji';

@Component
export default class Emoji extends Vue {
    @Prop({type: Object, default: () => {}, required: true}) emojiJson!: any; 

    private face = emoji.get('smile');

    private selectPanel = 11;

    private pickerVisible = false;

    private get emojiData() {
        const panelLen = Math.ceil(Object.keys(this.emojiJson).length / 100);
        let result: any = [];
        for (let i = 0; i < panelLen; i++) {
            result = result.concat([
                Object.keys(this.emojiJson).filter(
                    (e, ii) => ii >= i * 100 && ii < (i + 1) * 100
                )
            ]);
        }
        return result;
    }

    private getUnicode(name: string) {
        return emoji.get(name);
    }

    @Emit('select')
    onSelect(item: string) {
        this.pickerVisible = false;
        return this.getUnicode(item);
    }
}
</script>

<style scoped lang="less">
.tm-emoji-btn {
    font-size: 20px;
    cursor: pointer;
    width: 50px;
    text-align: center;
}
.tm-picker {
    background-color: #fff;
    border-radius: 8px;
    .tm-picker-body {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        overflow: auto;
        width: 400px;
        height: 450px;
        .tm-item-box {
            width: 39px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            font-size: 20px;
            cursor: pointer;
            &:hover {
                background-color: #f5f5f5;
                border-radius: 3px;
            }
        }
    }

    .tm-toggle-box {
        height: 20px;
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
        .tm-dot {
            border-radius: 100%;
            background-color: #ccc;
            width: 8px;
            height: 8px;
            cursor: pointer;
            margin: 0 5px;
            &.tm-active {
                background-color: #f06f54;
            }
        }
    }
}
</style>
