import {createRouter,createWebHashHistory} from 'vue-router'
import Home from '../pages/home/Home.vue'
import City from '../pages/city/City.vue'
import Detail from '../pages/detail/Detail.vue'

export default new createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'/',
            name:'Home',
            meta: {
                keepAlive: true,
            },
            component:Home
        },
        {
            path:'/city',
            name:'City',
            meta: {
                keepAlive: true,
            },
            component:City
        },
        {
            path:'/detail/:id',
            name:'Detail',
            meta:{
                keepAlive:false
            },
            component:Detail
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        if (to.name === 'Detail' ) {
            return { top: 0 };
        }
        return savedPosition;
    }
})