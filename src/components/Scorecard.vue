<template>
<div class="scorecard">
  <h2>{{ str }}</h2>
  <Frame str="This is Frame's props" />
  <Frame str="Another Frame prop" />
  <TenthFrame str="Tenth Frame prop" />
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
  }
}
</script>

<style>
  .scorecard {
    border: dashed 5px blue;
  }
</style>