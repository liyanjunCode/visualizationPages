<template>
  <div class="banner">
    <van-swipe
      :autoplay="config.autoplay"
      :vertical="config.vertical"
      :loop="config.loop"
      :duration="config.duration"
      :width="config.width"
      :height="config.height"
      :initial-swipe="config['initial-swipe']"
      :show-indicators="config['show-indicators']"
      :lazy-render="config['lazy-render']"
      :stop-propagation="config['stop-propagation']"
      :indicator-color="config['indicator-color']"
      @change="changeHandler"
      @click="clickHandler"
    >
      <van-swipe-item class="swipe-item" v-for="item in data" :key="item.pic">
        <div class="item-wrap">
          <p class="title" :style="titleStyle">{{ item.title }}</p>
          <p class="des" :style="desStyle">{{ item.des }}</p>
          <img :src="item.pic" />
          {{ titleStyle }}
          {{ desStyle }}
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { defineComponent, computed } from 'vue';
import { spliceStyle } from "@/common/assets/js/utils.js"
export default defineComponent({
  props: {
    // banner数据
    data: {
      type: Array,
      default: () => {
        return []
      }
    },
    // banner样式配置
    config: Object
  },
  setup (props, { emit }) {
    const titleStyle = computed(() => {
      return spliceStyle(props.config.style.title)
    });
    const desStyle = computed(() => {
      return spliceStyle(props.config.style.des)
    });
    const changeHandler = (index) => {
      emit("change", index)
    }
    const clickHandler = (event) => {
      emit("click", event)
    }
    return {
      changeHandler,
      clickHandler,
      titleStyle,
      desStyle
    }
  }
})
</script>
<style lang="scss" scoped>
.swipe-item {
  color: #000;
  font-size: 25px;
  line-height: 20px;
  .item-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    .title,
    .des {
      position: absolute;
      left: 0;
      width: 100%;
      height: 20%;
      padding: 10px 10px;
    }
    .title {
      top: 0;
      padding-top: 30px;
      font-weight: bold;
    }
    .des {
      left: 50%;
      bottom: 5%;
      width: 80%;
      height: 20%;
      background: rgba(204, 204, 204, 0.3);
      transform: translateX(-50%);
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>