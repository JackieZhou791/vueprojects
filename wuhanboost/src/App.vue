<template>
    <div id="app">
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App 1111'
    }
  }
}
</script>

<style lang="scss">
body, div, p {
  margin: 0 auto;
}

#app {
  font-family: PingFang-SC-Regular, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.clr {
  display: block;
  clear: both;
}

.note-font {
  color: #F23C3C;;
}

.blue-font {
  color: #0D5BFF;
  font-size: 38px;
}
</style>
