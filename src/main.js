import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import DynamicElementMenu from './plugins/DynamicElementMenu'
import './plugins/element.js'

Vue.use(ElementUI)
Vue.use(DynamicElementMenu)
Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
