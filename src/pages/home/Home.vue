<template>
  <div>
    <HomeHeader :city = "city"/>
    <HomeSwiper :swiperList="swiperList"/>
    <HomeIcons :iconList="iconList"/>
    <HomeRecommend :recommendList="recommendList"/>
    <HomeWeekend :weekendList="weekendList"/>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import {useStore} from 'vuex'
import axios from 'axios'
import {ref,onMounted,onActivated,computed} from 'vue'
export default {
  name:'Home',
  components:{HomeHeader,HomeSwiper,HomeIcons,HomeRecommend,HomeWeekend},
  setup(){
    let lastCity = ''
    const swiperList = ref([])
    const iconList = ref([])
    const recommendList = ref([])
    const weekendList = ref([])
    const store = useStore()
    //const city = store.state.city
    const city = computed(()=>{
      return store.state.city
    })
    async function getHomeInfo(){
      let res =  await axios.get('/api/index.json?city='+city.value)
      res = res.data
      if(res.ret && res.data){
            const data = res.data
            swiperList.value = data.swiperList
            iconList.value = data.iconList
            recommendList.value = data.recommendList
            weekendList.value = data.weekendList
        }
    }
    onMounted(()=>{
      lastCity = city.value
      getHomeInfo()
    })
    onActivated(()=>{
      //const city = store.state.city
      console.log(lastCity,city.value)
      if(lastCity!== city.value){
        lastCity= city.value
        getHomeInfo()
      }
    })
    return {swiperList,iconList,recommendList,weekendList,city}
  },
  /* data() {
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
      axios.get('/api/index.json?city='+this.city).then(
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
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated() {
    if(this.lastCity !== this.city){
      this.lastCity = this.city
      this.getHomeInfo()
    }
  },
  computed:{
       // 映射 this.city 为 store.state.city
       ...mapState(['city'])
   } */
}
</script>
