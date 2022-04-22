<template>
  <view @click="handleItemClick" class="cake-item" :style="itemStyle">
    <view class="poster">
      <image v-if="item.img" class="image" :src="item.img" mode="widthFix" />
      <text class="text flex justify-center align-center" v-else
        >加载中...</text
      >
    </view>
    <view class="info-wrapper">
      <view class="info">
        <view class="title-wrapper">
          <view class="title">
            <view class="fs-22">{{ item.name }}</view>
            <view class="fs-16">{{ item.french }}</view>
          </view>
          <text class="iconfont icon-gouwuche"></text>
        </view>
        <view v-if="item.price" class="fs-18">
          <text class="fs-14">￥</text>
          <text>{{ item.price }}</text>
        </view>
      </view>

      <view class="cart-btn"></view>
    </view>
  </view>
</template>

<script>

export default {
  name: 'CakeItem',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    clientWidth: 0, // wrapper的宽度
    itemMargin: 5, // item的margin
  }),
  computed: {
    itemStyle() { // cakeItem的动态样式
      const margin = this.itemMargin;
      const width = this.clientWidth / 2 - margin * 2;
      return {
        width: width + 'px',
        margin: margin + 'px'
      }
    },
    
  },
  created() {
    let width = getApp().globalData.screenWidth
    this.clientWidth = width;
  },
  methods: {
    handleItemClick() {
      this.$emit('itemClick');
    },
  },
};
</script>

<style lang="scss">
.cake-item {
  box-sizing: border-box;

  .poster {
    border-radius: 12upx;
    overflow: hidden;

    .image {
      width: 100%;
    }

    .text {
      width: 100%;
      height: 100%;
      background-color: rgb(222, 220, 220);
      font-weight: 500;
      color: #000;
    }
  }

  .title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .iconfont {
      display: flex;
      justify-content: center;
      align-items: center;

      margin-right: 20upx;
      width: 70upx;
      height: 70upx;
      font-size: 36upx;

      font-weight: 600;
      border-radius: 50%;
      background-color: #ffe32a;
    }

    .title {
      flex: 1;
      overflow: hidden;
    }
  }

  .fs-22 {
    margin-top: 20upx;
  }

  .fs-16 {
    margin-top: 10upx;
    margin-bottom: 10upx;
    // 超出部分省略
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .fs-18 {
    margin-top: 10upx;
    margin-bottom: 10upx;
  }
}
</style>
