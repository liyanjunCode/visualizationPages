<template>
  <div>
    <!-- <input-component head-title="标题设置" flag="title" :default-value="item.title" @onClick="clickHandler"></input-component>
    <input-component head-title="图片地址" flag="pic" :default-value="item.pic" @onClick="clickHandler"></input-component>
    <input-component head-title="跳转地址" flag="url" :default-value="item.url" @onClick="clickHandler"></input-component>
    <input-component head-title="内容描述" flag="des" :default-value="item.des" @onClick="clickHandler"></input-component> -->
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { useStore } from 'vuex'
// import inputComponent from "../inputComponent/index"
// 按需加载组件
export default defineComponent({
  props: {
    item:{
      type: Object,
      default: () => {}
    },
    index: Number
  },
  setup (props) {
    const store = useStore();
    const clickHandler = ({ value, flag }) => {
      store.commit('SET_BANNER_DETAIL',{
        index:props.index,
        item: {[flag]: value}
      })
    }
    return {
      clickHandler
    }
  },
  components: {
    // inputComponent
  }
})
</script>
<style lang="scss" scoped>

</style>