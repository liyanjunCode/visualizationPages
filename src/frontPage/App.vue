

<template>
  <div>
    <div class="items" v-for="(item, index) in pageData" :key="index">
      <banner
        v-if="item.template === 'banner_template'"
        :data="item.data"
        :config="item.config"
      ></banner>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import getComponent from "@/common/assets/js/import"
console.log(getComponent("@/common/component"))
export default defineComponent({
  setup () {
    const pageData = [
      {
        template: 'banner_template',
        data: [
          {
            url: "www.baidu.com",
            pic: "https://pic12.secooimg.com/product/374/374/2020/1119/5ac955d520a94d2383276c7da5aaf1ba.jpg",
            title: "轮播图标题",
            des: "轮播图描述萨达萨达撒大V"
          }
        ],
        config: {
          'show-indicators': true,
          'indicator-color': "#1989fa",
          'loop': true,
          'autoplay': '3000',
          'duration': '500',
          'initial-swipe': 0,
          'width': '100%',
          'height': '200',
          'lazy-render': false,
          'stop-propagation': true,
          'vertical': false,
          style: {
            title: {

            },
            des: {

            }
          }
        }
      }
    ]
    return {
      pageData
    }
  },
  components: getComponent("@/common/component")
})
</script>
<style lang="scss">
html {
  overflow: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
