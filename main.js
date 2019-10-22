import Vue from 'vue'
import App from './App'
// #ifdef H5
import VueLazyload from './plugins/vue-lazyload/vue-lazyload.js'
Vue.use(VueLazyload, {
	preLoad: 1.3,
	error: '../static/img/error.jpg',
	loading: '../static/img/loading.gif',
	attempt: 1
})
// #endif
import store from './store'
import DLPUGLIN from './components/index.js'
Vue.use(DLPUGLIN,{})
Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
