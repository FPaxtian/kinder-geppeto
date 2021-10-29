<template>
  <div id="app">    
    <Header></Header>
    <router-view></router-view>
    
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: "App",
  components: {
    Header,
  },
}
</script>

<style>
@import "./assets/css/style.css";
</style>
