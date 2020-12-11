<template>
  <div id="app">
    <div id="root">
    <Layout>
      <router-view />
    </Layout>
    </div>
  </div>
</template>

<script>
import User from 'model/User'
import Layout from "./components/Layout/Layout"

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
  },
  components: {
    Layout
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
