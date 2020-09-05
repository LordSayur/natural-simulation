<template>
  <v-app>
    <v-app-bar app color="primary" class="d-none d-lg-block" dark>
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <RandomWalk msg="Natural Simulation" />
    </v-main>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-bottom-navigation :value="activeBtn" grow color="teal" class="d-lg-none">
      <v-btn @click.stop="drawer = !drawer">
        <span>Menu</span>
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <v-btn>
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import RandomWalk from "./components/RandomWalk";

export default {
  name: "App",

  components: {
    RandomWalk,
  },

  data: () => ({
    drawer: false,
    group: null,
    activeBtn: 1,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="scss">
.p5Canvas {
  width: 100% !important;
  border-radius: 1% 1%;
}
</style>
