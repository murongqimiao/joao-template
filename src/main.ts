import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './views/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

var __main = function () {
  Vue.config.productionTip = false
  Vue.use(ElementUI)
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    store,
    router,
    components: { App, },
    template: '<App/>',
  })
}

__main()
