<template>
  <div>
    <input-component v-for="(value, key) in item" :key="key" :head-title="state[key]" :flag="key" :default-value="value" @onClick="clickHandler"></input-component>
  </div>
</template>
<script>
import { defineComponent, reactive } from 'vue';
import { useStore } from 'vuex'
import inputComponent from "../inputComponent/index"
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
    const state = reactive({
      url:"跳转页面链接",
      pic:"图片链接",
      title:"标题设置",
      des:"内容设置"
    })
    const clickHandler = ({ value, flag }) => {
      store.commit('SET_BANNER_DETAIL',{
        index:props.index,
        item: {[flag]: value}
      })
    }
    return {
      clickHandler,
      state
    }
  },
  components: {
    inputComponent
  }
})
</script>
<style lang="scss" scoped>

</style>