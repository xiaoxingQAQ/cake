<script>
export default {
  globalData: {
    // 屏幕宽度
    screenWidth: 0,
    // 屏幕高度
    screenHeight: 0,
    // 手机的状态栏高度
    statusBarHeight: 0,
    // 导航栏的高度
    navBarHeight: 44,
    // 设备宽高比
    deviceRatio: 0,
  },
  // 只能在App.vue里监听应用的生命周期
  onLaunch: function () {
    const info = wx.getSystemInfoSync();
    // 设置屏幕宽高
    this.globalData.screenWidth = info.screenWidth;
    this.globalData.screenHeight = info.screenHeight;
    this.globalData.statusBarHeight = info.statusBarHeight;
    const deviceRatio = this.globalData.screenHeight / this.globalData.screenWidth;
    this.globalData.deviceRatio = deviceRatio;
  },
  onShow: function () {
  },
  onHide: function () {
  },
}
</script>

<style lang="scss">
/*每个页面公共css */
@import 'uview-ui/index.scss';
</style>
