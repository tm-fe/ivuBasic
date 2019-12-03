<template>
  <div class="home" style="width: 500px; margin: 0 auto;">
    <Input v-model="text" />
    <Emoji @select="selectEmoji"></Emoji>
  </div>
</template>

<script>
// @ is an alias to /src
import Emoji from "@/components/Emoji.vue";

export default {
  name: "home",
  components: {
    Emoji
  },
  data() {
    return {
      text: ""
    };
  },
  methods: {
    selectEmoji(data) {
      this.text += data;
    }
  }
};
</script>
