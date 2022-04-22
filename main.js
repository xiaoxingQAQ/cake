import Vue from 'vue'
import App from './App'
import store from './store'
// import "./colorui/main.css";
// import "./colorui/icon.css";
// import "./static/css/iconfont.css";
import uView from 'uview-ui'
import monitor from './utils/monitor'

import CakeItem from './components/cake-item'
import NavBar from './components/nav-bar'

monitor()


Vue.component('CakeItem', CakeItem)
Vue.component('NavBar', NavBar)

Vue.use(uView)

Vue.prototype.$bus = new Vue()

// #ifndef VUE3
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App,
    store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif