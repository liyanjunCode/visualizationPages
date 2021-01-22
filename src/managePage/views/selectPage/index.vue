<template>
  <div class="select">
    <a-Button
      v-for="(item, index) in data"
      :key="index"
      type="primary"
      @click="handlerClick(index)"
    >
      {{ item.name }}
    </a-Button>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import { useStore } from 'vuex'
// icons-vue
export default defineComponent({
  setup () {
    const s = useStore();
    console.log(s)
    const data = [
      { name: 'banner图', tem: "banner_template" },
      { name: '轮播图', tem: "loop_template" },
    ]
    const handlerClick = (index) => {
      console.log(index)
    }
    return {
      data,
      handlerClick
    }
  },
  compoennts: {

  }
})
</script>
<style lang="scss">
.select {
  flex: 1;
  border-right: 1px solid black;
}
</style>