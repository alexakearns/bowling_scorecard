<template>
  <div class="frame">
    <h2>{{ str }}</h2>
    <div class="frame__scores">
      <h3>{{ score[0] }}</h3>
      <h3>{{ score[1] }}</h3>
    </div>
    <h3>Running Total</h3>

    <h2>{{ scoreProp }}</h2>
    <h3>This is from inside Frame</h3>
    <button v-on:click="roll">Roll</button>
    <h4>{{ score }}</h4>
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
    MAX_SCORE: 10,
  }),
  methods: {
    roll() {
      if (!this.isComplete) {
        let num = Math.floor(Math.random() * 11)
        this.score.push(num)
      }
      this.frameComplete();
      console.log(this.isComplete)
    },

    

    frameComplete() {
      if(this.score.length === 2) {
        this.isComplete = true
      }
    }

    
  }
}
</script>

<style lang="scss"> 
  h3 {
    border: solid 5px springgreen;
  }

  .frame {
    border: dotted 5px purple;
  
    &__scores {
      display: flex;
    }
  }

</style>