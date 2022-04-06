<template>
    <div class="container" @click="handleGalleryClick">
       <div class="wrapper">
           <swiper :options="swiperOptions">
                <swiper-slide>
                 <img class="Gallery-img" 
                   src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg" 
                  >
                </swiper-slide>
                 <swiper-slide>
                 <img class="Gallery-img" 
                   src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg" 
                  >
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
       </div>
    </div>
</template>

<script>
export default {
    name:'CommonGallery',
    data() {
        return {
            swiperOptions:{
                pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction'
                },
                //当Swiper的祖先元素和自身元素变化时，Swiper更新。
                observer:true,
                observeParents:true,
            }
        }
    },
    methods: {
        handleGalleryClick(){
            this.$emit('close')
        }
    },
}
</script>

<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow: inherit
    .container
        position: fixed
        display: flex
        flex-direction: column
        justify-content: center
        z-index: 99
        left:0
        right :0
        bottom:0
        top:0
        background-color: #000
        .wrapper
            height: 0
            width: 100%
            padding-bottom: 100%
            .Gallery-img
               width: 100%
            .swiper-pagination
                color: #fff
                bottom: -1rem
</style>