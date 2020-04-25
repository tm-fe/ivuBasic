<template>
    <div class="home"
         style="width: 500px; margin: 0 auto;">
        <Input v-model="text" />
        <Emoji @select="selectEmoji"
               :emojiJson="emojiByName"></Emoji>
    </div>
</template>

<script>
import Emoji from "@/plugins/emoji";

const emojiByName = require("node-emoji/lib/emoji.json");
export default {
    components: {
        Emoji
    },
    name: "home",
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
