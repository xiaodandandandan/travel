<template>
   <div>
        <router-link to="/">
            <div class="header-abs" v-show="showAbs">
                <div class="iconfont">&#xe685;</div>
            </div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            景点详情
            <div class="iconfont header-fixed-back">&#xe685;</div>
        </div>
   </div>
</template>

<script>
export default {
    name:'DetailHeader',
    data() {
        return {
            showAbs:true,
            opacityStyle:{
                opacity:0
            }
        }
    },
    methods: {
        handleScroll(){
             const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
             if(top > 60){
                let opacity = top / 140
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = { opacity }
                this.showAbs = false
             }else{
                 this.showAbs = true
             }
        }
    },
    activated() {
        window.addEventListener('scroll',this.handleScroll)
    },
    deactivated() {
        window.removeEventListener('scroll',this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header-abs
        position: absolute
        z-index: 2
        top:.1rem
        left: .04rem
        width: .64rem
        height .64rem
        border-radius: 50%
        background-color: rgba(0,0,0,.5)
        .iconfont
            color:rgba(255,255,255,.5)
            line-height:.64rem
            text-align: center
            font-size:.4rem
    .header-fixed
        z-index: 2
        position: fixed
        top:0
        left:0
        right: 0
        width:100%
        height:$headerHeight
        background-color: $bgColor
        line-height :$headerHeight
        text-align: center
        font-size:.32rem
        color:#fff
        .header-fixed-back
            color:#fff
            position: absolute
            width .64rem
            top:0
            left:0
</style>