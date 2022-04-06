<template>
  <div>
        <div class="banner" @click="handleBannerClick">
            <img src="http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_r_800x800_6360f514.jpg" alt="" class="banner-img">
            <div class="banner-info">
                <div class="banner-tittle">故宫博物院</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe68b;</span>
                    39
                </div>
            </div>
        </div>
        <CommonGallery v-show="showGallery" @close="handleGalleryClose"/>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
export default {
    name:'DetailBanner',
    components:{CommonGallery},
    data() {
        return {
            showGallery:false
        }
    },
    methods: {
        handleBannerClick(){
            this.showGallery = true
        },
        handleGalleryClose(){
            this.showGallery = false
        }
    },
}
</script>

<style lang="stylus" scoped>
    .banner
        position: relative
        overflow: hidden
        height: 0
        padding-bottom: 55%
        .banner-img
            width: 100%
        .banner-info
            position:absolute
            z-index: 2
            bottom: 0
            left:0
            right: 0
            line-height: .6rem
            color: #fff
            display: flex
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
            .banner-tittle
                flex: 1
                font-size: .32rem
                padding: 0 .2rem
            .banner-number
                height: .32rem
                line-height: .32rem
                margin-top: .14rem
                padding: 0 .4rem
                border-radius: .2rem
                background: rgba(0, 0, 0, .5)
                font-size: .24rem
                .banner-icon
                    font-size: .24rem
</style>