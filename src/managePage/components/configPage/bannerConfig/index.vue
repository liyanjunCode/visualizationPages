<template>
  <div class="banner">
    <div class="content">
      <h2 class="title">内容设置</h2>
      <div class="content-wrap"  v-for="(item, index) in data" :key="item.pic">
        <div>
          <p>内容{{index+1}}</p>
          <banner-content :item ="item" :index="index"></banner-content>
        </div>
      </div>
      <a-button type="primary" size="large" @click="addContent">添加内容</a-button>
    </div>
   <div class="config">
      <h2 class="title">样式设置</h2>
      <banner-style :config="config"></banner-style>
    </div>
  </div>
</template>
<script>
import { defineComponent, computed } from 'vue';
import bannerContent from "../../bannerContent/index"
import bannerStyle from "../../bannerStyle/index"
import { useStore } from 'vuex'
// 按需加载组件
export default defineComponent({
  props: {
    configData: {
      type:Object,
      default: () =>{}
    }
  },
  setup (props) {
    const store = useStore();
    const curIndex = computed(() => { return store.state.curIndex; })
    const addContent = () => {
      store.commit("SET_BANNER_CONTENT", {
        template: "banner_template",
        index:curIndex.value
      })
    }
    return {
      data: props.configData.data,
      config: props.configData.config,
      addContent
    }
  },
  components: {
    bannerContent,
    bannerStyle
  }
})
</script>
<style lang="scss" scoped>
.title {
  padding-top: 20px;
  font-weight: bold;
  color: #000;
  font-size: 30px;
}
</style>