<template>
  <div>
      <div class="search">
        <input 
            class="search-input" 
            type="text" 
            placeholder="输入城市名或拼音"
            v-model="keyword"
        >
      </div>
      <div 
        class="search-content" 
        ref="search"
        v-show="keyword"
      >
        <ul>
            <li 
                class = "list-item border-bottom"
                v-for="item of list" 
                :key="item.id"
            >
            {{item.name}}
            </li>
            <li class = "list-item border-bottom" v-if="hasNodata">没有匹配的数据</li>
        </ul>
      </div>
      
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'CitySearch',
    props:['cities'],
    data() {
        return {
            keyword:'',
            timer:null,
            list:[]
        }
    },
    watch:{
        keyword(){
            if(this.timer){
                clearTimeout(this.timer)
            }
             if(!this.keyword){
                this.list = []
                return
            } 
            this.timer = setTimeout(()=>{
                const result = []
                for(let key in this.cities){
                     this.cities[key].forEach(el => {
                        if(el.name.indexOf(this.keyword) > -1 || el.spell.indexOf(this.keyword) > -1){
                            result.push(el)
                        } 
                     })
                }
                this.list = result
            })
        }
    },
    computed:{
        hasNodata(){
            return !this.list.length
        }
    },
    mounted() {
        this.scroll = new Bscroll(this.$refs.search) 
    },
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .border-bottom
        &:after
            border-color: #ccc
    .search
        height:.72rem
        padding: 0 1rem
        background-color: $bgColor
        .search-input
            height: .62rem
            width: 100%
            padding: 0 .1rem
            line-height: .62rem
            border-radius: .06rem
            text-align: center
            color:#666
    .search-content
        z-index:1
        overflow: hidden
        position: absolute
        top: 1.58rem
        left:0
        right: 0
        bottom: 0
        background-color: #eee
        .list-item
            background-color: #fff
            padding-left: .2rem
            line-height: .62rem
</style>