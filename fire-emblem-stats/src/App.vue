<template>
  <div id="app">
    <img alt="Fire Emblem logo" src="./assets/felogo.png">
    <h1> App page testing </h1>
    <router-view/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Calculator from './components/Calculator.vue'

export default {
  name: 'App',
  components: {
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
