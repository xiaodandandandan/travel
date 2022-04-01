import Vue from 'vue'
import App from './App.vue'
//解决移动端click事件300ms延迟执行
import fastClick from 'fastclick'
//引入router
import VueRouter from 'vue-router'
import router from './router/index'
import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont.css'


fastClick.attach(document.body)
Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
