<template>
<button @click="counter++">{{counter}}</button>
</template>

<script>

export default {
  name: "clicker",
  props: {
    startPoint: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      counter: this.startPoint
    }
  }
}
</script>

<style scoped>

</style>