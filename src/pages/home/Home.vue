<template>
  <div>
    <HomeHeader :city="city"/>
    <HomeSwiper :swiperList="swiperList"/>
    <HomeIcons :iconList="iconList"/>
    <HomeRecommend :recommendList="recommendList"/>
    <HomeWeekend :weekendList="weekendList"/>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import axios from 'axios'
export default {
  name:'Home',
  components:{HomeHeader,HomeSwiper,HomeIcons,HomeRecommend,HomeWeekend},
  data() {
    return {
      city:'',
      swiperList:[],
      iconList:[],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo(){
      axios.get('/mock/index.json').then(
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
}
</script>

<style>

</style>