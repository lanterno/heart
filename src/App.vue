<template>
  <NavBar/>
  <timer/>
</template>

<script>
import NavBar from '@/components/NavBar'
import Timer from '@/components/Timer'

export default {
  name: 'App',
  components: {
    Timer,
    NavBar
  }
}
</script>

<style>
@import '~papercss/dist/paper.css';
#app {
  background-color: bisque;
}
.lds-heart {
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;
  transform: rotate(45deg);
  transform-origin: 20px 20px;
}
.lds-heart div {
  top: 16px;
  left: 16px;
  position: absolute;
  width: 16px;
  height: 16px;
  background: #081435;
  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}
.lds-heart div:after,
.lds-heart div:before {
  content: " ";
  position: absolute;
  display: block;
  width: 16px;
  height: 16px;
  background: #911c1c;
}
.lds-heart div:before {
  left: -12px;
  border-radius: 50% 0 0 50%;
}
.lds-heart div:after {
  top: -12px;
  border-radius: 50% 50% 0 0;
}
@keyframes lds-heart {
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
}

</style>
