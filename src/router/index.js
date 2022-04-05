import VueRouter from 'vue-router'
import Home from '../pages/home/Home'
import City from '../pages/city/City'

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/city',
            component:City
        }
    ]
})