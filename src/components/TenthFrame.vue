<template>
<div class="tenth-frame">
  <h2>{{ str }}</h2>
  <h4>Inside 10th Frame</h4>
  <h1>{{ score }}</h1>
  </div>
</template>

<script>
export default {
  name: 'TenthFrame',
  props: {
    score: Number,
    str: String,
  },

}
</script>

<style>
  .tenth-frame {
    border : double  5px orange;
  }
</style>