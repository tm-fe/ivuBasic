<template>
    <div class="home"
         style="width: 500px; margin: 0 auto;">
        <Input v-model="text" />
        <Emoji @select="selectEmoji"></Emoji>
    </div>
</template>

<script>
import { Emoji } from '@/index';

export default {
    components: {
        Emoji
    },
    name: 'home',
    data() {
        return {
            text: ''
        };
    },
    methods: {
        selectEmoji(data) {
            this.text += data;
        }
    }
};
</script>
