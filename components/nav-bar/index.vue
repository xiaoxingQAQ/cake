<template>
  <div class="nav-bar">
    <view class="status_bar">
      <!-- 这里是状态栏 -->
    </view>

    <view class="cu-bar bg-white">
      <view class="action">
        <slot name="left">
          <text class="cuIcon-locationfill text-gray"></text> 北京市
        </slot>
      </view>
      <view class="content text-bold">
        <slot name="center"> MACKE </slot>
      </view>
      <view class="action">
        <slot name="right">
          <text class="cuIcon-search text-grey"></text>
          <u-line direction="col" length="30" margin="10px"></u-line>
          <text class="cuIcon-moreandroid"></text>
        </slot>
      </view>
    </view>
  </div>
</template>

<script>

export default {
  props: {},
  data: () => ({}),
  computed: {},
  methods: {},
  watch: {},

  mounted() { },
};
</script>

<style lang="scss">
.status_bar {
  height: var(--status-bar-height);
  width: 100%;
}

.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
</style>
