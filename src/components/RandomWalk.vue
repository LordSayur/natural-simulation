<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <vueP5 v-on="{preload, setup, draw, keypressed}" />
  </div>
</template>

<script>
import VueP5 from "vue-p5";

export default {
  name: "RandomWalk",
  components: { VueP5 },
  props: {
    msg: String,
  },
  data() {
    return {
      p5: null,
      x: 200,
      y: 200,
    };
  },
  methods: {
    preload(p5) {
      this.p5 = p5;
    },
    setup() {
      this.p5.createCanvas(400, 400);
      this.p5.background(0);
    },
    draw() {
      this.p5.background(0);
      this.p5.ellipse(this.p5.mouseX, this.p5.mouseY, 100);
    },
    keypressed(data) {},
  },
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
