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
                @click="handleCityClick(item.name)"
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
import {ref,watch,onMounted,computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
export default {
    name:'CitySearch',
    props:['cities'],
    setup(props){
        const keyword = ref('')
        const list = ref([])
        let timer = null
        let scroll = null
        const search = ref(null)
        const hasNodata = computed(() => {
            !list.value.length
        })

        onMounted(()=>{
            scroll = new Bscroll(search.value)
        })
        const store = useStore()
        const router = useRouter()
        function handleCityClick(city){
            store.commit('changeCity',city)
            router.push('/')
       }

       watch(keyword,(keyword,preKeyword)=>{
           if(timer){
                clearTimeout(timer)
            }
             if(!keyword){
                list.value = []
                return
            } 
            timer = setTimeout(()=>{
                const result = []
                for(let key in props.cities){
                     props.cities[key].forEach(el => {
                        if(el.name.indexOf(keyword) > -1 || el.spell.indexOf(keyword) > -1){
                            result.push(el)
                        } 
                     })
                }
                list.value = result
            })
       })
        return {keyword,list,hasNodata,search,handleCityClick}
    }
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