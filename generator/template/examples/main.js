import Vue from 'vue'
import App from './App.vue'

// 可按需加载
import { Test } from '../src/index'
Vue.use(Test)

// 全局加载
// import index from '../src/index'
// Vue.use(index)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
