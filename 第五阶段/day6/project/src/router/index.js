import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import News from '../views/news.vue'
import Lesson from '../views/lesson.vue'
import Ybkc from '../views/workView/ybkc'
import Qwxk from '../views/workView/qwxk'
import Bcrm from '../views/workView/bcrm'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        redirect: '/about' // 重定向
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        alias: '/abcd' // 别名
    },
    {
        path: '/news',
        name: 'news',
        component: News
    },
    {
        path: '/lesson/:id',
        name: 'lesson',
        component: Lesson
    },
    {
        path: '/qwxk',
        name: 'qwxk',
        component: Qwxk
    },
    {
        path: '/ybkc',
        name: 'ybkc',
        component: Ybkc
    },
    {
        path: '/bcrm',
        name: 'bcrm',
        component: Bcrm
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router