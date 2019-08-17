<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Test />
  </div>
</template>

<script>
// 单独组件引入
import { HelloWorld } from '../src/index'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="stylus">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
