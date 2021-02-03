<template>
<div class="scorecard">
  <h2>{{ str }}</h2>
  <div class="scorecard__container">
    <Frame str="Frame 1" />
    <Frame str="Frame 2" />
    <Frame str="Frame 3" />
    <Frame str="Frame 4" />
    <Frame str="Frame 5" />
    <Frame str="Frame 6" />
    <Frame str="Frame 7" />
    <Frame str="Frame 8" />
    <Frame str="Frame 9" />
    <TenthFrame str="Frame 10" />
    <div class="scorecard__total">
      <h1>Total Score</h1>
      <h2>{{ totalScore }}</h2>
    </div>
  </div>

  <button v-on:click="addToScore">AddScore</button>
  <div v-if="scoreArray !== []">
  <h5>{{ scoreArray }} {{ totalScore }} </h5>
  </div>
  </div>
</template>

<script>
import Frame from './Frame.vue';
import TenthFrame from './TenthFrame.vue'

export default {
  name: "Scorecard",
  components: {
    Frame,
    TenthFrame,
  },
  props: {
    str: String,
    scoreTotal: Number,
  },
  data: () => ({
    scoreArray: [],
    totalScore: 0,
  }),
  methods: {
    addToScore() {
      let num = Math.floor(Math.random() * 11)
      this.scoreArray.push(num)
      this.totalScore += num
    }
  }
}
</script>

<style lang="scss">
  .scorecard {
    border: dashed 5px blue;

    &__container {
      display: flex;
    }

    &__total {
      border: groove 8px red;
      padding: 10px;
    }
  }
</style>