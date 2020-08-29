<template>
  <div class="home">
    <h1>Natural Simulation</h1>
    <RandomWalk msg="Random Walk" />
  </div>
</template>

<script>
// @ is an alias to /src
import RandomWalk from "@/components/RandomWalk.vue";

export default {
  name: "Home",
  components: {
    RandomWalk,
  },
};
</script>
