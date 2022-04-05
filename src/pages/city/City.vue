<template>
    <div>
        <CityHeader/>
        <CitySearch/>
        <CityList 
            :hot = "hotCities" 
            :cities = "cities"
            :letter = "letter"
        />
        <CityAlphabet 
            :cities = "cities"
            @change = "handleLetterChange"
        />
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
export default {
    name:'City',
    data() {
        return {
            cities:{},
            hotCities:[],
            letter:''
        }
    },
    components:{CityHeader,CitySearch,CityList,CityAlphabet},
    methods: {
        getCityInfo(){
            axios.get('/api/city.json').then(
                res=>{
                    //console.log('succ',res.data)
                    if(res.data.ret && res.data.data){
                        const data = res.data.data
                        this.cities = data.cities
                        this.hotCities = data.hotCities
                    }
                },
                err=>{
                    console.log('error',err.message);
                }
            )
        },
        handleLetterChange(letter){
            this.letter = letter
        }
    },
    mounted() {
        this.getCityInfo()
    },
}
</script>

<style lang="stylus" scoped>

</style>>

