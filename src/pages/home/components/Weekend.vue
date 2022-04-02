<template>
 <div>
    <div class="title">周末去哪儿</div>
    <ul>
        <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
            <div class="item-img-wrapper">
                <img class="item-img" :src="item.imgUrl">
            </div>
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
            </div>
        </li>
    </ul>
 </div>
</template>

<script>
export default {
    name:'HomeWeekend',
    props:['weekendList']
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
        margin-top: .2rem 
        line-height: .8rem
        background-color: #eee
        text-indent:.2rem
    .item-img-wrapper
        overflow: hidden
        height: 0
        padding-bottom: 37.09%
        .item-img
            width: 100%
    .item-info
        padding: .1rem
        min-width 0
        .item-title
            height: .54rem
            font-size: 0.32rem
        .item-desc 
            line-height: .4rem
            color: #999
            ellipsis()
        .item-button
            line-height:.44rem
            margin-top: .16rem
            background-color: #ff9300
            padding:0 .1rem
            border-radius: .06rem 
            color:#fff

</style>