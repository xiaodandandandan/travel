<template>
 <div>
    <div class="title">周末去哪儿</div>
    <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
    data() {
        return {
            recommendList:[
                {
                    id:'001',
                    imgUrl:'https://img1.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_256x160_6ae804bb.jpg',
                    title:'大连圣亚海洋世界',
                    desc:'浪漫大连首站，浪漫的海浪漫.大连首站，浪漫的海.浪漫大连首站，浪漫的海'
                },
                {
                    id:'002',
                    imgUrl:'https://img1.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_256x160_6ae804bb.jpg',
                    title:'大连圣亚海洋世界',
                    desc:'浪漫大连首站，浪漫的海浪漫.大连首站，浪漫的海.浪漫大连首站，浪漫的海'
                },
                {
                    id:'003',
                    imgUrl:'https://img1.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_256x160_6ae804bb.jpg',
                    title:'大连圣亚海洋世界',
                    desc:'浪漫大连首站，浪漫的海浪漫.大连首站，浪漫的海.浪漫大连首站，浪漫的海'
                },
                {
                    id:'004',
                    imgUrl:'https://imgs.qunarzz.com/p/p67/1512/a2/0ebfcd965b9391f7.jpg_256x160_04d5813d.jpg',
                    title:'大连圣亚海洋世界',
                    desc:'浪漫大连首站，浪漫的海浪漫.大连首站，浪漫的海.浪漫大连首站，浪漫的海'
                },
                {
                    id:'005',
                    imgUrl:'https://imgs.qunarzz.com/p/p67/1512/a2/0ebfcd965b9391f7.jpg_256x160_04d5813d.jpg',
                    title:'大连圣亚海洋世界',
                    desc:'浪漫大连首站，浪漫的海浪漫.大连首站，浪漫的海.浪漫大连首站，浪漫的海'
                },
            ]
        }
    },
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