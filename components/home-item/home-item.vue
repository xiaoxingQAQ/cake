<template>
  <view class="home-item" id="wrapper">
    <slot name="title"></slot>
    <slot name="content">
      <view>
        <scroll-view
          :style="'height:' + scrollViewHeight + 'px'"
          class="scroll-view"
          scroll-x="true"
          scroll-left="120"
        >
          <image
            class="image"
            v-for="(item, index) in list"
            :key="index"
            :src="item.url"
            mode="heightFix"
          />
        </scroll-view>
      </view>
    </slot>
  </view>
</template>

<script>
export default {
  name: 'homeItem',
  components: {
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    }
  },
  data: () => ({
    scrollViewHeight: 0,
  }),
  computed: {},
  methods: {
  },
  watch: {},
  async mounted() {
    const screenWidth = getApp().globalData.screenWidth;
    let width = screenWidth
    const height = width / 2.5;
    this.scrollViewHeight = height;
  },
};
</script>

<style lang="scss">
::v-deep .uni-scroll-view-content {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}

.image {
  height: 100%;
}
</style>
