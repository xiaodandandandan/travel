import { createApp } from 'vue';
import App from './App.vue'
import router from './router/index'
import store from './store'
//swiper
import SwiperClass, {Pagination,Autoplay} from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
// import 'swiper/css/swiper.css'
import 'swiper/swiper.min.css'

import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont.css'
SwiperClass.use([Pagination,Autoplay])

createApp(App).use(router).use(store).use(VueAwesomeSwiper).mount('#app')
