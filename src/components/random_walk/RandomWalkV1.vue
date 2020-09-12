<template>
  <v-row>
    <v-col>
      <h2>Randon walk version 1</h2>
      <p>With 4 possible directions</p>
      <vueP5 v-on="{preload, setup, draw, keypressed}" />
      <pre v-highlightjs="randomWalk"><code class="javascript"></code></pre>
    </v-col>
  </v-row>
</template>

<script>
import VueP5 from "vue-p5";
import Walker from "@/objects/walker";

export default {
  name: "RandomWalkV1",
  components: { VueP5 },
  props: {},
  data() {
    return {
      p5: null,
      x: window.innerWidth,
      y: 200,
      walker: null,
      randomWalk: `walk() {
    var choice = floor(random(4));
    if (choice === 0) {
        this.x++;
    } else if (choice === 1) {
        this.x--;
    } else if (choice === 2) {
        this.y++;
    } else {
        this.y--;
    } 
};`,
    };
  },
  methods: {
    preload(p5) {
      this.p5 = p5;
      this.walker = new Walker(this.x / 2, this.y / 2, this.p5);
    },
    setup() {
      this.p5.createCanvas(this.x, this.y);
      this.p5.background(255);
    },
    draw() {
      this.walker.walkV1();
      this.walker.display();
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
