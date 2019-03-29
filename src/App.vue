<template>
  <div id="app">
    <div class="init-contain" v-if="checkRoute()">
      <div class="title">JOAO!</div>
      <div>U have built a FE-backend management system successfully!</div>
    </div>

    <router-view/>
  </div>
</template>

<script>
import User from 'model/User'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    checkRoute () {
      return this.$route.path.length < 2
    }
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: monospace;
  .init-contain {
    text-align: center;
    width: 100%;
  }
  .title {
    margin-top: 100px;
    font-size: 100px;
    color: deepskyblue;
  }
}
</style>
