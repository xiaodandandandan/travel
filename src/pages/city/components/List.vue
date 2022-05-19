<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{city}}</div>
                    </div>
                </div>        
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list" >
                    <div 
                        class="button-wrapper" 
                        v-for="item of hot" 
                        :key="item.id"
                        @click = "handleCityClick(item.name)"
                    >
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>  
            </div>
            <div 
                class="area" 
                v-for="(item,key) of cities" 
                :key="key"
                :ref="elem => elems[key] = elem" 
            >
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div
                        v-for="innerItem of item" 
                        :key="innerItem.id"
                        class="item border-bottom"
                        @click = "handleCityClick(innerItem.name)"
                    >
                        {{innerItem.name}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import {useStore} from 'vuex'
import {onMounted,reactive,ref,onUpdated,watch} from 'vue'
import {useRouter} from 'vue-router'
export default {
    name:'CityList',
    props:['hot','cities','letter'],
    setup(props){
        const store = useStore()
        const router = useRouter()
        const city = store.state.city
        const elems = ref({})
        let scroll = null
        const wrapper = ref(null)
        function handleCityClick(city){
            store.commit('changeCity',city)
            router.push('/')
       }
       watch(()=>props.letter,(letter,preLetter)=>{
            if (letter && scroll) {
                const element = elems.value[letter]
                scroll.scrollToElement(element)
            }
       })
        onMounted(()=>{
            scroll = new BScroll(wrapper.value,{
                click:true
            })
        })
        onUpdated(()=>{
            scroll.refresh()
        })
        return {city,handleCityClick,elems,wrapper}
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .border-topbottom
        &:before
            border-color: #ccc
        &:after
            border-color: #ccc
    .border-bottom
        &:before
            border-color: #ccc
    .wrapper
        overflow: hidden
        position: absolute
        top: 1.58rem
        left:0
        right: 0
        bottom: 0
        .title
            line-height: .54rem
            background-color: #eee
            padding-left: .2rem
            color:#666
            font-size:.26rem
        .button-list
            overflow: hidden
            padding: .1rem .6rem .1rem .1rem
            .button-wrapper
                float: left
                width: 33.33%
                .button
                    margin: .1rem
                    padding: .1rem 0
                    text-align: center
                    border: .02rem solid #ccc
                    border-radius: .06rem
        .item-list
            .item
                padding-left: .2rem
                line-height: .76rem
                color:#666

</style>