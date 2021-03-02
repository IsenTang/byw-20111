import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


// 全局前置守卫
router.beforeEach((to, from, next) => {
    console.log('beforeEach to>>>>>', to)
    console.log('beforeEach from>>>', from)
    if (to.name === 'lesson') {
        let isLogin = localStorage.getItem('isLogin')
        if (isLogin) {
            next();
        } else {
            next({
                name: 'set'
            })
        }
        // console.log('课程页面未开放，暂时不能进！！！')
        // next(false);
    } else {
        next();
    }
})

router.afterEach((to, from) => {
    console.log('afterEach to', to)
    console.log('afterEach from', from)
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
