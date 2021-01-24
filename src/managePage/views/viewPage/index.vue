<template>
  <div class="view">
    <div class="wrap" v-for="(item, index) in pageData" :key="index" @click="handlerClick(item, index)">
        <banner v-if="item.template === 'banner_template'" :data="item.data" :config="item.config"></banner>
    </div>
  </div>
</template>
<script>
import { defineComponent, computed, reactive } from 'vue';
import { useStore } from 'vuex'
import getComponent from "../../../common/assets/js/import"
export default defineComponent({
  setup () {
    const store = useStore();
    const pageData = reactive(computed(() => { return store.state.pageData }));
    const handlerClick = (item, index) => {
      store.commit("SET_CONFIG", {
        item,
        index
      })
    }
    return {
      pageData,
      handlerClick
    }
  },
  components: getComponent("@/common/component")
})
</script>
<style lang="scss">
.view {
  width: 375px;
  height: 1500px;
  overflow-y: auto;
}
</style>