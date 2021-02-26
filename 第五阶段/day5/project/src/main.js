import Vue from 'vue'
import App from './App.vue'
import Utils from './common/utils'

Vue.config.productionTip = false


Vue.directive('oss-src', function (el, binding) {
    let imgURL = binding.value;//获取图片地址
    console.log('imgURL>>>>', imgURL)
    
    if (imgURL) el.setAttribute('src', Utils.ossStaticPath + imgURL);
})
  

  

new Vue({
  render: h => h(App),
}).$mount('#app')
