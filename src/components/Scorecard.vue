<template>
<div class="scorecard">
  <h2>{{ str }}</h2>
  <div class="scorecard__container">
    <Frame str="This is Frame's props" />
    <Frame str="Another Frame prop" />
    <Frame str="Another Frame prop" />
    <Frame str="Another Frame prop" />
    <Frame str="Another Frame prop" />
    <Frame str="This is Frame's props" />
    <Frame str="Another Frame prop" />
    <Frame str="Another Frame prop" />
    <Frame str="Another Frame prop" />
    <TenthFrame str="Tenth Frame prop" />
    <div class="scorecard__total">
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
    str: String
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