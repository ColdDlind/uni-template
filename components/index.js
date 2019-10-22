import dlImage from "./dl_image/dl_image.vue"

const components = {
	dlImage,
}

function install(Vue, options = {}) {
	Object.keys(components).forEach(key => {
		Vue.component(key, components[key])
	})
}

export default {
	install
}
