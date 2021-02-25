import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import globalComponent from './components/globalComponent'

Vue.component('global-component', globalComponent)



new Vue({
  render: h => h(App)
}).$mount("#app");
