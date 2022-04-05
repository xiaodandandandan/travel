<template>
  <div class="header">
      <div class="header-left">
          <div class="iconfont">&#xe685;</div>
      </div>
      <div class="header-input">
          <span class="iconfont">&#xe67d;</span>
          <!-- <input type="text" placeholder=""> -->
          输入景点/城市/主题
      </div>
      <router-link to="/city">
        <div class="header-right">
            {{city}}
           <span class="iconfont">&#xe688;</span>
        </div>
      </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'HomeHeader',
   computed:{
       // 映射 this.city 为 store.state.city
       ...mapState(['city'])
   }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    @import '~styles/mixins.styl'
    .header
        background-color: $bgColor
        display: flex
        line-height :$headerHeight
        color:#fff
        .header-left
            width: .64rem
            float: left
            .iconfont
                text-align: center
                font-size:.4rem
        .header-input
            flex: 1
            background-color: #fff
            border-radius: .1rem
            margin :.12rem 0.2rem
            padding-left: .2rem
            color: #888
        .header-right
            min-width : 1.4rem
            padding: .1rem          
            float: rightrem
            text-align: center
            color:#fff
            .iconfont
                margin-left:-.04rem
                font-size:.2rem
</style>