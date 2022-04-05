<template>
  <div>
    <HomeHeader/>
    <HomeSwiper :swiperList="swiperList"/>
    <HomeIcons :iconList="iconList"/>
    <HomeRecommend :recommendList="recommendList"/>
    <HomeWeekend :weekendList="weekendList"/>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import {mapState} from 'vuex'
import axios from 'axios'
export default {
  name:'Home',
  components:{HomeHeader,HomeSwiper,HomeIcons,HomeRecommend,HomeWeekend},
  data() {
    return {
      lastCity:'',
      swiperList:[],
      iconList:[],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo(){
      axios.get('/api/index.json').then(
        res=>{
          // console.log('succ',res.data.ret,res.data)
          if(res.data.ret && res.data.data){
            const data = res.data.data
            this.swiperList = data.swiperList
            this.iconList = data.iconList
            this.recommendList = data.recommendList
            this.weekendList = data.weekendList
          }
        },
        err=>{
          console.log(err.message)
        }
      )
    }
  },
  mounted() {
    this.getHomeInfo()
  },
  computed:{
       // 映射 this.city 为 store.state.city
       ...mapState(['city'])
   }
}
</script>
