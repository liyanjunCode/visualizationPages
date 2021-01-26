<template>
  <div>
    <div class="set-title">
      <h2>标题设置</h2>
      <input-color title="字体颜色" v-model="title.titleColor"></input-color>
      <input-size title="字体大小" v-model="title.titleSize"></input-size>
      <input-size title="行高尺寸" v-model="title.titleLineHeight"></input-size>
    </div>
    <div class="set-title">
      <h2>描述设置</h2>
      <input-color title="字体颜色" v-model="des.titleColor"></input-color>
      <input-size title="字体大小" v-model="des.desSize"></input-size>
      <input-size title="行高尺寸" v-model="des.desLineHeight"></input-size>
    </div>
    <a-button type="primary" size="large" @click="setStyle">确定</a-button>
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue';
import { useStore } from 'vuex'
import inputColor from "../inputColor/index";
import inputSize from "../inputSize/index";
// 按需加载组件
export default defineComponent({
  props: {
    config: {
      type: Object,
      default: () => { }
    }
  },
  setup () {
    const store = useStore();
    // 样式未修改的都走默认样式
    const state = reactive({
      title: {
        titleColor: '#ccc',
        titleSize: '20px',
        titleLineHeight: '20px',
      },
      des: {
        desColor: '#ccc',
        desSize: '20px',
        desLineHeight: '20px'
      }
    })
    // 提交样式修改结果
    const setStyle = () => {
      store.commit("SET_BANNER_STYLE", {
        title: state.title,
        des: state.des
      })
    }
    return {
      setStyle,
      ...toRefs(state)
    }
  },
  components: {
    inputColor,
    inputSize
  }
})
</script>
<style lang="scss" scoped>
h2 {
  font-size: 20px;
}
</style>