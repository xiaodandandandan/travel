<template>
<div class="wrapper">
    <swiper :pagination="{ clickable: true }" :autoplay="{ delay: 2000 }" v-if="showSwiper">
        <swiper-slide v-for="item of swiperList" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl" alt="banner_img">
        </swiper-slide>
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
</div>
   
</template>

<script>
import {computed} from 'vue'
export default {
    name:'HomeSwiper',
    props:['swiperList'],
    setup(props){
        const showSwiper = computed(()=>{
            return props.swiperList.length ? 1 : 0;
        })
        return {showSwiper}
    }
}
</script>

<style lang="stylus" scoped>
    // 样式穿透>>>
    .wrapper :deep() .swiper-pagination-bullet-active
        background: #fff
    .wrapper
        overflow: hidden
        width :100%
        height :0
        padding-bottom:31.25%
        background-color: #eee
    .swiper-img
        width: 100%
</style>