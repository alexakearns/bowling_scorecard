<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/bowling_ball.png">
    <Scorecard str="Welcome to Your Scorecard"/>
  </div>
</template>

<script>
import Scorecard from './components/Scorecard.vue'

export default {
  name: 'App',
  components: {
    Scorecard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
