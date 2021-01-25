<template>
  <div class="input-color">
    <p class="title">{{ title }}</p>
    <input type="color" @change="changeHandler" />
  </div>
</template>
<script>
import { defineComponent } from 'vue';
// 按需加载组件
export default defineComponent({
  props: {
    title: String
  },
  setup (props, { emit }) {
    const changeHandler = (event) => {
      emit("update:modelValue", event.target.value)
    }
    return {
      changeHandler
    }
  }
})
</script>
<style lang="scss" scoped>
.input-color {
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