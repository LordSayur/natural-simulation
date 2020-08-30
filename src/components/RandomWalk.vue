<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>{{ msg }}</h2>
        <vueP5 v-on="{preload, setup, draw, keypressed}" />
        <pre v-highlightjs="randomWalk"><code class="javascript"></code></pre>
      </v-col>
    </v-row>
  </v-container>
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
      x: window.innerWidth * 0.8,
      y: 200,
      randomWalk: `var Walker = function() {
  this.x = width/2;
  this.y = height/2;
};`,
    };
  },
  methods: {
    preload(p5) {
      this.p5 = p5;
    },
    setup() {
      this.p5.createCanvas(this.x, this.y);
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
