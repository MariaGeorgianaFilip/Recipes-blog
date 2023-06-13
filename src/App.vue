<template>
  <div id="app">
    <h1>Romanian recipes blog</h1>
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  components: { NavBar}
}
</script>

<style lang="scss">
body {
  background: #f2f2f2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  border: 0;
  color: #555;

}
h1 {
  text-align: center;
  padding: 30px;
  color: #00ce89;
  margin: 0;
}
</style>
