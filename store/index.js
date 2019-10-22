import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let userInfo = uni.getStorageSync("userInfo")
let token = uni.getStorageSync("token")
const store = new Vuex.Store({
	state: {
		userInfo: userInfo ? userInfo : '',
		token: token ? token : ""
	},
	mutations: {
		login(state, data) {
			uni.setStorageSync('userInfo', data);
			uni.setStorageSync('token', data.token);
			state.userInfo = data
			state.token = data.token
		},
		resetToken(state, data) {
			state.token = data
		},
		logout(state) {

		}
	}
})

export default store
