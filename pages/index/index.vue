<template>
	<view class="content">
		<dl-image class="logo" url="/static/logo.png"></dl-image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
	import { login } from '../../api/login.js';
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			this._getList()
		},
		methods: {
			_getList(){
				login({}).then(res=>{
					console.log(res)
				})
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
