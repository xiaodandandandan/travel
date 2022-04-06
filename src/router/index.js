import VueRouter from 'vue-router'
import Home from '../pages/home/Home'
import City from '../pages/city/City'
import Detail from '../pages/detail/Detail'
export default new VueRouter({
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/city',
            component:City
        },
        {
            path:'/detail/:id',
            component:Detail
        }
    ],
    scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
})