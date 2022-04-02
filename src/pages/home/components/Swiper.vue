<template>
<div class="wrapper">
    <swiper :options="swiperOptions">
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
    data () {
        return {
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination'
                },
                loop: true,
                autoplay:true
            },
            swiperList:[
                {
                    id:'001',
                    imgUrl:'https://imgs.qunarzz.com/vs_ceph_vcimg/5be2601d1f921f166646b817459a2727.jpeg'
                },
                {
                    id:'002',
                    imgUrl:'https://imgs.qunarzz.com/vs_ceph_vcimg/280673be5655fc91ce24ba605c62fe07.jpeg'
                }
            ]
        }
    },
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