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
      <div class="header-right">
            {{city}}
           <span class="iconfont">&#xe688;</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'HomeHeader',
    props:['city']
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        background-color: $bgColor
        display: flex
        line-height :.86rem
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
            line-height: .62rem
            padding-left: .2rem
            color: #888
            text-align: left 
        .header-right
            width : 1.24rem
            float: right
            text-align: center
            .iconfont
                margin-left:-.04rem
                font-size:.2rem
</style>