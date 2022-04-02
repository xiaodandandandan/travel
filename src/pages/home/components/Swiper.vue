<template>
<div class="wrapper">
    <swiper :options="swiperOptions" v-if="showSwiper">
        <swiper-slide v-for="item of swiperList" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl" alt="banner_img">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</div>
   
</template>

<script>
export default {
    name:'HomeSwiper',
    props:['swiperList'],
    data () {
        return {
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination'
                },
                loop: true,
                autoplay:true
            }
        }
    },
    computed:{
        showSwiper(){
            return this.swiperList.length ? 1 : 0;
        }
    }
}
</script>

<style lang="stylus" scoped>
    // 样式穿透>>>
    .wrapper >>> .swiper-pagination-bullet-active
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