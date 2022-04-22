<template>
  <div class="home-item-title">
    <view class="content">
      <view class="left">
        <slot name="left"></slot>
      </view>
      <view class="center">
        <slot name="center">center</slot>
      </view>
      <view class="right">
        <slot name="right"></slot>
      </view>
    </view>
  </div>
</template>

<script>

export default {
  name: 'homeItemTitle',
  props: {},
  data: () => ({

  }),
  computed: {},
  methods: {},
  watch: {},
};
</script>

<style lang="scss">
.home-item-title {
  box-sizing: border-box;
  padding: 80upx 60upx;
  
  background-color: #fff;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 76upx;

    .left {
      width: 170upx;
    }

    .center {
      flex: 1;
    }

    .right {
      width: 150upx;
    }
  }
}
</style>
