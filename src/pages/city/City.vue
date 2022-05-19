<template>
    <div>
        <CityHeader/>
        <CitySearch :cities="data.cities"/>
        <CityList 
            :hot = "data.hotCities" 
            :cities = "data.cities"
            :letter = "letter"
        />
        <CityAlphabet 
            :cities = "data.cities"
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
import {reactive,onMounted,ref} from 'vue'
export default {
    name:'City',
    components:{CityHeader,CitySearch,CityList,CityAlphabet},
    setup(){
        const {letter,handleLetterChange} = useLetterLogic()
        const { data } = useCityLogic()
        return {data,handleLetterChange,letter}
    }
    
}
function useCityLogic(){
    const data = reactive({
        cities:{},
        hotCities:[]
    })
    
    async function getCityInfo(){
        let res = await axios.get('/api/city.json')
        res = res.data
        //console.log(res)
        if(res.ret && res.data){
            const result = res.data
            data.cities = result.cities
            data.hotCities = result.hotCities
        }  
    }
    onMounted(()=>{
        getCityInfo()
    })
    return {data}
}

function useLetterLogic(){
    const letter = ref('')
    function handleLetterChange(selected){
        letter.value = selected
    }
     return { letter, handleLetterChange }
}
</script>

<style lang="stylus" scoped>

</style>>

