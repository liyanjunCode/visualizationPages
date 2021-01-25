<template>
  <div class="deal-component">
    <a-button class="up-btn" type="primary" @click="clickHandler('up')">
      <UpOutlined
    /></a-button>
    <a-button class="down-btn" type="primary" @click="clickHandler('down')">
      <DownOutlined
    /></a-button>
    <a-button type="primary" @click="clickHandler('delete')"> 删除</a-button>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { DownOutlined, UpOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  props: {
    index: Number
  },
  emits: ['click'],
  setup (props, { emit }) {
    const clickHandler = (type) => {
      emit('click', {
        index: props.index,
        type
      })
    }
    return {
      clickHandler
    }
  },
  components: {
    DownOutlined,
    UpOutlined
  }
})
</script>
<style lang="scss">
.deal-component {
  position: absolute;
  //   width: 100px;
  top: 0;
  right: 0;
  display: flex;
  z-index: 50;
  button {
    margin-right: 10px;
  }
}
</style>