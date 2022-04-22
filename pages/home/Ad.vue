<template>
  <view>
    <web-view class="web-view" :src="link"></web-view>
  </view>
</template>

<script>
export default {
  props: {},
  data: () => ({
    link: '',
  }),
  computed: {},
  watch: {},
  onLoad({ link, key2, type }) {
    this.link = `${link}&key2=${key2}&type=${type}`;
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
</style>