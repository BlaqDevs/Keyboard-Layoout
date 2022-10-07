import Vue from 'vue'
import App from './App.vue'
// import './tailwind.css'
import keyboardPlugin from "./keyboardPlugin";

Vue.use(keyboardPlugin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
