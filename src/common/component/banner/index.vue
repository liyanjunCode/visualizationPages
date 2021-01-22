<template>
  <div class="banner">
    <van-swipe autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { Swipe, SwipeItem } from 'vant';
export default defineComponent({
  setup () {
    const data = [
      { name: 'banner', path: "/a" },
      { name: '倒计时', path: "/b" },
    ]
    return {
      data
    }
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  }
})
</script>
<style lang="scss">
.banner {
  height: 200px;
}
.van-swipe {
  height: 200px;
}
</style>