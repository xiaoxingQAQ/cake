<template>
  <view class="wrapper">
    <nav-bar />
    <tabs :list="tabList" />
    
    <view class="cake">
      <block v-for="(item, index) in list" :key="index">
        <cake-item @itemClick="handleToDetail" :item="item" />
      </block>
    </view>
  </view>
</template>

<script>
import { getGoodsList } from '../../service/api_classify'
import Tabs from '../../components/tabs'

export default {
  components: { Tabs },
  data: () => ({
    list: [],
    tabList: ['蛋糕', '面包' , '小食']
  }),
  async onLoad() {
    const res = await getGoodsList()
    this.list = res.results;
  },
  methods: {
    handleToDetail() {
      uni.navigateTo({
        url: `/pages/detail/index?id=${111}`
      })
    },
  },
}
</script>

<style lang="scss">
.wrapper {
  padding-top: 100upx !important;
}

.cake {
  display: flex;
  flex-wrap: wrap;
}

.tabs {
  width: 100%;
  height: 88upx;
  position: fixed;
  top: 100upx;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: #fff;
  z-index: 100;
}
</style>
