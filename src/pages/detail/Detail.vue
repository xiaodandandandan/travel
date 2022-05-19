<template>
 <div>
    <DetailBanner :bannerInfo="bannerInfo"/>
    <DetailHeader/>
    <DetailList :list="list"/>
    <div class="content">

    </div>
 </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import axios from 'axios'
import {onMounted,reactive,ref} from 'vue'
import { useRoute } from 'vue-router'
export default {
    name:'Detail',
    components:{DetailBanner,DetailHeader,DetailList},
    setup(){
        const bannerInfo = reactive({
            bannerImg:'',
            gallaryImgs:[],
            sightName:''
        })
        const list =ref([])
        const route = useRoute()
        async function getDetailInfo(){
            let res = await axios.get('/api/detail.json',{
                params:{
                    id:route.params.id
                }
            })
            res = res.data
            if(res.ret && res.data){
                const data = res.data
                bannerInfo.bannerImg = data.bannerImg
                bannerInfo.gallaryImgs = data.gallaryImgs
                bannerInfo.sightName = data.sightName
                list.value = data.categoryList
               
            }
        }
        onMounted(()=>{
            getDetailInfo().catch(e=>{
                 console.log(e)
            })
        })
        return {bannerInfo,list}
    },
   
}
</script>

<style lang="stylus" scoped>
    .content
        height: 10rem
</style>