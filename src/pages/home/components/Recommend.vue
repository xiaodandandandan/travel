<template>
 <div>
    <div class="title">热销推荐</div>
    <ul>
        <li class="item" v-for="item of recommendList" :key="item.id">
            <img class="item-img" :src="item.imgUrl">
            <div class="item-info">
                <p class="item-title">{{item.title}}</p>
                <p class="item-desc">{{item.desc}}</p>
                <button class="item-button">查看详情</button>
            </div>
        </li>
    </ul>
 </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    props:['recommendList'],
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
        line-height: .8rem
        background-color: #eee
        text-indent:.2rem
    .item
        overflow hidden
        display: flex
        height:1.9rem
        padding:.1rem
        .item-img
            width: 1.7rem
            height: 1.7rem
            padding: .1rem
        .item-info
            flex:1
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