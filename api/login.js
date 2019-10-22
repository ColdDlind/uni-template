import {
	HOST
} from "./config.js"
import {
	request
} from '../untils/request'
//登录
export function login(options, showLoad) {
	let URL = HOST + "/shop/h5/open/spu/list"
	return new Promise((resolve) => {
		request(URL, "POST", options, showLoad).then(res => {
			resolve(res)
		})
	})
}
