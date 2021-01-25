<template>
  <div class="input-size">
    <p class="title">{{ title }}</p>
    <a-input
      v-model:value="value"
      placeholder="请输入字体大小"
      :max-length="20"
      style="width: 120px"
      @change="changeHandler"
    />
  </div>
</template>
<script>
import { defineComponent, reactive, toRefs } from 'vue';
// 按需加载组件
export default defineComponent({
  props: {
    title: String
  },
  setup (props, { emit }) {
    const state = reactive({ value: '' });
    const changeHandler = () => {
      console.log(state.value, "state.value")
      emit("update:modelValue", state.value + 'px')
    }
    return {
      changeHandler,
      ...toRefs(state)
    }
  }
})
</script>
<style lang="scss" scoped>
.input-size {
  padding: 20px;
  display: flex;
  align-items: center;
  .title {
    margin-right: 5px;
    font-size: 18px;
    color: #000;
  }
}
</style>