<template>
  <div class="frame">
    <h2>{{ str }}</h2>
    <h3>This is from inside Frame</h3>
  </div>
</template>

<script>
export default {
  name: 'Frame',
  props: {
    str: String,
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