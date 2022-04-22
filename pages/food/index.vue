<template>
  <view>
    <u-button @click="handleClick">获取+推送</u-button>
  </view>
</template>

<script>
import { getList, pushList } from '../../service/api_food'

export default {
  data: () => ({
  }),
  methods: {
    handleClick() {
			getList({ cityId: 110, page: 1, bid: 6 }).then(res => {
				console.log(res)
				const list = res.data.list;
				const obj = {
					LuckRequests: []
				}
				list.forEach(item => {
					delete item.weight;
					obj.LuckRequests.push({
						method: 'POST',
						path: "/1.1/classes/goods",
						body: item
					})
				});
				pushList(obj).then(res => {
					console.log('res: ', res);
				})
			})
    }
  },
}
</script>

<style lang="scss">
</style>
