<template>
  <view class="tabs-wrapper">
    <view class="tabs">
      <block v-for="(item, index) in list" :key="index">
        <text @click="handleItemClick(index)" :class="['tabs-item', {active: index == curIndex }]">{{ item }}</text>
      </block>
    </view>
  </view>
</template>

<script>

export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    curIndex: 0, // 高亮的tab
  }),
  computed: {},
  methods: {
    handleItemClick(index) {
      this.curIndex = index;
    }
  },
  watch: {},

  // 组件周期函数--监听组件挂载完毕
  mounted() {},
  // 组件周期函数--监听组件数据更新之前
  beforeUpdate() {},
  // 组件周期函数--监听组件数据更新之后
  updated() {},
  // 组件周期函数--监听组件激活(显示)
  activated() {},
  // 组件周期函数--监听组件停用(隐藏)
  deactivated() {},
  // 组件周期函数--监听组件销毁之前
  beforeDestroy() {},
};
</script>

<style lang="scss">
.tabs-wrapper {
  padding: 0 10upx;
  width: 100%;
  height: 88upx;
  line-height: 88upx;
  background-color: #fff;
}

.tabs {
  display: flex;
  justify-content: space-around;
  align-items: center;
  .tabs-item {
    display: grid;
    place-items: center;
    width: calc(100% / 4);

    &.active {
      color: #ff6700;
    }
  }
}
</style>
