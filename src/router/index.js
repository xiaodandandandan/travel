import VueRouter from 'vue-router'
import Home from '../pages/home/Home'

export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        }
    ]
})