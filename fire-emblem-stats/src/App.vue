<template>
  <div id="app">
    <global-navbar></global-navbar>
    <h1> Fire Emblem unit statistics app </h1>
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/Navigation.vue'
//import HelloWorld from './components/HelloWorld.vue'
//import Calculator from './components/Calculator.vue'

export default {
  name: 'App',
  components: {
    'global-navbar': Nav,
    //'calc': Calculator
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
