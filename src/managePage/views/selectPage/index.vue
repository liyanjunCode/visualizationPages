<template>
  <div class="select">
    <a-button
      v-for="(item, index) in data"
      :key="index"
      type="primary"
      size="large"
      @click="handlerClick(item)"
    >
      {{ item.name }}
    </a-button>
  </div>
</template>
<script>
import { defineComponent, } from 'vue';
import { useStore } from 'vuex'

export default defineComponent({
  setup () {
    const store = useStore();
    const data = [
      { name: 'banner图', tem: "banner_template" },
      //   { name: '轮播图', tem: "loop_template" },
      //   { name: '单张图', tem: "onPic_template" },
      //   { name: '双张图', tem: "twoPic_template" },
    ]
    // 点击添加模板
    const handlerClick = (item) => {
      store.commit("ADD_DATA", {
        template: item.tem
      })
    }
    return {
      data,
      handlerClick
    }
  }
})
</script>
<style lang="scss">
.select {
  flex: 1;
  padding-top: 40px;
  border-right: 1px solid black;

  button {
    margin-right: 20px;
  }
}
</style>