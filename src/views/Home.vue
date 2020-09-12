<template>
  <div>
    <h1>Natural Simulations</h1>
    <RandomWalkV1 />
    <RandomWalkV2 />
  </div>
</template>

<script>
// @ is an alias to /src
import RandomWalkV1 from "@/components/random_walk/RandomWalkV1.vue";
import RandomWalkV2 from "@/components/random_walk/RandomWalkV2.vue";

export default {
  name: "Home",
  components: {
    RandomWalkV1,
    RandomWalkV2,
  },
};
</script>
