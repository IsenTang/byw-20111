import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
        // 命名视图
        // components: {
        //     default: Home,
        //     view2: About
        // }
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue'),
        beforeEnter: (to, from, next) => {
            console.log('路由独享守卫 to>>>>', to)
            console.log('路由独享守卫 from>>>>', from)
            next();
        }
    },
    {
        path: '/contact/:id',
        name: 'contact',
        component: () => import('../views/contact.vue')
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('../views/user.vue'),
        redirect: { name: 'lesson' },
        children: [
            {
                path: 'lesson',
                name: 'lesson',
                component: () => import('../views/lesson.vue')
            },
            {
                path: 'email',
                name: 'email',
                component: () => import('../views/email.vue')
            },
            {
                path: 'set',
                name: 'set',
                component: () => import('../views/set.vue'),
                meta: {
                    isQuit: true
                },
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router