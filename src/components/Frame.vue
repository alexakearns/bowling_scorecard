<template>
  <div class="frame">
    <h2>{{ scoreProp }}</h2>
    <h3>This is from inside Frame</h3>
    <button v-on:click="roll">Roll</button>
    <h4>{{ score }}</h4>
    <h5>{{ str }}</h5>
  </div>
</template>

<script>
export default {
  name: 'Frame',
  props: {
    scoreProp: Array,
    str: String,
  },
  data: () => ({
    score: [],
    isComplete: false,
  }),
  methods: {
    roll() {
      let num = Math.floor(Math.random() * 11)
      this.score.push(num)
    },
    frameComplete() {
      if(this.score.length === 2) {
        this.isComplete = true
      }
    }
  }
}
</script>

<style>
  h3 {
    border: solid 5px springgreen;
  }

  .frame {
    border: dotted 5px purple;
  }
</style>