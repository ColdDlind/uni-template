<template>
	<view>
		<!-- #ifdef H5 -->
		<img v-lazy="url" class="image" />
		<!-- #endif -->
		<!-- #ifndef H5 -->
		<image :src="url" class="image"></image>
		<!-- #endif -->
	</view>
</template>

<script>
export default {
	props: {
		url: String,
		default: ''
	},
	data() {
		return {};
	}
};
</script>

<style scoped>
.image {
	width: 100%;
	height: 100%;
}
</style>
