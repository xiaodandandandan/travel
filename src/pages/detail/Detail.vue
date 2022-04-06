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
export default {
    name:'Detail',
    components:{DetailBanner,DetailHeader,DetailList},
    data() {
        return {
            bannerInfo:{
                bannerImg:'',
                gallaryImgs:[],
                sightName:''
            },
            list:[]
        }
    },
    methods: {
        getDetailInfo(){
            axios.get('/api/detail.json',{
                params:{
                    id:this.$route.params.id
                }
            }).then(
                res=>{
                    console.log('succ',res.data);  
                    if(res.data.ret && res.data.data){
                        const data = res.data.data
                        this.list = data.categoryList
                        this.bannerInfo = {bannerImg:data.bannerImg,gallaryImgs:data.gallaryImgs,sightName:data.sightName}
                    }
                },
                err=>{
                    console.log('error',err.message);
                }
            )
        }
    },
    mounted() {
        this.getDetailInfo()
    },
}
</script>

<style lang="stylus" scoped>
    .content
        height: 10rem
</style>