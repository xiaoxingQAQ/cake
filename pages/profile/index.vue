<template>
  <view class="profile-page">
    <view class="bg-fff info">
			<view class="flex flex-direction align-center">
				<image class="avatar" src="/static/logo.png" mode="widthFix" />
				<text class="nickname">luck</text>
			</view>
      <view class="flex grid">
        <view v-for="(item, index) in menuList" :key="index" class="menu-item flex flex-direction align-center padding">
          <text :class="['iconfont', 'margin-bottom-xs', item.icon]"></text>
          <text>{{ item.name }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          icon: 'icon-danju',
          name: '我的订单'
        },
        {
          icon: 'icon-jifen',
          name: '待收货'
        },
        {
          icon: 'icon-ziliaoshouce',
          name: '待付款'
        },
        {
          icon: 'icon-vip-fill',
          name: '会员等级'
        }
      ],
    };
  }
}
</script>

<style lang="scss">
page {
  background-color: #f6f6f6;
}

.info {
	transform: translateY(50%);
}

.avatar {
	width: 100upx;
	border-radius: 50%;
	transform: translateY(-50%);
}

.nickname {
	transform: translateY(-30upx);
}

.menu-item {
	width: calc(100% / 4);
}

.grid .iconfont {
  font-size: 80upx;
  color: #888;
}
</style>
