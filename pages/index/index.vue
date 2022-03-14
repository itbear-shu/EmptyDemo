<template>
	<view>
		{{vuex_user}}
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			this.getAll()
		},
		methods: {
			async getAll() {
				const res = await this.$u.api.getAll()
				console.log(res)
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
