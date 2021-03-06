import Vue from 'vue'
import App from './App.vue'
//引入router
import VueRouter from 'vue-router'
import router from './router/index'
import store from './store'
//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
// import 'swiper/css/swiper.css'
import 'swiper/css/swiper.css'
import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
