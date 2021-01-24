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
      <van-swipe-item class="swipe-item" v-for="(item) in data" :key="item.pic">
        <div class="item-wrap">
          {{config.loop}}
          <p class="title">{{item.title}}</p>
          <p class="des">{{item.des}}</p>
          <img :src="item.pic">
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  props:{
    // banner数据
    data:{
      type: Array,
      default: () => {
        return []
      }
    },
    // banner样式配置
    config:Object
  },
  setup (props, { emit }) {
    const changeHandler = (index) => {
      emit("change", index)
    }
    const clickHandler = (event) => {
      emit("click", event)
    }
    return {
      changeHandler,
      clickHandler
    }
  }
})
</script>
<style lang="scss" scoped>
.swipe-item {
  color: #666;
  .item-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    .title, .des {
      position: absolute;
      left: 0;
      width: 100%;
      height: 20%;
      background: #ccc;
    }
    .title {
      top: 0;
    }
    .des {
      bottom: 5%;
      height: 20%;
    }
    img{
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  
}
</style>