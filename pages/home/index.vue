<template>
  <view class="home">
    <!-- 自定义导航栏 -->
    <nav-bar />

    <!-- <scroll-view
      class="scroll-view"
      :scroll-top="scrollTop"
      scroll-y="true"
      @scroll="handleScroll"
    >
      
    </scroll-view> -->

    <swiper
      indicator-dots
      indicator-active-color="#ffe32e"
      autoplay
      :style="'height:' + swiperHeight + 'px'"
    >
      <swiper-item
        v-for="(item, index) in bannerList"
        :key="item.objectId"
        @click="handleToAD(item)"
      >
        <image
          id="swiper-image"
          @load="handleSwiperImageLoaded"
          class="image"
          :src="item.image"
          mode="widthFix"
        ></image>
      </swiper-item>
    </swiper>

    <home-item :list="list">
      <template #title>
        <home-item-title>
          <template #left>
            <image
              class="home-item-image"
              src="https://h5.mcake.com/static/images/icon_cj.png"
              mode="widthFix"
            />
          </template>
          <template #center>
            <view> <text class="bold">本季</text>推荐 </view>
            <text>Seasonal Recommend</text>
          </template>
        </home-item-title>
      </template>
    </home-item>
    <home-item :list="list">
      <template #title>
        <home-item-title>
          <template #left>
            <image
              class="home-item-image"
              src="https://h5.mcake.com/static/images/icon_cj.png"
              mode="widthFix"
            />
          </template>
          <template #center>
            <view> <text class="bold">本季</text>推荐 </view>
            <text>Seasonal Recommend</text>
          </template>
        </home-item-title>
      </template>
    </home-item>

    <!-- 回到顶部 -->
    <transition name="fade-transform" mode="in-out">
      <view v-show="backToTop" class="back-to-top" @click="handleBackToTop">
        <text class="iconfont icon-tubiao_fanhuidingbu"></text>
      </view>
    </transition>
  </view>
</template>

<script>
// 引入组件
import HomeItem from '../../components/home-item/home-item'
import HomeItemTitle from '../../components/home-item/home-item-title'
// 引入接口
import { getClassify, getBannerList } from '../../service/api_home'

import { selectorQuery, throttle, getPlatform } from '../../utils'
const throttleSelectorQuery = throttle(selectorQuery, 50, { leading: false, trailing: true })

export default {
  components: {
    HomeItem,
    HomeItemTitle
  },
  data: () => ({
    clientWidth: 0,
    swiperHeight: 0,
    bannerList: [],
    list: [],
    scrollTop: 0,
    backToTop: false,
  }),
  computed: {},
  watch: {},
  // 页面周期函数--监听页面加载
  async onLoad() {
    getBannerList().then(res => {
      this.bannerList = res.results
    })

    this.list = [
      {
        url: 'https://mcake-oss.oss-cn-hangzhou.aliyuncs.com/file/3cd772bd91f92834/a012a9e872b7d98b.jpg'
      },
      {
        url: 'https://mcake-oss.oss-cn-hangzhou.aliyuncs.com/file/34e143696883030f/e172a6c1367f413e.jpg'
      },
      {
        url: 'https://mcake-oss.oss-cn-hangzhou.aliyuncs.com/file/04d96d3e7efcbeb1/e85cc61b1a1fac6f.jpg'
      },
    ]
  },
  onShow() {
    let titleBarHeight = (uni.getMenuButtonBoundingClientRect().top - uni.getSystemInfoSync().statusBarHeight) * 2 +
    uni.getMenuButtonBoundingClientRect().height;
    console.log('titleBarHeight', titleBarHeight);
    // this.gao = uni.getSystemInfoSync().statusBarHeight + titleBarHeight
    // this.gao = 'height:' + this.gao + 'px'
  },
  methods: {
    /* 监听轮播图图片加载完成 */
    handleSwiperImageLoaded() {
      throttleSelectorQuery('#swiper-image').then(res => {
        this.swiperHeight = res.height;
      })
    },
    /* 监听页面滚动 */
    handleScroll(event) {
      const scrollTop = event.detail.scrollTop;
      this.scrollTop = scrollTop;
      if (scrollTop > 100) {
        this.backToTop = true;
      } else {
        this.backToTop = false;
      }
    },
    /* 跳转到广告页 */
    handleToAD(item) {
      console.log('item: ', item);
      console.log(111);
      uni.navigateTo({
        url: `/pages/home/Ad?link=${item.link}`
      })
    },

    /* 回到顶部 */
    handleBackToTop() {
      this.$nextTick(() => {
        this.scrollTop = 0
      });
    },
  },
};
</script>

<style lang="scss">
.bold {
  font-weight: bold;
}

.image {
  width: 100%;
}

.home-item-image {
  width: 65%;
}

.scroll-view {
  height: calc(100vh - 100upx);
}

.back-to-top {
  display: grid;
  place-items: center;

  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 999;
  width: 50px;
  height: 50px;

  border-radius: 50%;
  background-color: #fff;
  text-align: center;
  line-height: 50px;
  font-size: 30px;
  color: #333;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .iconfont {
    color: #888;
    font-size: 26px;
    font-weight: bold;
  }
}

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter,
.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
