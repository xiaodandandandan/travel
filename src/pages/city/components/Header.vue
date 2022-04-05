<template>
  <div class="header">
      城市选择
      <router-link to="/">
        <div class="iconfont header-back">&#xe685;</div>
      </router-link>
  </div>
  
</template>

<script>
export default {
    name:'CityHeader'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        position: relative
        overflow: hidden
        line-height :$headerHeight
        background-color: $bgColor
        text-align: center
        font-size:.32rem
        color:#fff
        .header-back
            color:#fff
            position: absolute
            width .64rem
            top:0
            left:0
</style>

