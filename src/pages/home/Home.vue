<template>
  <div>
    <HomeHeader/>
    <HomeSwiper/>
    <HomeIcons/>
    <HomeRecommend/>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
export default {
  name:'Home',
  components:{HomeHeader,HomeSwiper,HomeIcons,HomeRecommend}
}
</script>

<style>

</style>