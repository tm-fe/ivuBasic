<template>
    <div class="home"
         style="width: 500px; margin: 0 auto;">
        <Input v-model="text" />
        <Emoji @select="selectEmoji"
               :emojiJson="emojiByName"></Emoji>
    </div>
</template>

<script>
import Emoji from "@/emoji";

const emojiByName = require("node-emoji/lib/emoji.json");
export default {
    components: {
        Emoji
    },
    data() {
        return {
            text: "",
            emojiByName: emojiByName
        };
    },
    methods: {
        selectEmoji(data) {
            this.text += data;
        }
    }
};
</script>
