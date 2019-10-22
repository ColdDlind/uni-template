import store from '../store/index.js'
export function request(url, method, data, show = true) {
	if (show) {
		uni.showLoading({
			title: "正在加载中...",
			mask: true
		})
	}
	return new Promise((resolve, reject) => {
		uni.request({
			url: url,
			method: method,
			data: data,
			header: {
				"token": store.state.token ? store.state.token : "",
				"content-type": "application/x-www-form-urlencoded"
			},
			success: (res) => {
				if (res.header.hasOwnProperty("token")) {
					store.commit("resetToken", res.header.token)
				}
				if (res.data.code == "SUCCESS") {
					resolve(res)
				} else {
					uni.showToast({
						title: res.data.message,
						duration: 2000,
						icon: "none"
					})
					reject(res.data.message)
				}
			},
			complete: () => {
				if (show) {
					uni.hideLoading()
				}
			},
		});
	})

}
