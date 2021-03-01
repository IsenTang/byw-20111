import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import News from '../views/news.vue'
import Lesson from '../views/lesson.vue'

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
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router