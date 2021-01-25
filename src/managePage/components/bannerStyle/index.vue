<template>
  <div>
    <div class="set-title">
      <h2>标题设置</h2>
      <input-color title="字体颜色" v-model="titleColor"></input-color>
      <input-size title="字体大小" v-model="titleSize"></input-size>
      <input-size title="行高尺寸" v-model="titleLineHeight"></input-size>
    </div>
    <div class="set-title">
      <h2>描述设置</h2>
      <input-color title="字体颜色" v-model="titleColor"></input-color>
      <input-size title="字体大小" v-model="desSize"></input-size>
      <input-size title="行高尺寸" v-model="desLineHeight"></input-size>
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
    const state = reactive({
      titleColor: '#ccc',
      desColor: '#ccc',
      titleSize: '20px',
      desSize: '20px',
      titleLineHeight: '20px',
      desLineHeight: '20px'
    })
    const setStyle = () => {
      store.commit("SET_BANNER_STYLE", {
        title: {
          color: state.titleColor,
          'font-size': state.titleSize,
          'line-height': state.titleLineHeight
        },
        des: {
          color: state.desColor,
          'font-size': state.desSize,
          'line-height': state.desLineHeight
        }
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