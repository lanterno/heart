<template>
  <timer/>
  <clicker startPoint=3 />
  <clicker startPoint=7 />
</template>

<script>
import Timer from "@/components/Timer";
import clicker from "@/components/clicker";

export default {
  name: 'App',
  components: {
    Timer,
    clicker,
  }
}
</script>

<style>
@import '~papercss/dist/paper.css';
#app {
  background-color: bisque;
}
</style>
